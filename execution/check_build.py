#!/usr/bin/env python3
"""
check_build.py - Run local build and capture errors

Usage:
    python check_build.py <project_path>

Returns:
    JSON with build status, errors, and suggestions
"""

import subprocess
import sys
import json
import os
from pathlib import Path


def detect_project_type(project_path: Path) -> str:
    """Detect the project type based on config files."""
    if (project_path / "next.config.js").exists() or (project_path / "next.config.mjs").exists():
        return "nextjs"
    if (project_path / "vite.config.js").exists() or (project_path / "vite.config.ts").exists():
        return "vite"
    if (project_path / "package.json").exists():
        return "node"
    if (project_path / "index.html").exists():
        return "static"
    return "unknown"


def get_build_command(project_type: str) -> list:
    """Get the appropriate build command for the project type."""
    commands = {
        "nextjs": ["npm", "run", "build"],
        "vite": ["npm", "run", "build"],
        "node": ["npm", "run", "build"],
        "static": None,
    }
    return commands.get(project_type)


def run_build(project_path: Path) -> dict:
    """Run the build command and capture output."""
    project_type = detect_project_type(project_path)
    build_cmd = get_build_command(project_type)
    
    if build_cmd is None:
        return {
            "success": True,
            "project_type": project_type,
            "message": "Static project - no build required",
            "errors": []
        }
    
    # Check if node_modules exists
    if not (project_path / "node_modules").exists():
        return {
            "success": False,
            "project_type": project_type,
            "message": "node_modules not found - run 'npm install' first",
            "errors": [{"type": "missing_deps", "message": "node_modules directory not found"}]
        }
    
    try:
        result = subprocess.run(
            build_cmd,
            cwd=project_path,
            capture_output=True,
            text=True,
            timeout=300,
            shell=True if sys.platform == "win32" else False
        )
        
        errors = parse_errors(result.stderr + result.stdout)
        
        return {
            "success": result.returncode == 0,
            "project_type": project_type,
            "returncode": result.returncode,
            "errors": errors,
            "stdout": result.stdout[-2000:] if len(result.stdout) > 2000 else result.stdout,
            "stderr": result.stderr[-2000:] if len(result.stderr) > 2000 else result.stderr,
        }
    except subprocess.TimeoutExpired:
        return {
            "success": False,
            "project_type": project_type,
            "message": "Build timed out after 5 minutes",
            "errors": [{"type": "timeout", "message": "Build process timed out"}]
        }
    except Exception as e:
        return {
            "success": False,
            "project_type": project_type,
            "message": str(e),
            "errors": [{"type": "exception", "message": str(e)}]
        }


def parse_errors(output: str) -> list:
    """Parse common error patterns from build output."""
    errors = []
    
    patterns = [
        ("typescript", "error TS", "TypeScript compilation error"),
        ("eslint", "error  ", "ESLint error"),
        ("module_not_found", "Cannot find module", "Missing dependency"),
        ("syntax", "SyntaxError", "Syntax error"),
        ("type_error", "TypeError", "Type error at runtime"),
    ]
    
    lines = output.split("\n")
    for line in lines:
        for error_type, pattern, description in patterns:
            if pattern in line:
                errors.append({
                    "type": error_type,
                    "description": description,
                    "line": line.strip()[:200]
                })
                break
    
    return errors[:20]  # Limit to 20 errors


def main():
    if len(sys.argv) < 2:
        print("Usage: python check_build.py <project_path>")
        sys.exit(1)
    
    project_path = Path(sys.argv[1])
    
    if not project_path.exists():
        print(json.dumps({"success": False, "message": f"Path not found: {project_path}"}))
        sys.exit(1)
    
    result = run_build(project_path)
    print(json.dumps(result, indent=2))
    
    sys.exit(0 if result["success"] else 1)


if __name__ == "__main__":
    main()
