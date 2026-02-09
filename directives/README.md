# Directives

This folder contains **Standard Operating Procedures (SOPs)** for the AI agent.

## What are Directives?

Directives are natural language instructions written in Markdown. They tell the agent:

- **What** to accomplish (goals)
- **What inputs** are needed
- **Which tools/scripts** to use
- **What outputs** to produce
- **Edge cases** to handle

## Format

Each directive should include:

```markdown
# [Agent Name]

> Brief description

## Goal
What this agent accomplishes

## Inputs
| Input | Description | Example |

## Workflow
1. Step 1 → `execution/script.py`
2. Step 2 → ...

## Outputs
- What gets produced

## Edge Cases
- Special situations
```

## Available Directives

| Directive | Purpose |
|-----------|---------|
| [deployment-build.md](deployment-build.md) | Fix Vercel build failures |
| [codebase-explorer.md](codebase-explorer.md) | Scan and report codebase structure |
| [project-setup.md](project-setup.md) | Initialize agent folder structure |

## Adding New Directives

1. Create a new `.md` file in this folder
2. Follow the format above
3. Reference any scripts in `../execution/`
4. Update this README with the new directive

---

*Directives are living documents - update them as you learn!*
