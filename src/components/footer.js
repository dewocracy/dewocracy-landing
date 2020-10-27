import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export const Footer = () => {
  const { site, dwBlue, downloadApple, downloadPlay } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          linkedin
          twitter
          medium
        }
      }
      dwBlue: file(relativePath: { eq: "dewocracy-blue.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 150, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      downloadApple: file(relativePath: { eq: "download-apple-store.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      downloadPlay: file(relativePath: { eq: "download-play-store.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 152) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);
  return (
    <footer className="w-full bg-fixed py-16 px-8 md:px-0">
      <section className="container mx-auto text-white grid lg:grid-cols-3 gap-4  justify-center lg:justify-between md:gap-y-8">
        <div className="flex md:justify-center">
          <a href="/" title="DeWocracy home">
            <Img className="w-56" fluid={dwBlue.childImageSharp.fluid} alt="" />
          </a>
        </div>
        <div className="flex justify-center">
          <a
            className="pr-4"
            href="#contact"
            title="Download DeWocracy app from the apple store"
          >
            <Img
              className="w-40"
              fluid={downloadApple.childImageSharp.fluid}
              alt=""
            />
          </a>
          <a href="#contact" title="Download DeWocracy app from the play store">
            <Img
              className="w-40"
              fluid={downloadPlay.childImageSharp.fluid}
              alt=""
            />
          </a>
        </div>
        <div className="grid justify-items-center lg:justify-items-end lg:items-end">
          <p className="text-primary font-bold text-right flex justify-between w-64">
            <a
              href={site.siteMetadata.linkedin}
              rel="noreferrer noopener"
              target="_blank"
              title="DeWocracy Linkedin"
            >
              Linkedin
            </a>
            <a
              href={site.siteMetadata.twitter}
              rel="noreferrer noopener"
              target="_blank"
              title="DeWocracy twitter"
            >
              Twitter
            </a>
            <a
              href={site.siteMetadata.medium}
              rel="noreferrer noopener"
              target="_blank"
              title="DeWocracy Linkedin"
            >
              Medium
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
};
