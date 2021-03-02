import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  faLinkedinIn,
  faMedium,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import appleStoreEn from "./../images/apple-store-en.svg";
import appleStoreEs from "./../images/apple-store-es.svg";
import dwBlue from "./../images/dewocracy-blue.svg";
import {useI18next, Link, Trans} from "gatsby-plugin-react-i18next";
import Img from "gatsby-image";

const googleStoreI18n = {
  en: 'googlePlayEn',
  es: 'googlePlayEs',
  ca: 'googlePlayCa',
}

const appleStoreI18n = {
  en: appleStoreEn,
  es: appleStoreEs,
  ca: appleStoreEn,
}

export const Footer = () => {
  const { language } = useI18next();
  const { site, ...data } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          linkedin
          twitter
          medium
        }
      }
      googlePlayCa: file(relativePath: { eq: "google-play-ca.png" }) {
        childImageSharp {
          fixed(height: 60, quality: 90) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      googlePlayEs: file(relativePath: { eq: "google-play-es.png" }) {
        childImageSharp {
          fixed(height: 60, quality: 90) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      googlePlayEn: file(relativePath: { eq: "google-play-en.png" }) {
        childImageSharp {
          fixed(height: 60, quality: 90) {
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
            <img width="250px" height="250px" src={dwBlue} alt="" />
          </a>
        </div>
        <div className="grid justify-center gap-y-4 text-primary  text-center">
          <div className="flex content-center">
            <a
              className="pr-4 grid content-center grid-x-4 justify-center"
              href="#contact"
              title="Download DeWocracy app from the apple store"
            >
              <img width="auto" height="40px" src={appleStoreI18n[language]} alt="" />
            </a>
            <a
              href="#contact"
              title="Download DeWocracy app from the play store"
              className="grid content-center justify-center align-center"
            >
              <Img
                  fixed={data[googleStoreI18n[language]].childImageSharp.fixed}
                  height="60px"
                  alt=""
              />
            </a>
          </div>
        </div>
        <div className="grid justify-items-center lg:justify-items-end items-center  my-4 lg:my-0">
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
      <section className="lg:pt-10 lg:pr-36">
        <ul className="flex justify-center lg:justify-end text-xs gap-4 lg:gap-10">
          <li className="text-primary hover:underline">
            <Link to="/terms-and-conditions">
              <Trans>Terms of service</Trans>
            </Link>
          </li>
          <li className="text-primary hover:underline">
            <Link to="/legal-notice">
              <Trans>Legal notice</Trans>
            </Link>
          </li>
          <li className="text-primary hover:underline">
            <Link to="/privacy-policy">
              <Trans>Privacy policy</Trans>
            </Link>
          </li>
          <li className="text-primary hover:underline">
            <Link to="/cookies-policy">
              <Trans>Cookies policy</Trans>
            </Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};
