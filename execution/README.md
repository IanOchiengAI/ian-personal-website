# Execution Scripts

This folder contains **deterministic Python scripts** that perform actual work.

## Why Scripts?

The AI agent is probabilistic - scripts are deterministic. By pushing complex operations into scripts:

- 90% accuracy × 90% × 90% = 73% success (AI doing everything)
- 100% accuracy × 100% × 100% = 100% success (scripts doing work)

Scripts handle: API calls, data processing, file operations.

## Available Scripts

| Script | Purpose | Usage |
|--------|---------|-------|
| `check_build.py` | Run local build, capture errors | `python check_build.py <path>` |
| `analyze_vercel_logs.py` | Parse logs, suggest fixes | `python analyze_vercel_logs.py <log_file>` |
| `scan_codebase.py` | Scan directory structure | `python scan_codebase.py <path>` |
| `generate_structure_report.py` | Create markdown report | `python generate_structure_report.py <path>` |

## Script Conventions

1. **Shebang**: Start with `#!/usr/bin/env python3`
2. **Docstring**: Explain usage at top of file
3. **JSON output**: Return structured data when possible
4. **Exit codes**: 0 = success, 1 = failure
5. **Argparse**: Use for CLI arguments

## Adding New Scripts

1. Create `.py` file in this folder
2. Add docstring with usage instructions
3. Test the script manually
4. Reference from directive in `../directives/`
5. Update this README

---

*Scripts should be testable, reliable, and well-commented!*
