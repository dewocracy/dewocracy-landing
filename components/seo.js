import PropTypes from "prop-types";
import React from "react";
import Head from 'next/head'
import config from "../config"
/*
const siteMetadata = {
  "siteUrl": "",
  title: `DeWocracy`,
  description: `DeWocracy offers remote work solutions for a hybrid office strategy. Manage your company's human capital, control the office occupancy rate, lower costs and increase flexibility without compromising productivity.`,
  author: `@de_wocracy`,
  linkedin: "https://www.linkedin.com/company/dewocracy/",
  twitter: "https://twitter.com/de_wocracy",
  medium: "https://medium.com/dewocracy",
  image: "src/images/banner-dw.png",
}*/

function SEO({ description, title, url, image }) {


  const fullURL = url || "https://dewocracy.com"
  const fullImage = url ? "https://dewocracy.com" + url : "https://dewocracy.com" + "/images/banner-dw.png"

  return (
    <Head>
      <title>{`${title} | ${config.siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={config.siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.author} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="og:url" content={fullURL} />
      <meta property="og:image" content={fullImage} />

    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  keywords: [`dewocracy`, `work office`, `remote work`, `teleworking`],
  meta: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default SEO;
