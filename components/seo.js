import PropTypes from "prop-types";
import React from "react";
import Head from 'next/head'
import config from "../config"
import { useRouter } from 'next/router'

function SEO({ description, title, url, image }) {
  const { locale } = useRouter()

  const { siteUrl, siteDescription, siteTitle, author } = config


  const fullURL = url ?? siteUrl
  const fullImage = image ? siteUrl + `images/og/${image}_${locale}.jpg` : siteUrl + `images/og/default_${locale}.jpg`

  const fullDesscription = description ?? siteDescription

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={fullDesscription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:creator" content={author} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="og:url" content={fullURL} />
      <meta property="og:image" content={fullImage} />
      <meta name="twitter:card" content="summary_large_image" />
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
  url: PropTypes.string,
  image: PropTypes.string

};

export default SEO;
