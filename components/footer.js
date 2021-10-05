import React from "react";
import {
  faLinkedinIn,
  faMedium,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { OutboundLink } from "../utils/OutboundLink";
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const googleStoreI18n = {
  en: '/images/google-play-en.png',
  es: '/images/google-play-es.png',
  ca: '/images/google-play-ca.png',
  "": '/images/google-play-en.png',

}

const appleStoreI18n = {
  en: '/images/apple-store-en.svg',
  es: '/images/apple-store-es.svg',
  ca: '/images/apple-store-es.svg',
  "": '/images/apple-store-en.svg',
}

export const Footer = () => {
  const t = useTranslations("Default")
  const { locale } = useRouter()



  return (
    <footer className="pt-24 bg-purple-800 mt-16 bg-fixed py-6 px-4 md:px-2 pr-2 pl-2">
      <section className="container mx-auto text-white grid lg:grid-cols-3 gap-4 justify-center lg:justify-between md:gap-y-0">
        <div className="flex justify-center lg:justify-start lg:items-end">
          <Link href="/" passHref><OutboundLink
            eventProperties={{ location: "footer" }}
            title="DeWocracy home">
              <Image
                className="rounded-2xl"
                width="120px"
                height="120px"
                src="/images/dw-blue.png"
                alt="Dewocracy Logo"
                placeholder="blur"
                blurDataURL={`/_next/image?url=/images/dw-blue.png&w=16&q=1`} />
          </OutboundLink>
          </Link>
        </div>
        <div className="grid justify-center gap-y-4 text-primary  text-center">

        </div>
        <div className="grid justify-items-center lg:justify-items-end items-start  my-4 lg:my-0">
          <p className="mt-4 justify-end	text-primary font-bold text-right flex  w-64 ">
            <OutboundLink
              href="//www.linkedin.com/company/dewocracy/"
              rel="noreferrer noopener"
              target="_blank"
              title="DeWocracy Linkedin"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-primary-800 md:mr-6"
                size="2x"
              />
            </OutboundLink>
            <OutboundLink
              href="//twitter.com/de_wocracy"
              rel="noreferrer noopener"
              target="_blank"
              title="DeWocracy twitter"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-primary-800  md:mr-6"
                size="2x"
              />
            </OutboundLink>
            <OutboundLink
              href="//medium.com/dewocracy"
              rel="noreferrer noopener"
              target="_blank"
              title="DeWocracy Medium blog"
            >
              <FontAwesomeIcon
                icon={faMedium}
                className="text-primary-800  md:mr-6"
                size="2x"
              />
            </OutboundLink>
            <OutboundLink
              eventProperties={{ location: "footer" }}

              href="https://wa.me/message/NULJD4OWUB3CA1"
              rel="noreferrer noopener"
              target="_blank"
              title="Whatsapp"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-primary-800 md:mr-2"
                size="2x"
              />
            </OutboundLink>
          </p>
        </div>
        <div></div>
        <div></div>
        <div className="grid justify-center md:justify-end">
          <div className="flex flex-col md:flex-row" >
            <OutboundLink eventProperties={{ location: "footer" }}
              className="md:pr-4 grid content-center grid-x-4 justify-center"
              href="#contact"
              title="Download DeWocracy app from the apple store"
            >
              <Image
                className="object-cover	"
                width="120px"
                height="40px"
                src={appleStoreI18n[locale]}
                alt="Apple Logo Logo"
                placeholder="blur"
                blurDataURL={`/_next/image?url=${appleStoreI18n[locale]}&w=16&q=1`}

              />
            </OutboundLink>
            <OutboundLink eventProperties={{ location: "footer" }}
              href="#contact"
              title="Download DeWocracy app from the play store"
              className="grid content-center justify-center align-center"
            >
              <Image src={googleStoreI18n[locale]}
                height="80px"
                width="150px"
                className="object-contain	"
                alt="Playstore Logo"
                placeholder="blur"
                blurDataURL={`/_next/image?url=${googleStoreI18n[locale]}&w=16&q=1`}
              />
            </OutboundLink>
          </div>
        </div>
      </section>
      <section className="text-center md:text-left lg:pr-24">
        <ul className="flex flex-col lg:flex-row justify-center lg:justify-end text-md gap-4 lg:gap-6">
          <li className="hover:text-primary-800">
            <Link href="/terms-and-conditions" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('Terms of service')}</OutboundLink></Link>
          </li>
          <li className="hover:text-primary-800">
            <Link href="/legal-notice" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('Legal notice')}</OutboundLink></Link>
          </li>
          <li className="hover:text-primary-800">
            <Link href="/privacy-policy" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('Privacy policy')}</OutboundLink></Link>
          </li>
          <li className="hover:text-primary-800 mr-7">
            <Link href="/cookies-policy" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('Cookies policy')}</OutboundLink></Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};
