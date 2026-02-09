#!/usr/bin/env python3
"""
scan_codebase.py - Scan a codebase and output structured information

Usage:
    python scan_codebase.py <project_path> [--depth N] [--json]

Returns:
    JSON or text with codebase structure and metadata
"""

import sys
import json
import os
from pathlib import Path
from collections import defaultdict
import argparse


# Directories to skip
SKIP_DIRS = {
    "node_modules", ".git", ".next", "dist", "build", "__pycache__",
    ".venv", "venv", ".tmp", ".cache", "coverage", ".nyc_output"
}

# Project type indicators
PROJECT_INDICATORS = {
    "next.config.js": "nextjs",
    "next.config.mjs": "nextjs",
    "next.config.ts": "nextjs",
    "vite.config.js": "vite",
    "vite.config.ts": "vite",
    "nuxt.config.js": "nuxt",
    "angular.json": "angular",
    "vue.config.js": "vue",
    "requirements.txt": "python",
    "pyproject.toml": "python",
    "Cargo.toml": "rust",
    "go.mod": "go",
    "composer.json": "php",
    "Gemfile": "ruby",
}


def scan_directory(path: Path, max_depth: int = 5, current_depth: int = 0) -> dict:
    """Recursively scan a directory and build structure."""
    
    if current_depth > max_depth:
        return {"truncated": True}
    
    result = {
        "name": path.name,
        "type": "directory",
        "children": []
    }
    
    try:
        entries = sorted(path.iterdir(), key=lambda x: (not x.is_dir(), x.name.lower()))
        
        for entry in entries:
            if entry.name.startswith(".") and entry.name not in {".env.example", ".gitignore"}:
                continue
            if entry.name in SKIP_DIRS:
                continue
            
            if entry.is_dir():
                child = scan_directory(entry, max_depth, current_depth + 1)
                result["children"].append(child)
            else:
                result["children"].append({
                    "name": entry.name,
                    "type": "file",
                    "size": entry.stat().st_size,
                    "extension": entry.suffix.lower()
                })
    except PermissionError:
        result["error"] = "Permission denied"
    
    return result


def detect_project_type(path: Path) -> list:
    """Detect project type(s) from indicator files."""
    types = []
    for filename, project_type in PROJECT_INDICATORS.items():
        if (path / filename).exists():
            types.append(project_type)
    
    # Check for package.json separately
    if (path / "package.json").exists() and not types:
        types.append("node")
    
    if (path / "index.html").exists() and not types:
        types.append("static")
    
    return types if types else ["unknown"]


def count_files_by_extension(path: Path, max_depth: int = 5) -> dict:
    """Count files by extension."""
    counts = defaultdict(int)
    
    for root, dirs, files in os.walk(path):
        # Skip unwanted directories
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS and not d.startswith(".")]
        
        depth = str(root).replace(str(path), "").count(os.sep)
        if depth > max_depth:
            continue
        
        for f in files:
            ext = Path(f).suffix.lower() or "(no extension)"
            counts[ext] += 1
    
    return dict(sorted(counts.items(), key=lambda x: -x[1]))


def find_entry_points(path: Path) -> list:
    """Find likely entry point files."""
    entry_patterns = [
        "index.html", "index.js", "index.ts", "index.tsx",
        "main.js", "main.ts", "main.py",
        "app.js", "app.ts", "app.tsx", "app.py",
        "server.js", "server.ts", "server.py",
        "src/index.js", "src/index.ts", "src/index.tsx",
        "src/main.js", "src/main.ts",
        "src/App.tsx", "src/App.js",
        "pages/index.tsx", "pages/index.js",
        "app/page.tsx", "app/page.js",
    ]
    
    found = []
    for pattern in entry_patterns:
        full_path = path / pattern
        if full_path.exists():
            found.append(pattern)
    
    return found


def get_dependencies(path: Path) -> dict:
    """Extract dependencies from package.json or requirements.txt."""
    deps = {}
    
    # Check package.json
    pkg_path = path / "package.json"
    if pkg_path.exists():
        try:
            with open(pkg_path, "r", encoding="utf-8") as f:
                pkg = json.load(f)
                deps["npm"] = {
                    "dependencies": list(pkg.get("dependencies", {}).keys()),
                    "devDependencies": list(pkg.get("devDependencies", {}).keys()),
                }
        except (json.JSONDecodeError, IOError):
            pass
    
    # Check requirements.txt
    req_path = path / "requirements.txt"
    if req_path.exists():
        try:
            with open(req_path, "r", encoding="utf-8") as f:
                lines = [l.strip().split("==")[0].split(">=")[0] for l in f if l.strip() and not l.startswith("#")]
                deps["python"] = lines
        except IOError:
            pass
    
    return deps


def main():
    parser = argparse.ArgumentParser(description="Scan a codebase and output structure")
    parser.add_argument("path", help="Path to scan")
    parser.add_argument("--depth", type=int, default=4, help="Max depth to scan")
    parser.add_argument("--json", action="store_true", help="Output as JSON")
    
    args = parser.parse_args()
    path = Path(args.path)
    
    if not path.exists():
        print(json.dumps({"error": f"Path not found: {path}"}))
        sys.exit(1)
    
    result = {
        "path": str(path.absolute()),
        "project_types": detect_project_type(path),
        "entry_points": find_entry_points(path),
        "file_counts": count_files_by_extension(path, args.depth),
        "dependencies": get_dependencies(path),
    }
    
    if args.json:
        result["structure"] = scan_directory(path, args.depth)
    
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
