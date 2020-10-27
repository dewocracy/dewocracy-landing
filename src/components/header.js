import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";
import Headroom from "react-headroom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function Header() {
  const { dwBlue } = useStaticQuery(graphql`
    query {
      dwBlue: file(relativePath: { eq: "dewocracy-blue.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 150, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);
  const [isExpanded, toggleExpansion] = React.useState(false);
  const { languages, language, originalPath } = useI18next();
  const { t } = useTranslation();
  return (
    <Headroom wrapperStyle={{ position: "absolute" }}>
      <header className="grid grid-cols-3 md:flex items-center justify-center md:justify-between content-start pl-0 md:px-8 py-4 md:py-6 w-screen bg-white h-18 shadow-xl">
        <div className="pl-4">
          <button
            aria-label="menu"
            aria-expanded={isExpanded}
            aria-controls="nav-menu-ex-1"
            className="items-center block px-3 py-2 border border-lightBlue border-opacity-25 rounded w-10 md:hidden"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <span className="hidden" aria-hidden="true">
              Menu
            </span>
            <FontAwesomeIcon icon={faBars} className="text-primary" />
          </button>
          <nav
            id="nav-menu-ex-1"
            className={`${
              isExpanded ? `block` : `hidden`
            } md:items-center w-full md:w-auto text-primary`}
          >
            {[
              {
                route: "#contact",
                title: t("Contacto"),
              },
              {
                route: "#pricing",
                title: t("Planes y precios"),
              },
            ].map((link) => (
              <a
                className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
                key={link.title}
                href={link.route}
              >
                {link.title}
              </a>
            ))}
            <hr className="my-4 text-opacity-25 text-lightBlue" />
            <ul>
              {languages.map(
                (lng) =>
                  language !== lng && (
                    <li key={lng} className="block mt-4 no-underline">
                      <Link to={originalPath} language={lng}>
                        {t(lng)}
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </nav>
        </div>
        <Link
          to="/"
          className="md:order-first flex justify-center"
          aria-label="Go to home"
        >
          <figure
            className={`flex items-center no-underline ${
              isExpanded ? `hidden` : `block`
            }`}
          >
            <Img
              className="w-40"
              fluid={dwBlue.childImageSharp.fluid}
              alt="DeWocracy logo"
            />
          </figure>
        </Link>
        <ul className="hidden md:inline-flex flex justify-center md:justify-end gap-4 text-primary text-sm">
          {languages.map(
            (lng) =>
              language !== lng && (
                <li key={lng}>
                  <Link to={originalPath} language={lng}>
                    {t(lng)}
                  </Link>
                </li>
              )
          )}
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
