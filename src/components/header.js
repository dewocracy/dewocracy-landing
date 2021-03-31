import {
  Link,
  useI18next,
  useTranslation,
  Trans,
} from "gatsby-plugin-react-i18next";
import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import dwBlue from "./../images/dewocracy-blue.svg";
import { Dropdown } from "./dropdown";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Header() {
  const [isExpanded, toggleExpansion] = React.useState(false);
  const { languages, language, originalPath } = useI18next();
  const { t } = useTranslation();
  const handleClickSubmenu = useCallback(() => toggleExpansion(!isExpanded));
  return (
    <header
      id="header"
      className="grid grid-cols-3 md:flex items-center justify-center md:justify-between content-start pl-0 md:px-8 py-4
       md:py-6 w-screen bg-white h-18 sticky top-0 z-50 transition"
    >
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
          <a
            className="block pb-2 pt-4 hover:underline"
            href="https://calendly.com/dewocracylabs/dewocracy-demo"
            onClick={handleClickSubmenu}
          >
            <Trans>Demo</Trans>
          </a>
          <a
            className="block py-2 hover:underline"
            href="#pricing"
            onClick={handleClickSubmenu}
          >
            <Trans>Pricing</Trans>
          </a>
          <a
              className="block py-2 hover:underline"
              href="https://app.dewocracy.com/"
              onClick={handleClickSubmenu}
          >
            <Trans>Access</Trans>
          </a>
          <a
            className="block py-2 hover:underline"
            href="https://app.dewocracy.com/register/free"
            onClick={handleClickSubmenu}
          >
            <Trans>Sign up for free</Trans>
          </a>
          <a
            href="https://wa.me/message/NULJD4OWUB3CA1"
            rel="noreferrer noopener"
            target="_blank"
            title="Whatsapp"
            className="block py-2"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-primary"
              size="2x"
            />
          </a>
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
          <img width="150px" height="60px" src={dwBlue} alt="DeWocracy logo" />
        </figure>
      </Link>
      <nav className="hidden md:inline-flex flex justify-center md:justify-end gap-4 text-primary text-sm">
        <a
          className="block p-2 hover:underline"
          href="https://calendly.com/dewocracylabs/dewocracy-demo"
        >
          <Trans>Demo</Trans>
        </a>
        <a
            className="block py-2 hover:underline"
            href="https://app.dewocracy.com/"
        >
          <Trans>Access</Trans>
        </a>
        <a className="block p-2 hover:underline" href="#pricing">
          <Trans>Pricing</Trans>
        </a>
        <a
          href="https://wa.me/message/NULJD4OWUB3CA1"
          rel="noreferrer noopener"
          target="_blank"
          title="Whatsapp"
          className="block mt-1 px-2 text-2xl"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="text-primary text-2xl"
          />
        </a>
        <a
          className="btn bg-primary text-white py-2 mx-6 leading-4"
          href="https://app.dewocracy.com/register/free"
        >
          <Trans>Sign up for free</Trans>
        </a>
        <Dropdown title={t(language)} theme="navbar">
          {languages.map((lang, key) => (
            <Link
              key={key}
              to={originalPath}
              className={`block p-4 pl-6 hover:underline ${
                lang === language ? "underline" : ""
              }`}
              role="menuitem"
              language={lang}
            >
              {t(lang)}
            </Link>
          ))}
        </Dropdown>
      </nav>
    </header>
  );
}

export default Header;
