const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");
const fullConfig = resolveConfig(tailwindConfig);
const path = require("path");

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.example.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;

const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  // flags: {
  //   FAST_REFRESH: true,
  // },
  siteMetadata: {
    siteUrl,
    title: `DeWocracy`,
    description: `DeWocracy offers remote work solutions for a hybrid office strategy. Manage your company's human capital, control the office occupancy rate, lower costs and increase flexibility without compromising productivity.`,
    author: `@de_wocracy`,
    linkedin: "https://www.linkedin.com/company/dewocracy/",
    twitter: "https://twitter.com/de_wocracy",
    medium: "https://medium.com/dewocracy",
    image: "src/images/banner-dw.png",
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-background-image-es5",
      options: {
        // For Tailwind
        specialChars: "/:",
      },
    },
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
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Inter",
              variants: ["300", "400", "500", "700"],
              subsets: ["latin"],
            },
          ],
        },
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
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://dewocracy.com",
        sitemap: "https://dewocracy.com/sitemap.xml",
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
      },
    },
    {
      resolve: 'gatsby-plugin-amplitude',
      options: {
        apiKey: process.env.AMPLITUDE_API_KEY,
        enableOnDevMode: true // if 'false', will be fired on NODE_ENV=production only
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`*/contact-thanks/`],
      },
    },
  ],
};
