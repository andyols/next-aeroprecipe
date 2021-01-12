# My personal starter app (wip) with Next.js + chakra-ui

This starter features a comprehensive layout structure using [chakra-ui](https://github.com/chakra-ui/chakra-ui) as the component library within a [Next.js](https://github.com/vercel/next.js) app.

It uses Next.js `_app.js` + `_document.js` root pages in conjunction with `chakra-ui`'s Theme and ColorMode containers / scripts so the pages can have app-wide dark/light mode.

It also includes an example page using the built in routing system from next.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the starter:

```bash
npx create-next-app [project-name] -e https://github.com/andyols/next-chakra-starter
# or
pnpx create-next-app [project-name] -e https://github.com/andyols/next-chakra-starter
# or
yarn create next-app [project-name] -e https://github.com/andyols/next-chakra-starter
```

After installing if using pnpm:

```bash
cd [project-name] && rm -rf node_modules && rm package-lock.json && pnpm i
```

This is because create-next-app uses npm to install dependencies during the bootstrap process so these commands serve as post-install remedy to that.
