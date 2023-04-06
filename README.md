# solid-gadgets

- [Components](./packages/components/README.md)
- [Web Components](./packages/web-components/README.md)

## dev

### setup

`pnpm run init`

### demos for solid-gadgets

`pnpm dev:demo`

### storybook for solid-gadgets

`pnpm storybook`

### publish

switch to another branch to publish your alpha/beta version.

`git checkout -b <branch name>-publish`
`pnpm changeset` to select the minor version
`pnpm beta && pnpm version:packages`
`pnpm release`

only the main branch can be used to publish the formal version.

`pnpm changeset` to select the packages that you want to version.
`pnpm version:packages` to update the versions
`pnpm release` to publish

### deploy github page for demos

`pnpm gh:demos`

### License
