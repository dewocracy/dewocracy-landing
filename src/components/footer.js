import dwBlue from "../images/dewocracy-blue.png";
import downloadApple from "../images/download-apple-store.png";
import downloadPlay from "../images/download-play-store.png";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          linkedin
          twitter
          medium
        }
      }
    }
  `);
  return (
    <footer className="w-full bg-fixed py-16 px-8 md:px-0">
      <section className="container mx-auto text-white grid lg:grid-cols-3 gap-4  justify-center lg:justify-between">
        <div className="flex justify-center">
          <a href="/" title="DeWocracy home">
            <img
              width="200px"
              src={dwBlue}
              alt="DeWocracy admin dashboard & mobile app"
            />
          </a>
        </div>
        <div className="flex items-end">
          <a
            className="pr-4"
            href="#contact"
            title="Download DeWocracy app from the apple store"
          >
            <img
              width="150px"
              src={downloadApple}
              alt="DeWocracy admin dashboard & mobile app"
            />
          </a>
          <a href="#contact" title="Download DeWocracy app from the play store">
            <img
              width="152x"
              src={downloadPlay}
              alt="DeWocracy admin dashboard & mobile app"
            />
          </a>
        </div>
        <div className="grid justify-items-center lg:justify-items-end lg:items-end">
          <p className="text-greyBlue font-bold text-right flex justify-between w-64">
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
