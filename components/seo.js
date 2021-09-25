import PropTypes from "prop-types";
import React from "react";

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

function SEO() {


  return (
    <> </>
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
};

export default SEO;
