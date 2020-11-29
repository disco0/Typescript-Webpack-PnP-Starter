# Typescript-Webpack-PnP-Starter
Skeleton Typescript project with Yarn PnP enabled. 

### Additional configuration added in fork ([source repo](https://github.com/Robula/Typescript-Webpack-PnP-Starter))

* Webpack
  - Now configured via `webpack.config.ts`, with separate `tsconfig.json` and utility scripts in `package.json` to handle calling with proper environment (see Webpack's ["Configuration Languages" documentation](https://webpack.js.org/configuration/configuration-languages/)).
  
  - Configuration related files moved to `./webpack` to reduce base directory clutter (and help VS Code properly identify `webpack.config.ts`' `tsconfig.json`).
  
  - TypeScript compilation now done with `ts-loader` instead of Babel.

* Etc.
  - Small updates to `.gitignore`
## Setup
1. Run `yarn` to download and cache the `package.json` dependencies.
2. For web projects, `yarn add` the framework/libraries of your choice.

*Note: PnP cache has not been committed to Git*