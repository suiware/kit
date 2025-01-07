# @suiware/kit Monorepo

This monorepo includes `@suiware/kit` and a Docs site to demonstrate the kit's capabilities.

`@suiware/kit` is an opinionated React library that provides a set of React hooks and components to build Sui applications.

See [@suiware/kit API reference](https://github.com/suiware/kit/blob/main/packages/kit/docs).

### Useful Commands

- `pnpm build` - Build all packages, including the Docs site
- `pnpm dev` - Run all packages locally and preview of the Docs site
- `pnpm lint` - Lint all packages
- `pnpm changeset` - Generate a changeset
- `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)
- `pnpm kit:publish` - Publish @suiware/kit package to NPM

## Apps & Packages

This [Turborepo](https://turbo.build/repo)-powered monorepo includes the following packages and applications:

- `apps/docs`: Component documentation site (not yet finished)
- `packages/kit`: @suiware/kit
- `packages/typescript-config`: Shared `tsconfig.json`s used throughout the Turborepo
- `packages/eslint-config`: ESLint preset

### Compilation

To make the core library code work across all browsers, we compile the raw TypeScript and React code to plain JavaScript. We accomplish this with `tsup`, which uses `esbuild` to greatly improve performance.

Running `pnpm build` from the root of the Turborepo will run the `build` command defined in each package's `package.json` file. Turborepo runs each `build` in parallel and caches & hashes the output to speed up future builds.

## Docs

### API reference

[Docs](https://github.com/suiware/kit/blob/main/packages/kit/docs)

### Docs app (in progress)

A simple react app to demonstrate @suiware/kit components.

Usage:

- `pnpm dev`: Starts Storybook in dev mode with hot reloading at `localhost:6006`
- `pnpm build`: Builds the Storybook UI and generates the static HTML files
- `pnpm preview`: Starts a local server to view the generated Docs

### Why not Storybook?

Planned and tried but every Story of Storybook runs in an isolated context and Sui dApp Kit doesn't work well with that.

## Versioning & Publishing Packages

#### Current way

Increase version, then publish:

```bash
pnpm kit:publish
```

#### Alternative way with changesets (not used yet)

This example uses [Changesets](https://github.com/changesets/changesets) to manage versions, create changelogs, and publish to npm. It's preconfigured so you can start publishing packages immediately.

You'll need to create an `NPM_TOKEN` and `GITHUB_TOKEN` and add it to your GitHub repository settings to enable access to npm. It's also worth installing the [Changesets bot](https://github.com/apps/changeset-bot) on your repository.

### Generating the Changelog  (not used at the moment)

To generate your changelog, run `pnpm changeset` locally:

1. **Which packages would you like to include?** – This shows which packages and changed and which have remained the same. By default, no packages are included. Press `space` to select the packages you want to include in the `changeset`.
1. **Which packages should have a major bump?** – Press `space` to select the packages you want to bump versions for.
1. If doing the first major version, confirm you want to release.
1. Write a summary for the changes.
1. Confirm the changeset looks as expected.
1. A new Markdown file will be created in the `changeset` folder with the summary and a list of the packages included.

### Releasing (not used at the moment)

When you push your code to GitHub, the [GitHub Action](https://github.com/changesets/action) will run the `release` script defined in the root `package.json`:

```bash
turbo run build --filter=docs^... && changeset publish
```

Turborepo runs the `build` script for all publishable packages (excluding docs) and publishes the packages to npm. By default, this example includes `acme` as the npm organization. To change this, do the following:

- Rename folders in `packages/*` to replace `acme` with your desired scope
- Search and replace `acme` with your desired scope
- Re-run `pnpm install`
