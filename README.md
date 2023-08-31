# Monorepo

We will be using app centric in our case:

```
app centric
  - "apps"
  - "libs", "packages"

package centric
  - "packages"
```

1. Initialize git repo
2. Initialize npm - package.json
3. Initalize pnpm workspace
  - Create pnpm-worspace.yaml file
4. Create nuxt app in apps
  - pnpx nuxi@latest init nuxt-landing
  - update the name in new app package.json (@org/nuxt-landing)
5. Run the nuxt in the root level:
  - pnpm --filter @org/nuxt-landing dev (package.json scripts ref)
  - app is running in port 3000 by default


## Misc

1. Adding dependency package to app:
  - pnpm add <package-to-add> --filter <app> --worspace




