import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import {
  faApple,
  faGoogle,
  faLinkedinIn,
  faMedium,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  const { site, dwBlue } = useStaticQuery(graphql`
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
          fixed(width: 250, quality: 90) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);
  return (
    <footer className="w-full bg-fixed py-10 px-8 md:px-0">
      <section className="container mx-auto text-white grid lg:grid-cols-3 gap-4 justify-center lg:justify-between md:gap-y-8">
        <div className="flex justify-center lg:justify-start lg:items-end">
          <a href="/" title="DeWocracy home">
            <Img width="250px" fixed={dwBlue.childImageSharp.fixed} alt="" />
          </a>
        </div>
        <div className="grid justify-center gap-y-4 text-primary  text-center">
          <p>Download from</p>
          <div className="flex content-center">
            <a
              className="pr-4 grid content-center grid-x-4 justify-center"
              href="#contact"
              title="Download DeWocracy app from the apple store"
            >
              <span>
                <FontAwesomeIcon icon={faApple} size="2x" />
              </span>
              <span>App Store</span>
            </a>
            <a
              href="#contact"
              title="Download DeWocracy app from the play store"
              className="grid content-center justify-center align-center"
            >
              <span>
                <FontAwesomeIcon icon={faGoogle} size="2x" />
              </span>
              <span>Google Play</span>
            </a>
          </div>
        </div>
        <div className="grid justify-items-center lg:justify-items-end lg:items-end my-10 lg:my-0">
          <p className="text-primary font-bold text-right flex justify-between w-64">
            <a
              href={site.siteMetadata.linkedin}
              rel="noreferrer noopener"
              target="_blank"
              title="DeWocracy Linkedin"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-primary"
                size="2x"
              />
            </a>
            <a
              href={site.siteMetadata.twitter}
              rel="noreferrer noopener"
              target="_blank"
              title="DeWocracy twitter"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-primary"
                size="2x"
              />
            </a>
            <a
              href={site.siteMetadata.medium}
              rel="noreferrer noopener"
              target="_blank"
              title="DeWocracy Medium blog"
            >
              <FontAwesomeIcon
                icon={faMedium}
                className="text-primary"
                size="2x"
              />
            </a>
            <a
              href="https://wa.me/message/NULJD4OWUB3CA1"
              rel="noreferrer noopener"
              target="_blank"
              title="Whatsapp"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-primary"
                size="2x"
              />
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
};
