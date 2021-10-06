
import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "./dropdown";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { OutboundLink } from "../utils/OutboundLink";
import { useTranslations } from 'next-intl';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ResourceDropdown } from "./resourcesDropdown"
import Image from "next/image";

function Header() {
  const [isExpanded, toggleExpansion] = React.useState(false);
  const t = useTranslations("navigation")
  const { locale, locales } = useRouter()

  const handleClickSubmenu = useCallback(() => toggleExpansion(!isExpanded), [isExpanded]);

  return (
    <header
      id="header"
      className="flex grid-cols-3 items-start lg:items-center lg:justify-between content-start px-16  md:py-4
        bg-white h-18 sticky top-0 z-50 transition pb-1 pt-1 md:pt-6 pl-4 lg:pl-16"
    >

      <div className="pl-4 lg:hidden pr-8 lg:pr-0 ">
        <button
          aria-label="menu"
          aria-expanded={isExpanded}
          aria-controls="nav-menu-ex-1"
          className="items-center block px-3 py-2 border border-lightBlue border-opacity-25 rounded w-10 lg:hidden"
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
            className="block py-2 hover:underline"
            href="#pricing"
            onClick={handleClickSubmenu}
          >
            {t('pricing')}
          </OutboundLink>
          <OutboundLink eventProperties={{ location: "top navbar", device: "mobile" }}
            className="block py-2 hover:underline"
            href="https://app.dewocracy.com/"
            onClick={handleClickSubmenu}
          >
            {t('access')}
          </OutboundLink>
          <OutboundLink eventProperties={{ location: "top navbar", device: "mobile" }}

            className="block py-2 hover:underline"
            href="https://app.dewocracy.com/register/free"
            onClick={handleClickSubmenu}
          >
            {t('sign_up')}
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

          <div className="flex flex-col">
            <OutboundLink
              eventProperties={{ location: "top navbar", device: "mobile" }}
              rel="noreferrer noopener"
              target="_blank"
              href="//www.notion.so/DeWocracy-Help-50ccfd99c7ad4e6ea17a441a7a34ca9f"
              className="mt-1  hover:text-primary-400">{t('help_page')}  </OutboundLink>


            <Link href="/calculator" passHref
              key="Calculator"
              className={`  block p-4 pl-6 mb-4 hover:underline 
                }`}
              role="menuitem"
            ><OutboundLink
              eventProperties={{ location: "top navbar", device: "mobile" }} className={`mt-1  hover:text-primary-400`}>{t('calculator')}</OutboundLink>
            </Link>

            <OutboundLink
              eventProperties={{ location: "top navbar", device: "mobile" }} rel="noreferrer noopener"
              target="_blank"

              href="https://docs.google.com/spreadsheets/d/1QkhYLoNE2JAirZcBtYtTWsU-GZ7alpHrSMCPCsGar14/edit?usp=sharing"
              className={`mt-1  hover:text-primary-400`}>{t('remotework_management_template')}</OutboundLink>


            <OutboundLink
              eventProperties={{ location: "top navbar", device: "mobile" }} rel="noreferrer noopener"
              target="_blank"
              href="https://survey.dewocracy.com/"
              className="mt-1  hover:text-primary-400">{t('remotework_survey')}</OutboundLink>

          </div>
          <hr className="my-4 text-opacity-25 text-lightBlue" />


          <ul>
            {locales.map(
              (lng) =>
                locale !== lng && (
                  <li key={lng} className="block mt-4 no-underline">
                    <Link href="/" locale={lng} passHref>
                      <OutboundLink
                        eventProperties={{ location: "top navbar", device: "mobile" }}>
                        {t(lng)}
                      </OutboundLink>
                    </Link>
                  </li>
                )
            )}
          </ul>
        </nav>
      </div>
      <Link passHref
        href="/"
        className="md:order-first flex "
        aria-label="Go to home"
      ><OutboundLink
        eventProperties={{ location: "top navbar", device: "mobile" }}>
          <figure
            className={`w-32 md:w-40	 flex items-center text-black hover:text-primary-400 transition-colors duration-150 ${isExpanded ? `hidden` : `block`
              }`}
          >
            <div className="relative max-w-lg w-full h-logo  flex  flex-col items-center lg:flex-row">

              <Image
                className="object-contain"
                src="/images/dewocracy-blue.svg"
                alt="DeWocracy logo"
                layout="fill"
                placeholder="blur"
                blurDataURL={`/_next/image?url=/images/dewocracy-blue.svg&w=16&q=1`} />


            </div>

          </figure>
        </OutboundLink>
      </Link>
      <nav className="hidden lg:inline-flex justify-center md:justify-end gap-4 text-primary text-sm">
        <OutboundLink
          eventProperties={{ location: "top navbar" }}
          className="block mt-2 font-medium text-lg p-2 px-2 text-black hover:text-primary-400 transition-colors duration-150" href="#pricing">
          {t('pricing')}
        </OutboundLink>
        <ResourceDropdown title={t('resources')} theme="navbar">
          <div className="flex flex-col py-4 ">

            <OutboundLink
              eventProperties={{ location: "top navbar" }}
              rel="noreferrer noopener"
              target="_blank"
              href="//www.notion.so/DeWocracy-Help-50ccfd99c7ad4e6ea17a441a7a34ca9f"
              className="mt-1 pl-4 p-2 rounded-lg hover:bg-lightGrey  hover:text-primary-400">{t('help_page')}</OutboundLink>


            <Link href="/calculator"
              key="Calculator"
              className="block p-4 pl-6 mb-4 hover:underline"
              role="menuitem" passHref
            >
              <OutboundLink
                eventProperties={{ location: "top navbar" }}
                className={`mt-1 pl-4 p-2 rounded-lg hover:bg-lightGrey  hover:text-primary-400`}>
                {t('calculator')}
              </OutboundLink>
            </Link>

            <OutboundLink
              eventProperties={{ location: "top navbar" }}
              rel="noreferrer noopener"
              target="_blank"

              href="https://docs.google.com/spreadsheets/d/1QkhYLoNE2JAirZcBtYtTWsU-GZ7alpHrSMCPCsGar14/edit?usp=sharing"
              className={`mt-1 pl-4 p-2 rounded-lg hover:bg-lightGrey  hover:text-primary-400`}>{t('remotework_management_template')}</OutboundLink>


            <OutboundLink
              eventProperties={{ location: "top navbar" }} rel="noreferrer noopener"
              target="_blank"
              href="https://survey.dewocracy.com/"
              className="mt-1 pl-4 p-2 rounded-lg hover:bg-lightGrey  hover:text-primary-400">{t('remotework_survey')}</OutboundLink>



          </div>
        </ResourceDropdown>


        <OutboundLink eventType="link-clicked"
          eventProperties={{ location: "top navbar" }}
          className=" text-lg mt-2 block py-2 font-medium	 text-black hover:text-primary-400 transition-colors duration-150"
          href="https://app.dewocracy.com/"
        >
          {t('access')}
        </OutboundLink>

        <OutboundLink eventType="link-clicked" eventProperties={{ location: "top navbar" }}

          href="https://wa.me/message/NULJD4OWUB3CA1"
          rel="noreferrer noopener"
          target="_blank"
          title="Whatsapp"
          className="block mt-3 px-4 "
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="text-black    hover:text-primary-400 transition-colors duration-150 text-3xl"
          />
        </OutboundLink>
        <OutboundLink
          eventType="signup" eventProperties={{ plan: "free", location: "top navbar" }}
          className="shadow-2xl  bg-primary-400 hover:bg-primary-800 text-white    text-lg  transition-colors duration-150  rounded-full py-4 px-4 xl:px-16 focus:shadow-outline "

          href="https://app.dewocracy.com/register/free"
        >
          {t('sign_up')}
        </OutboundLink>
        <Dropdown isLocaleDropDown={true} title={t(locale)} theme="navbar">
          <div className="flex flex-col p-2">
            {locales.map((lng, key) => (
              <Link href={`/${lng}`} passHref
                key={key}
                className={` uppercase block p-4 pl-6 mb-4 hover:underline ${lng === locale ? "underline" : ""
                  }`}
                role="menuitem"
                locale={lng}
              ><OutboundLink
                eventProperties={{ location: "top navbar", type: "changed-locale" }} className={` ${lng === locale ? "font-bold	" : ""} mt-1  hover:text-primary-400`}>{t(lng)}</OutboundLink>
              </Link>
            ))}
          </div>
        </Dropdown>
      </nav>
    </header>
  );
}

export default Header;
