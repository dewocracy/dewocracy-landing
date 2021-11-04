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
    <footer className=" 2xl:flex 2xl:justify-center py-16 text-grey  bg-purple-800 mt-16 bg-fixed  px-4 md:px-2 ">
      <section className="mx-4 lg:mx-14 lg:px-0  lg:container w-full xl:w-auto  flex flex-wrap lg:flex-nowrap  justify-start ">

        <div className="flex flex-col mr-12">
          <Link href="/" passHref><OutboundLink
            eventProperties={{ location: "footer" }}
            title="DeWocracy home">
            <Image
              width="160px"
              height="30px
"
              src="/images/dewocracy-blue.svg"
              alt="Dewocracy Logo"
              placeholder="blur"
              blurDataURL={`/_next/image?url=/images/dewocracy-blue.svg&w=16&q=1`} />
          </OutboundLink>
          </Link>
          <div></div>
          <p className=" mt-4  mr-4 max-w-xs">
            <span className="font-bold"> {t('office_is_a_tool')} </span> {t('company_description')}
          </p>

          <p className=" mt-4  mr-4" >{t('questions')}<OutboundLink href="https://calendly.com/dewocracylabs/dewocracy-demo" className="border-b-2 pb-1 text-primary-400 hover:text-black hover:border-black ">{t('request_a_call')}</OutboundLink></p>

          <div className="grid justify-items-start items-start  my-4 lg:my-0">
            <p className="mt-12 md:mt-16 justify-start	text-primary font-bold text-right flex  w-64 ">
              <OutboundLink
                href="//www.linkedin.com/company/dewocracy/"
                rel="noreferrer noopener"
                target="_blank"
                title="DeWocracy Linkedin"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-primary-400 mr-4 md:mr-6"
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
                  className="text-primary-400 mr-4 md:mr-6"
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
                  className="text-primary-400 mr-4 md:mr-6"
                  size="2x"
                />
              </OutboundLink>
              <OutboundLink
                eventProperties={{ location: "footer" }}

                href="https://wa.me/message/NULJD4OWUB3CA1"
                rel="noreferrer noopener" target="_blank"
                title="Whatsapp"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-primary-400 "
                  size="2x"
                />
              </OutboundLink>
            </p>
          </div>
        </div>
        <div className="flex w-full lg:w-auto flex-col  mr-12 mt-8 md:mt-0 ">
          <p className="text-md md:mb-8 uppercase font-bold text-greyBlue">{t('explore')}</p>
          <ul className="flex flex-col  justify-center lg:justify-end text-md  gap-0">
            <li className="hover:text-primary-800">
              <Link href="/#pricing" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('pricing')}</OutboundLink></Link>
            </li>
            <li className="hover:text-primary-800">
              <Link href="/hotdesking" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('hotdesking')}</OutboundLink></Link>
            </li>
            <li className="hover:text-primary-800">
              <Link href="/neighborhoods " passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('neighborhoods ')}</OutboundLink></Link>
            </li>
            <li className="hover:text-primary-800 mr-7">
              <Link href="/manage-remotework" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('manage-remoteworks')}</OutboundLink></Link>
            </li>
            <li className="hover:text-primary-800 mr-7">
              <Link href="/analytics" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('analytics')}</OutboundLink></Link>
            </li>
          </ul>
        </div>

        <div className="flex w-full lg:w-auto flex-col mt-8 md:mt-0 mr-4 lg:mr-12 ">
          <p className="text-md md:mb-8 uppercase font-bold text-greyBlue">{t('resources')}</p>
          <ul className="flex flex-col  justify-center lg:justify-end text-md gap-0">
            <li className="hover:text-primary-800">
              <OutboundLink rel="noreferrer noopener" target="_blank" href="//notion.so/DeWocracy-Help-50ccfd99c7ad4e6ea17a441a7a34ca9f" eventProperties={{ location: "footer" }}>{t('help')}</OutboundLink>
            </li>
            <li className="hover:text-primary-800">
              <Link href="/calculator" passHref><OutboundLink eventProperties={{ location: "footer" }}>{t('calculator')}</OutboundLink></Link>
            </li>
            <li className="hover:text-primary-800">
              <OutboundLink rel="noreferrer noopener" target="_blank" href="https://survey.dewocracy.com/" eventProperties={{ location: "footer" }}>{t('survey')}</OutboundLink>
            </li>
            <li className="hover:text-primary-800 mr-7">
              <OutboundLink rel="noreferrer noopener" target="_blank" href="https://docs.google.com/spreadsheets/d/1QkhYLoNE2JAirZcBtYtTWsU-GZ7alpHrSMCPCsGar14/edit?usp=sharing" eventProperties={{ location: "footer" }}>{t('template')}</OutboundLink>
            </li>
            <li className="hover:text-primary-800 mr-7">
              <OutboundLink rel="noreferrer noopener" target="_blank" href="//app.dewocracy.com" eventProperties={{ location: "footer" }}>{t('access-app')}</OutboundLink>
            </li>
            <li className="hover:text-primary-800 mr-7">
              <OutboundLink rel="noreferrer noopener" target="_blank" href="https://apps.apple.com/es/app/dewocracy/id1556483760" eventProperties={{ location: "footer" }}>{t('appstore')}</OutboundLink>
            </li>
            <li className="hover:text-primary-800 mr-7">
              <OutboundLink rel="noreferrer noopener" target="_blank" href="https://play.google.com/store/apps/details?id=com.dewocracy.dewocracyapp" eventProperties={{ location: "footer" }}>{t('play-store')}</OutboundLink>
            </li>
            <li className="hover:text-primary-800 mr-7">
              <OutboundLink rel="noreferrer noopener" target="_blank" href="https://employee.dewocracy.com" eventProperties={{ location: "footer" }}>{t('employee-app')}</OutboundLink>
            </li>
          </ul>
        </div>

        <div className="flex w-full lg:w-auto flex-col mt-8 md:mt-0 mr-4 lg:mr-12 ">
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
      </section>

    </footer>
  );
};
