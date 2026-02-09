#!/usr/bin/env python3
"""
analyze_vercel_logs.py - Parse and analyze Vercel deployment logs

Usage:
    python analyze_vercel_logs.py <log_file_or_text>

Can be used with:
    - A file path containing logs
    - Piped input: echo "log text" | python analyze_vercel_logs.py -

Returns:
    JSON with categorized errors and suggested fixes
"""

import sys
import json
import re
from pathlib import Path


# Error patterns and their fixes
ERROR_PATTERNS = {
    "typescript_strict": {
        "patterns": [
            r"error TS\d+:",
            r"Type '.*' is not assignable",
            r"Property '.*' does not exist",
        ],
        "category": "TypeScript",
        "severity": "high",
        "fixes": [
            "Add `typescript: { ignoreBuildErrors: true }` to next.config.js",
            "Fix the type error in the source file",
            "Add proper type definitions"
        ]
    },
    "eslint": {
        "patterns": [
            r"ESLint.*error",
            r"error\s+.*eslint",
            r"'.*' is defined but never used",
        ],
        "category": "ESLint",
        "severity": "medium",
        "fixes": [
            "Add `eslint: { ignoreDuringBuilds: true }` to next.config.js",
            "Fix the linting error",
            "Disable the specific rule with // eslint-disable-next-line"
        ]
    },
    "module_not_found": {
        "patterns": [
            r"Cannot find module '(.*)'",
            r"Module not found: Can't resolve '(.*)'",
        ],
        "category": "Missing Dependency",
        "severity": "critical",
        "fixes": [
            "Run `npm install <package-name>`",
            "Check if package is in dependencies (not devDependencies) for production",
            "Verify import path is correct"
        ]
    },
    "out_directory": {
        "patterns": [
            r"./out.*not found",
            r"No such file or directory.*out",
            r"output: 'export'",
        ],
        "category": "Static Export Conflict",
        "severity": "high",
        "fixes": [
            "Remove `output: 'export'` from next.config.js for Vercel SSR",
            "Disable GitHub Pages workflow if using Vercel",
            "Delete .github/workflows/*.yml for GHP"
        ]
    },
    "env_missing": {
        "patterns": [
            r"Environment variable.*not found",
            r"Missing required env",
            r"process\.env\.\w+ is undefined",
        ],
        "category": "Environment Variables",
        "severity": "critical",
        "fixes": [
            "Add the variable to Vercel project settings",
            "Check .env.example for required variables",
            "Ensure env var prefix matches framework (NEXT_PUBLIC_ for client-side)"
        ]
    },
    "memory": {
        "patterns": [
            r"JavaScript heap out of memory",
            r"FATAL ERROR.*heap",
        ],
        "category": "Memory",
        "severity": "critical",
        "fixes": [
            "Add NODE_OPTIONS='--max-old-space-size=4096' to build command",
            "Optimize imports and reduce bundle size",
            "Check for circular dependencies"
        ]
    },
}


def analyze_logs(log_text: str) -> dict:
    """Analyze log text and categorize errors."""
    findings = []
    lines = log_text.split("\n")
    
    for error_type, config in ERROR_PATTERNS.items():
        for pattern in config["patterns"]:
            matches = []
            for i, line in enumerate(lines):
                if re.search(pattern, line, re.IGNORECASE):
                    matches.append({
                        "line_number": i + 1,
                        "content": line.strip()[:200]
                    })
            
            if matches:
                findings.append({
                    "type": error_type,
                    "category": config["category"],
                    "severity": config["severity"],
                    "count": len(matches),
                    "matches": matches[:5],  # Limit to 5 examples
                    "suggested_fixes": config["fixes"]
                })
    
    # Sort by severity
    severity_order = {"critical": 0, "high": 1, "medium": 2, "low": 3}
    findings.sort(key=lambda x: severity_order.get(x["severity"], 99))
    
    return {
        "total_lines": len(lines),
        "issues_found": len(findings),
        "findings": findings,
        "summary": generate_summary(findings)
    }


def generate_summary(findings: list) -> str:
    """Generate a human-readable summary."""
    if not findings:
        return "No known error patterns detected. Review logs manually."
    
    critical = [f for f in findings if f["severity"] == "critical"]
    high = [f for f in findings if f["severity"] == "high"]
    
    parts = []
    if critical:
        parts.append(f"🔴 {len(critical)} critical issue(s): {', '.join(f['category'] for f in critical)}")
    if high:
        parts.append(f"🟠 {len(high)} high severity issue(s): {', '.join(f['category'] for f in high)}")
    
    if parts:
        return " | ".join(parts)
    return f"Found {len(findings)} issue(s) of lower severity"


def main():
    if len(sys.argv) < 2:
        # Try reading from stdin
        if not sys.stdin.isatty():
            log_text = sys.stdin.read()
        else:
            print("Usage: python analyze_vercel_logs.py <log_file>")
            print("   or: cat logs.txt | python analyze_vercel_logs.py -")
            sys.exit(1)
    elif sys.argv[1] == "-":
        log_text = sys.stdin.read()
    else:
        log_path = Path(sys.argv[1])
        if not log_path.exists():
            print(json.dumps({"error": f"File not found: {log_path}"}))
            sys.exit(1)
        log_text = log_path.read_text(encoding="utf-8", errors="ignore")
    
    result = analyze_logs(log_text)
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
