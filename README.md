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
6. Add Nx workspace
  - npx nx@latest init
  - https://nx.dev/recipes/adopting-nx/adding-to-monorepo
7. Add typscript at root
  - pnpm add -D typescript @types/node ts-node -w
  - pnpm tsc --init
  - update tsconfig to tsconfig.base.json
  ```
  {
    "compileOnSave": false,
    "compilerOptions": {
      "rootDir": ".",
      "sourceMap": true,
      "declaration": false,
      "moduleResolution": "node",
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "importHelpers": true,
      "target": "es2015",
      "module": "esnext",
      "lib": ["es2020", "dom"],
      "skipLibCheck": true,
      "skipDefaultLibCheck": true,
      "baseUrl": ".",
      "paths": {}
    },
    "exclude": ["node_modules", "tmp"]
  }

  ```


## Misc

1. Adding dependency package to app:
  - pnpm add <package-to-add> --filter <app> --worspace




