import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import React from "react";
import dewocracyLogo from "../images/dewocracy-blue.png";
import Headroom from "react-headroom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isExpanded, toggleExpansion] = React.useState(false);
  const { languages, language, originalPath } = useI18next();
  const { t } = useTranslation();
  return (
    <Headroom wrapperStyle={{ position: "absolute" }}>
      <header className="grid grid-cols-3 md:flex items-center justify-center md:justify-between content-start pl-0 md:px-8 py-4 md:py-6 w-screen bg-white h-18 shadow-xl">
        <div className="pl-4">
          <button
            className="items-center block px-3 py-2 border border-lightBlue border-opacity-25 rounded w-10 md:hidden"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <FontAwesomeIcon icon={faBars} className="text-primary" />
          </button>
          <nav
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
        <Link to="/" className="md:order-first flex justify-center">
          <figure
            className={`flex items-center no-underline ${
              isExpanded ? `hidden` : `block`
            }`}
          >
            <img width="150px" alt="DeWocracy logo" src={dewocracyLogo} />
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
