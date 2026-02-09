# Codebase Explorer Agent

> Standard Operating Procedure for analyzing and documenting codebase structure

## Goal

Scan any codebase and generate a comprehensive report of its structure, technology stack, and key entry points.

## Inputs

| Input | Description | Example |
|-------|-------------|---------|
| `project_path` | Root directory to scan | `C:\Users\User\Desktop\Projects\Ian Personal Website` |
| `depth` | How deep to scan (optional) | `3` levels |

## Workflow

1. **Scan directory** → `execution/scan_codebase.py`
   - Recursively scans folder structure
   - Detects project type
   - Counts files by extension

2. **Generate report** → `execution/generate_structure_report.py`
   - Creates markdown summary
   - Lists technology stack
   - Identifies entry points

3. **Output report** to `.tmp/codebase_report.md`

## Outputs

- 📊 **Structure report**: File/folder breakdown
- 🔧 **Tech stack**: Detected frameworks and tools
- 🚪 **Entry points**: Main files (index, app, main)
- 📦 **Dependencies**: From package.json, requirements.txt, etc.

## Project Type Detection

| Indicator | Project Type |
|-----------|-------------|
| `next.config.js` | Next.js |
| `vite.config.js` | Vite |
| `package.json` only | Generic Node.js |
| `index.html` only | Static HTML |
| `requirements.txt` | Python |
| `Cargo.toml` | Rust |

## Edge Cases

- **Monorepo**: Check for `packages/` or `apps/` directories
- **Hybrid projects**: May have multiple package.json files
- **Large repos**: Limit depth to avoid timeout

---

*Last updated: 2026-02-08*
