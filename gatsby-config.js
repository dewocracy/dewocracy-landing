const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `DeWocracy`,
    description: `DeWocracy ofrece soluciones para el teletrabajo y el desarrollo de una estrategia de oficina híbrida. Gestiona el trabajo remoto, controla la ocupación de tu oficina, reduce costes e incrementa la flexibilidad de tu empresa sin disminuir la productividad.`,
    author: `@de_wocracy`,
    linkedin: "https://www.linkedin.com/company/dewocracy/",
    twitter: "https://twitter.com/de_wocracy",
    medium: "https://medium.com/dewocracy",
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DeWocracy`,
        short_name: `DeWocracy`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.primary,
        display: `minimal-ui`,
        icon: `src/images/dw-blue.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        path: `${__dirname}/src/locales`,
        languages: [`en`, `es`, `ca`],
        defaultLanguage: `en`,
        siteUrl: "https://dewocracy.com",

        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
  ],
};
