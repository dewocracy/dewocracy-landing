import React from "react";

import { OutboundLink } from "../utils/OutboundLink";
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'


export const Footer = () => {
  const t = useTranslations("footer")
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
            <ul className="flex flex-col  justify-center lg:justify-end text-md mb-4 gap-0 md:gap-1">
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
          <ul className="flex flex-col  justify-center lg:justify-end text-md  gap-0 md:gap-1">
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
          <ul className="flex flex-col  justify-center lg:justify-end text-md gap-0 md:gap-1">
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
          <ul className="flex flex-col  justify-center lg:justify-end text-md gap-0 md:gap-1">

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
