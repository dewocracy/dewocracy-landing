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
    <footer className="w-full bg-purple-800 rounded-2xl mt-16 bg-fixed py-10 px-8 md:px-0">
      <section className="container mx-auto text-white grid lg:grid-cols-3 gap-4 justify-center lg:justify-between md:gap-y-8">
        <div className="flex justify-center lg:justify-start lg:items-end">
          <a href="/" title="DeWocracy home">
            <img width="120px" height="120px" src="/images/dw-blue.png" alt="" />
          </a>
        </div>
        <div className="grid justify-center gap-y-4 text-primary  text-center">

        </div>
        <div className="grid justify-items-center lg:justify-items-end items-center  my-4 lg:my-0">
          <p className="text-primary font-bold text-right flex justify-between w-64 mr-4">
            <OutboundLink
              href="//www.linkedin.com/company/dewocracy/"
              rel="noreferrer noopener"
              target="_blank"
              title="DeWocracy Linkedin"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-primary-800"
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
                className="text-primary-800"
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
                className="text-primary-800"
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
                className="text-primary-800"
                size="2x"
              />
            </OutboundLink>
          </p>
        </div>
        <div></div>
        <div></div>
        <div className="grid justify-items-end">
          <div className="flex" >
            <a
              className="pr-4 grid content-center grid-x-4 justify-center"
              href="#contact"
              title="Download DeWocracy app from the apple store"
            >
              <Image className="object-cover	"
                width="120px" height="40px" src={appleStoreI18n[locale]} alt="" />
            </a>
            <a
              href="#contact"
              title="Download DeWocracy app from the play store"
              className="grid content-center justify-center align-center"
            >
              <Image src={googleStoreI18n[locale]}
                height="80px"
                width="150px"
                className="object-contain	"
                alt="Playstore Logo"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="lg:pt-10 lg:pr-28">
        <ul className="flex justify-center lg:justify-end text-md gap-4 lg:gap-10">
          <li className="hover:text-primary-800">
            <Link href="/terms-and-conditions"><a>{t('Terms of service')}</a></Link>
          </li>
          <li className="hover:text-primary-800">
            <Link href="/legal-notice"><a>{t('Legal notice')}</a></Link>
          </li>
          <li className="hover:text-primary-800">
            <Link href="/privacy-policy"><a>{t('Privacy policy')}</a></Link>
          </li>
          <li className="hover:text-primary-800">
            <Link href="/cookies-policy"><a>{t('Cookies policy')}</a></Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};
