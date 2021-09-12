# DeWocracy.com [![Netlify Status](https://api.netlify.com/api/v1/badges/6261a901-6f6e-4e5c-9d20-fa696bd456b5/deploy-status)](https://app.netlify.com/sites/dewocracy/deploys)


## Get started

Install Dependencies:

```sh
yarn
```

Run the project in development mode:

```sh
yarn dev
```

## Environment Variables

At the moment, Environment Variables are only needed to test/debug the Cookie and Analytics stuff. If that's the case you will need to add the following environment variables to your .env file:

`GATSBY_COOKIEBOT_GROUP_ID`

`GATSBY_DEV_AMPLITUDE_API_KEY`

## Format and lint

- `yarn lint` - ESLint fix
- `yarn format` - Prettier fix

## Build your site

`yarn build` to build your site for production.

## Deployment

Deployment powered by **Netlify** and following Variables are currently needed:

`GATSBY_COOKIEBOT_GROUP_ID`

`GATSBY_PROD_AMPLITUDE_API_KEY`

The `main` branch is being deploymed automatically to www.dewocracy.com



## Resources

- [Gatsby documentation](https://www.gatsbyjs.org/docs/)
- [Tailwind documentation](https://tailwindcss.com/docs/what-is-tailwind/)
- [Prettier documentation](https://prettier.io/docs/en/index.html)
- [ESLint documentation](https://eslint.org/docs/user-guide/configuring)

## Credits

- [Gatsby Starter Tailwind](https://github.com/taylorbryant/gatsby-starter-tailwind)
