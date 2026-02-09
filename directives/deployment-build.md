# Deployment Build Agent

> Standard Operating Procedure for fixing Vercel/Next.js build failures

## Goal

Identify, diagnose, and fix deployment build failures. Update this directive with learnings after each fix.

## Inputs

| Input | Description | Example |
|-------|-------------|---------|
| `project_path` | Root directory of the project | `C:\Users\User\Desktop\Projects\Ian Personal Website` |
| `error_logs` | Build error output or Vercel logs | Terminal output or dashboard logs |

## Workflow

1. **Run local build** → `execution/check_build.py`
   - Captures build errors locally before pushing
   - Returns structured error report

2. **Analyze errors** → `execution/analyze_vercel_logs.py`
   - Parses error messages
   - Categorizes by type (TypeScript, ESLint, missing deps)
   - Suggests fixes based on patterns

3. **Apply fixes** based on error category:
   - **TypeScript errors**: Add to `ignoreBuildErrors` or fix types
   - **ESLint errors**: Fix or add to `ignoreDuringBuilds`
   - **Missing deps**: `npm install <package>`
   - **Config conflicts**: Check `next.config.js` vs GitHub Actions

4. **Re-run build** to verify fix

5. **Update this directive** with new patterns learned

## Common Error Patterns

| Error Type | Pattern | Fix |
|------------|---------|-----|
| TypeScript strict | `Property 'x' does not exist` | Add type or use `as any` |
| Missing module | `Cannot find module` | `npm install` the package |
| Export conflict | `output: 'export'` errors | Remove for Vercel SSR |
| GitHub Actions fail | `./out` not found | Disable GHP workflow |

## Outputs

- ✅ Successful local build
- 📝 Updated error patterns in this directive
- 🚀 Deployment triggered on push

## Edge Cases

- **Monorepo**: Check `rootDirectory` in `vercel.json`
- **Environment variables**: Ensure `.env` vars are in Vercel dashboard
- **Node version**: Check `engines` in `package.json`

---

*Last updated: 2026-02-08*
