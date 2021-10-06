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
  const t = useTranslations("footer")
  const { locale } = useRouter()



  return (
    <footer className="py-16 text-grey  bg-purple-800 mt-16 bg-fixed  px-4 md:px-2 pr-2 pl-2">
      <section className="container mx-auto  flex flex-wrap md:flex-nowrap  justify-start ">

        <div className="flex flex-col mr-12">
          <Link href="/" passHref><OutboundLink
            eventProperties={{ location: "footer" }}
            title="DeWocracy home">
            <Image
              width="160px"
              height="30px
"
              src="/images/logo-medium-blue.png"
                alt="Dewocracy Logo"
                placeholder="blur"
              blurDataURL={`/_next/image?url=/images/logo-medium-blue.png&w=16&q=1`} />
          </OutboundLink>
          </Link>
          <div></div>
          <p className=" mt-4  mr-4 max-w-xs">
            {t('company_description')}
          </p>

          <p className=" mt-4  mr-4" >{t('questions')}<OutboundLink href="https://calendly.com/dewocracylabs/dewocracy-demo" className="border-b-2 pb-1 text-primary-400 hover:text-black hover:border-black ">Request a call</OutboundLink></p>
          <div className="mt-4 flex flex-col  mr-24 ">
            <ul className="flex flex-col  justify-center lg:justify-end text-md mb-4 gap-0">
              <li className="hover:text-primary-800 hover:opacity-100">
                <OutboundLink href="//www.linkedin.com/company/dewocracy/" eventProperties={{ location: "footer" }}>LinkedIn</OutboundLink>
              </li>
              <li className="hover:text-primary-800 hover:opacity-100">
                <OutboundLink href="//twitter.com/de_wocracy" eventProperties={{ location: "footer" }}>Twitter</OutboundLink>
              </li>
              <li className="hover:text-primary-800 hover:opacity-100">
                <OutboundLink href="//medium.com/dewocracy" eventProperties={{ location: "footer" }}>Medium</OutboundLink>
              </li>
              <li className="hover:text-primary-800 hover:opacity-100 mr-7">
                <OutboundLink href="//www.linkedin.com/company/dewocracy/" eventProperties={{ location: "footer" }}>Facebook</OutboundLink>
              </li>
              <li className="hover:text-primary-800 hover:opacity-100 mr-7">
                <OutboundLink href="//www.linkedin.com/company/dewocracy/" eventProperties={{ location: "footer" }}>Whatsapp</OutboundLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col  mr-12 mt-8 md:mt-0 ">
          <p className="text-md md:mb-8 uppercase font-bold text-greyBlue">{t('explore')}</p>
          <ul className="flex flex-col  justify-center lg:justify-end text-md  gap-0">
            <li className="hover:text-primary-800">
              <Link href="/#pricing" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('pricing')}</OutboundLink></Link>
            </li>
            <li className="hover:text-primary-800">
              <Link href="/legal-notice" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('hotdesking')}</OutboundLink></Link>
            </li>
            <li className="hover:text-primary-800">
              <Link href="/privacy-policy" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('neighbourhoods')}</OutboundLink></Link>
            </li>
            <li className="hover:text-primary-800 mr-7">
              <Link href="/cookies-policy" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('manage-remoteworks')}</OutboundLink></Link>
            </li>
            <li className="hover:text-primary-800 mr-7">
              <Link href="/cookies-policy" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('analytics')}</OutboundLink></Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mt-8 md:mt-0  mr-12 ">
          <p className="text-md md:mb-8 uppercase font-bold text-greyBlue">{t('resources')}</p>
          <ul className="flex flex-col  justify-center lg:justify-end text-md gap-0">
            <li className="hover:text-primary-800">
              <Link href="/#pricing" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('help')}</OutboundLink></Link>
            </li>
            <li className="hover:text-primary-800">
              <Link href="/legal-notice" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('calculator')}</OutboundLink></Link>
            </li>
            <li className="hover:text-primary-800">
              <Link href="/privacy-policy" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('survey')}</OutboundLink></Link>
            </li>
            <li className="hover:text-primary-800 mr-7">
              <Link href="/cookies-policy" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('template')}</OutboundLink></Link>
            </li>
            <li className="hover:text-primary-800 mr-7">
              <Link href="/cookies-policy" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('access-app')}</OutboundLink></Link>
            </li>
            <li className="hover:text-primary-800 mr-7">
              <Link href="/cookies-policy" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('appstore')}</OutboundLink></Link>
            </li>
            <li className="hover:text-primary-800 mr-7">
              <Link href="/cookies-policy" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('play-store')}</OutboundLink></Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mt-8 md:mt-0 mr-12 ">
          <p className="text-md md:mb-8 uppercase font-bold text-greyBlue">{t('legal')}</p>
          <ul className="flex flex-col  justify-center lg:justify-end text-md gap-0">

            <li className="hover:text-primary-800">
              <Link href="/terms-and-conditions" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('Terms of service')}</OutboundLink></Link>
            </li>
            <li className="hover:text-primary-800 hover:opacity-100">
              <Link href="/legal-notice" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('Legal notice')}</OutboundLink></Link>
            </li>
            <li className="hover:text-primary-800 hover:opacity-100">
              <Link href="/privacy-policy" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('Privacy policy')}</OutboundLink></Link>
            </li>
            <li className="hover:text-primary-800 hover:opacity-100 mr-7">
              <Link href="/cookies-policy" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('Cookies policy')}</OutboundLink></Link>
            </li>
          </ul>
        </div>


        {/*   <div className="flex justify-center lg:justify-start lg:items-end">

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
        </div>*/}
      </section>
      {/*
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
       */}
    </footer>
  );
};
