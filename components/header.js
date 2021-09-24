
import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "./dropdown";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { OutboundLink } from "../utils/OutboundLink";
import { useTranslations } from 'next-intl';
import Link from 'next/link'
import { useRouter } from 'next/router'


function Header() {
  const [isExpanded, toggleExpansion] = React.useState(false);
  const t = useTranslations("Default")
  const { locale, locales } = useRouter()

  const handleClickSubmenu = useCallback(() => toggleExpansion(!isExpanded));

  return (
    <header
      id="header"
      className="grid grid-cols-3 md:flex items-center justify-center md:justify-between content-start pl-0  py-4
       md:py-6  bg-white h-18 sticky top-0 z-50 transition"
    >

      <div className="pl-4 md:hidden ">
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
          className={`${isExpanded ? `block` : `hidden`
            } md:items-center w-full md:w-auto text-primary`}
        >
          <OutboundLink eventProperties={{ location: "top navbar", device: "mobile" }}
            className="block pb-2 pt-4 hover:underline"
            href="https://calendly.com/dewocracylabs/dewocracy-demo"
            onClick={handleClickSubmenu}
          >
            {t('Demo')}
          </OutboundLink>
          <OutboundLink eventProperties={{ location: "top navbar", device: "mobile" }}
            className="block py-2 hover:underline"
            href="#pricing"
            onClick={handleClickSubmenu}
          >
            {t('Pricing')}
          </OutboundLink>
          <OutboundLink eventProperties={{ location: "top navbar", device: "mobile" }}
            className="block py-2 hover:underline"
            href="https://app.dewocracy.com/"
            onClick={handleClickSubmenu}
          >
            {t('Access')}
          </OutboundLink>
          <OutboundLink eventProperties={{ location: "top navbar", device: "mobile" }}

            className="block py-2 hover:underline"
            href="https://app.dewocracy.com/register/free"
            onClick={handleClickSubmenu}
          >
            {t('Sign up for free')}
          </OutboundLink>
          <OutboundLink
            eventProperties={{ location: "top navbar", device: "mobile" }}
            href="https://wa.me/message/NULJD4OWUB3CA1"
            rel="noreferrer noopener"
            target="_blank"
            title="Whatsapp"
            className="block py-4"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-primary"
              size="2x"
            />
          </OutboundLink>
          <hr className="my-4 text-opacity-25 text-lightBlue" />
          <ul>
            {locales.map(
              (lng) =>
                locale !== lng && (
                  <li key={lng} className="block mt-4 no-underline">
                    <Link href="/" locale={lng}><a>{t(lng)}</a></Link>
                  </li>
                )
            )}
          </ul>
        </nav>
      </div>
      <Link
        href="/"
        className="md:order-first flex "
        aria-label="Go to home"
      ><a>
        <figure
            className={`flex items-center text-black hover:text-primary-400 transition-colors duration-150 ${isExpanded ? `hidden` : `block`
            }`}
        >
            <img width="150px" height="150px" src="/images/dw-blue.png" alt="DeWocracy logo" />
        </figure>
        </a>
      </Link>
      <nav className="hidden md:inline-flex flex justify-center md:justify-end gap-4 text-primary text-sm">
        <OutboundLink
          eventProperties={{ location: "top navbar" }}
          className="block mt-2 text-xl font-medium	 p-2 px-6 text-black hover:text-primary-400 transition-colors duration-150"
          href="https://calendly.com/dewocracylabs/dewocracy-demo"
        >
          {t('Demo')}
        </OutboundLink>
        <OutboundLink eventType="accessApp"
          eventProperties={{ location: "top navbar" }}
          className=" text-xl mt-2 block py-2 font-medium	 text-black hover:text-primary-400 transition-colors duration-150"
          href="https://app.dewocracy.com/"
        >
          {t('Access')}
        </OutboundLink>
        <OutboundLink
          eventProperties={{ location: "top navbar" }}
          className="block mt-2 font-medium 	 text-xl p-2 px-6 text-black hover:text-primary-400 transition-colors duration-150" href="#pricing">
          {t('Pricing')}
        </OutboundLink>
        <OutboundLink eventType="signup" eventProperties={{ location: "top navbar" }}

          href="https://wa.me/message/NULJD4OWUB3CA1"
          rel="noreferrer noopener"
          target="_blank"
          title="Whatsapp"
          className="block mt-1 px-4 "
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="text-black  text-5xl 	 text-black hover:text-primary-400 transition-colors duration-150 text-4xl"
          />
        </OutboundLink>
        <OutboundLink
          eventType="signup" eventProperties={{ plan: "free", location: "top navbar" }}
          className="shadow-2xl  h-16 bg-primary-800 hover:bg-primary-400 text-white px-6 pt-4  text-lg  transition-colors duration-150  rounded-lg focus:shadow-outline "

          href="https://app.dewocracy.com/register/free"
        >
          {t('Sign up for free')}
        </OutboundLink>
        <Dropdown title={t(locale)} theme="navbar">
          <div className="flex flex-col p-2 mt">
            {locales.map((lng, key) => (
              <Link href="/"
              key={key}
                className={` uppercase block p-4 pl-6 mb-4 hover:underline ${lng === locale ? "underline" : ""
                }`}
              role="menuitem"
                locale={lng}
              ><a className={` ${lng === locale ? "font-bold	" : ""} mt-1  hover:text-primary-400`}>{t(lng)}</a>
            </Link>
          ))}
          </div>
        </Dropdown>
      </nav>
    </header>
  );
}

export default Header;
