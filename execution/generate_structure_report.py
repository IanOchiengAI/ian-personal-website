#!/usr/bin/env python3
"""
generate_structure_report.py - Generate a markdown report of codebase structure

Usage:
    python generate_structure_report.py <project_path> [--output FILE]

Generates a comprehensive markdown report including:
- Project overview and type
- Directory structure
- Technology stack
- Entry points
- Dependency summary
"""

import sys
import json
import argparse
from pathlib import Path
from datetime import datetime

# Import scan functions from scan_codebase
try:
    from scan_codebase import detect_project_type, find_entry_points, count_files_by_extension, get_dependencies
except ImportError:
    # Fallback if run standalone
    import subprocess
    
    def run_scanner(path):
        result = subprocess.run(
            [sys.executable, str(Path(__file__).parent / "scan_codebase.py"), str(path), "--json"],
            capture_output=True, text=True
        )
        return json.loads(result.stdout)


def generate_report(path: Path) -> str:
    """Generate a markdown report for the project."""
    
    # Get scan data
    try:
        project_types = detect_project_type(path)
        entry_points = find_entry_points(path)
        file_counts = count_files_by_extension(path, 4)
        dependencies = get_dependencies(path)
    except NameError:
        data = run_scanner(path)
        project_types = data.get("project_types", ["unknown"])
        entry_points = data.get("entry_points", [])
        file_counts = data.get("file_counts", {})
        dependencies = data.get("dependencies", {})
    
    # Build report
    lines = [
        f"# Codebase Report: {path.name}",
        "",
        f"> Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}",
        "",
        "## Overview",
        "",
        f"- **Path**: `{path.absolute()}`",
        f"- **Project Type**: {', '.join(project_types)}",
        f"- **Total File Types**: {len(file_counts)}",
        "",
    ]
    
    # Entry Points
    if entry_points:
        lines.extend([
            "## Entry Points",
            "",
        ])
        for ep in entry_points:
            lines.append(f"- `{ep}`")
        lines.append("")
    
    # File Summary
    lines.extend([
        "## File Summary",
        "",
        "| Extension | Count |",
        "|-----------|-------|",
    ])
    for ext, count in list(file_counts.items())[:15]:
        lines.append(f"| {ext} | {count} |")
    if len(file_counts) > 15:
        lines.append(f"| ... | +{len(file_counts) - 15} more |")
    lines.append("")
    
    # Dependencies
    if dependencies:
        lines.extend([
            "## Dependencies",
            "",
        ])
        
        if "npm" in dependencies:
            npm = dependencies["npm"]
            if npm.get("dependencies"):
                lines.append(f"### Production ({len(npm['dependencies'])})")
                lines.append("")
                lines.append(", ".join(f"`{d}`" for d in npm["dependencies"][:20]))
                lines.append("")
            if npm.get("devDependencies"):
                lines.append(f"### Dev ({len(npm['devDependencies'])})")
                lines.append("")
                lines.append(", ".join(f"`{d}`" for d in npm["devDependencies"][:10]))
                lines.append("")
        
        if "python" in dependencies:
            lines.append("### Python Packages")
            lines.append("")
            lines.append(", ".join(f"`{d}`" for d in dependencies["python"][:20]))
            lines.append("")
    
    # Key Files
    lines.extend([
        "## Key Configuration Files",
        "",
    ])
    
    config_files = [
        "package.json", "tsconfig.json", "next.config.js", "next.config.mjs",
        "vite.config.js", "tailwind.config.js", "vercel.json", ".env.example",
        "requirements.txt", "pyproject.toml"
    ]
    
    found_configs = [f for f in config_files if (path / f).exists()]
    if found_configs:
        for cf in found_configs:
            lines.append(f"- `{cf}`")
    else:
        lines.append("- No common config files found")
    lines.append("")
    
    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(description="Generate codebase structure report")
    parser.add_argument("path", help="Path to scan")
    parser.add_argument("--output", "-o", help="Output file (default: stdout)")
    
    args = parser.parse_args()
    path = Path(args.path)
    
    if not path.exists():
        print(f"Error: Path not found: {path}", file=sys.stderr)
        sys.exit(1)
    
    report = generate_report(path)
    
    if args.output:
        output_path = Path(args.output)
        output_path.parent.mkdir(parents=True, exist_ok=True)
        output_path.write_text(report, encoding="utf-8")
        print(f"Report saved to: {output_path}")
    else:
        print(report)


if __name__ == "__main__":
    main()
