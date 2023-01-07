# Home-me 🏠💙

## What
A platform to:
- View available properties for renting/purchasing
- Advertise properties for renting/purchasing
- Book viewings

## How
Gamify the experience of searching for property to buy/rent

## Features
- OAuth profile https://github.com/Onex101/home-me/issues/17
- Gamified property search https://github.com/Onex101/home-me/issues/2
- Property filter https://github.com/Onex101/home-me/issues/10
- Advertise properties for rent/sale https://github.com/Onex101/home-me/issues/11
- Save a fave https://github.com/Onex101/home-me/issues/12
- Property details https://github.com/Onex101/home-me/issues/13
- Viewings https://github.com/Onex101/home-me/issues/14
- View offers https://github.com/Onex101/home-me/issues/3
- Notification when filter matches newly available property https://github.com/Onex101/home-me/issues/15
- Application documents saved on profile for speeding up the application process https://github.com/Onex101/home-me/issues/16


# SolidStart

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com);

## Creating a project

```bash
# create a new project in the current directory
npm init solid@latest

# create a new project in my-app
npm init solid@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.


## Testing

Tests are written with `vitest`, `@solidjs/testing-library` and `@testing-library/jest-dom` to extend expect with some helpful custom matchers.

To run them, simply start:

```sh
npm test
```
