const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `DeWocracy`,
    description: `Democratizando el trabajo desde cualquier lugar.`,
    author: `@taylorbryant`,
    linkedin: "https://www.linkedin.com/company/dewocracy/",
    twitter: "https://twitter.com/de_wocracy",
    medium: "https://medium.com/dewocracy",
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DeWocracy`,
        short_name: `DeWocracy`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.brand,
        display: `minimal-ui`,
        icon: `src/images/DW-logo-32x32.png`,
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-fontawesome-css`,
  ],
};
