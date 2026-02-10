# Agent Instructions - Ian Personal Website

> This project inherits from the master agent template at `..\.agent-template\AGENTS.md`

## Brand-Specific Configuration

This is the agent configuration for **Ian's Personal Website**.

### Inherited Architecture

- 3-Layer Architecture (Directive → Orchestration → Execution)
- Shared Skills (brand-extractor, brand-guidelines, frontend-design, skill-creator)
- Self-annealing error recovery

### Brand-Specific Customizations

Add brand-specific directives in `directives/` folder:

- Design preferences (Cyber-Organic, Cyan/Lime)
- Color schemes
- Content requirements
- Deployment targets
- **Pulse Studio Operations**: See [pulse-studio-operations.md](file:///c:/Users/User/Desktop/Projects/Ian%20Personal%20Website/directives/pulse-studio-operations.md) for agency business logic and brand DNA.

### Directory Structure

```
Ian Personal Website/
├── AGENTS.md              # This file
├── .agent/workflows/      # Inherited skills + brand-specific
├── directives/            # Brand-specific SOPs
├── execution/             # Brand-specific scripts
├── .tmp/                  # Temporary files
└── .env                   # API keys (copy from .env.example)
```

---

*See master template at `..\.agent-template\AGENTS.md` for full architecture documentation.*
