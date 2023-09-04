# Setting Up a Monorepo with App-Centric Structure

We will be using app centric in our case:

```
app centric
  - "apps"
  - "libs", "packages"

package centric
  - "packages"
  - "libs"
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
6. Add Nx workspace
  - npx nx@latest init
  - https://nx.dev/recipes/adopting-nx/adding-to-monorepo
7. Add typscript at root
  - pnpm add -D typescript @types/node ts-node -w
  - pnpm tsc --init
  - update tsconfig to tsconfig.base.json

8. Add nestjs app (standard mode)
  - pnpx @nestjs/cli@latest new apps/<app-name>
  - Delete .git in new nest app (rm -rf apss/<app-name>/.git)

9. Add nuxt shared component
  - create npm package.json in shared-ui
  - create nuxt.mjs and vue.shim.d.ts
  - create button component
  - add shared-ui to nuxt app as dependency
  - declare module in nuxt.config.ts
## Misc

1. Adding dependency package to app:
  - pnpm add <package-to-add> --filter <app> --workspace

2. Basic command structure
  - pnpm --filter <pkg-name> <command>
  - pnpx nx run-many -t <command>

3. Display Graph
  - pnpx nx graph

4. Garbage Collection
  - pnpm store prune
