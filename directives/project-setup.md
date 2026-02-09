# Project Setup Agent

> Standard Operating Procedure for initializing agent structure in new projects

## Goal

Initialize the `directives/`, `execution/`, and `.tmp/` folder structure for a new project, following the Antigravity 3-layer architecture.

## Inputs

| Input | Description | Example |
|-------|-------------|---------|
| `project_path` | Root directory of project | `C:\Users\User\Desktop\Projects\NewProject` |
| `project_type` | Type of project | `nextjs`, `python`, `static` |
| `existing_agents` | Path to template (optional) | `Antigravity Template` folder |

## Workflow

1. **Check existing structure**
   - Does `directives/` exist? → Skip or merge
   - Does `execution/` exist? → Skip or merge
   - Does `.tmp/` exist? → Skip

2. **Create directories**

   ```
   mkdir directives/
   mkdir execution/
   mkdir .tmp/
   ```

3. **Add template files**
   - `directives/README.md` - Explains directive format
   - `execution/README.md` - Explains script conventions
   - `.env.example` - Template for API keys

4. **Create AGENTS.md** if not exists
   - Reference master template
   - Add project-specific notes

5. **Verify setup**
   - All directories exist
   - README files in place

## Outputs

- 📁 `directives/` folder with README
- 📁 `execution/` folder with README  
- 📁 `.tmp/` folder for intermediates
- 📄 `AGENTS.md` configuration
- 📄 `.env.example` template

## Directory Template

```
project/
├── AGENTS.md           # Agent configuration
├── directives/         # SOPs in Markdown
│   └── README.md
├── execution/          # Python scripts
│   └── README.md
├── .tmp/               # Temporary files
└── .env.example        # Environment template
```

---

*Last updated: 2026-02-08*
