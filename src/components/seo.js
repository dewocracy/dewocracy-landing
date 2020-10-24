import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet, useTranslation } from "gatsby-plugin-react-i18next";

function SEO({ description, lang, meta, keywords, title }) {
  const { t } = useTranslation();
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          siteUrl
          title
          description
          author
        }
      }
    }
  `);

  const metaDescription = t(description || site.siteMetadata.description);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: t(title),
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: t(title),
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.map(t).join(`, `),
              }
            : []
        )
        .concat(meta)}
      title={t(title)}
    >
      <link rel="canonical" href={site.siteMetadata.siteUrl} />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  keywords: [
    `dewocracy`,
    `espacio oficina`,
    `oficina`,
    `optimizar espacio oficina`,
  ],
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
