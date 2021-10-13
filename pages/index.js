import React from "react";
import Link from 'next/link'
import Image from "next/image";
import { useTranslations } from 'next-intl';

import { PaymentsPlans } from "../components/payments-plans";
import { ContactForm } from "../components/contact-form";
import { OutboundLink } from "../utils/OutboundLink";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Amplitude, LogOnMount } from '@amplitude/react-amplitude';
import { useRouter } from 'next/router'

function IndexPage() {
  const t = useTranslations("Default");
  const router = useRouter()
  return (
    <Amplitude
      eventProperties={(inheritedProps) => ({
        ...inheritedProps,
        page: {
          ...inheritedProps.page,
          name: 'home page',
          language: router.locale,
          path: router.pathname
        },
      })}
    >
    <Layout>
        <SEO title={t("DeWocracy - Remote Work | Work from anywhere")} />
        <LogOnMount eventType="page view" />

      <div
          className="md:w-full relative ">

          <style>
            {`
              .hero__desktop-image {
                display: none !important;
              }
              @media(orientation: landscape) {
                .hero__desktop-image {
                  display: block !important;
                }
                .hero__mobile-image {
                  display: none !important;
                }
              }
            `}
          </style>


          <Image
            layout="fill"
            className="hero__mobile-image object-center hidden object-cover pointer-events-none"
            src="/images/background-home-banner-mobile.png"
            alt="Office Background"
            placeholder="blur"
            quality="100"
            blurDataURL={`/_next/image?url=/images/background-home-banner-mobile.pnh&w=16&q=100`}

          />
          <Image
            layout="fill"
            className="hero__desktop-image object-center hidden object-cover pointer-events-none"
            src="/images/background-home-banner.jpg"
          alt="Office Background"
          placeholder="blur"
            quality="100"
            blurDataURL={`/_next/image?url=/images/background-home-banner.jpg&w=16&q=100`}

        />

          <section className="z-10 relative container mx-auto text-white grid grid-cols-1 lg:grid-cols-2 content-center min-h-screen md:pl-4 pr-0 lg:pb-4">
            <div className="grid pt-28 px-0 md:px-8 lg:px-0 2xl:max-w-3xl 2xl:ml-24">
              <div className="md:mt-24 lg:mt-0 ">
                <h1 className="text-4xl text-white mt-8 lg:text-5xl  font-bold leading-tight pb-4">
                {t('implement_flexible_remote_work')}
              </h1>
              <p className="text-2xl text-white py-8 md:py-4 md:pb-12 md:pr-24">
                <strong className="pr-2">DeWocracy</strong>{t('Save thousands of euros')}
              </p>
                <div className="grid  grid-cols-1 sm:grid-cols-2 md:gap-8 mt-6 md:mt-0 mr-4 md:mr-0">

                  <OutboundLink
                    eventProperties={{ location: "home button" }}
                    className="text-center shadow-2xl sm:ml-4  md:ml-0 md:mt-0 hover:text-white bg-white text-primary-400  md:border-0 mt-8 mr-2 md:mr-0   hover:bg-primary-800  md:bg-white   text-xl  transition-colors duration-500 rounded-full py-4 px-4 xl:px-8  focus:shadow-outline"
                    href="//app.dewocracy.com/register/free"
                    rel="noreferrer noopener" target="_blank"
                  >
                    {t('Sign up for free')}
                </OutboundLink>
                <OutboundLink
                  eventProperties={{ location: "home button" }}
                    className="text-center shadow-2xl sm:ml-4  md:ml-0 md:mt-0 bg-transparent border border-1 mt-8 mr-2 md:mr-0 hover:border-opacity-0   hover:bg-primary-800  md:bg-primary-400 text-white   text-xl  transition-colors duration-500 rounded-full py-4 px-4 xl:px-8  focus:shadow-outline"
                  href="https://calendly.com/dewocracylabs/dewocracy-demo"
                    rel="noreferrer noopener" target="_blank"
                >
                  {t('Request demo')}
                </OutboundLink>
              </div>
            </div>
          </div>
            <div className="md:mt-4  grid  px-0 md:px-8 lg:px-0">
              <div className=" lg:w-200  ">
                <Image
                  className="object-contain w-auto inline-block "
                  src="/images/home_mockup.png"
                  alt="Screenshots of the Dewocracy Apps"
                  placeholder="blur"
                  width="1100" height="1027"
                  quality={100}
                  blurDataURL={`/_next/image?url=/images/home_mockup.png&w=16&q=1`} />
            </div>
          </div>
        </section>
      </div>

        <div className="w-full py-16 md:py-48  lg:py-24">
        <section className=" mt-48 lg:mt-0 text-center md:text-left container  mx-auto ">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-3/5 flex flex-col md:pr-8">
                <h2 className="font-bold 	text-3xl pb-2 md:pb-8 pt-12 lg:pt-24 text-center md:text-left">
                {t('title_hotdesking')}
              </h2>

              <p className=" text-xl">
                {t('description_hotdesking')}
              </p>

                <div className="	mt-4 text-xl ">
                  <Link href="/hotdesking" passHref>
                    <OutboundLink eventProperties={{ location: "home-hotdesking-box" }} className="border-b-2 pb-1 hover:border-black text-primary-400 hover:text-black leading-8 	transition-all  ">
                    {t('more_about_hotdesking')}
                    </OutboundLink>
                </Link>
              </div>
              <div className="mt-12">
                  <Link href="https://calendly.com/dewocracylabs/dewocracy-demo" passHref >
                    <OutboundLink eventProperties={{ location: "home-hotdesking-box" }} className="shadow-2xl mt-4 bg-primary-400 hover:bg-primary-800 text-white   text-lg  transition-colors duration-150  rounded-full py-4 px-4 xl:px-8 focus:shadow-outline ">
                    {t('hotdesking_button')}
                    </OutboundLink>
                </Link>
              </div>
            </div>
            <div className="relative mt-12 md:mt-0 md:w-3/5 ml-2 lg:ml-10 h-md lg:h-xl  ">
              <Image
                className="object-contain"
                src="/images/desk_booking_home.png"
                alt="Screenshot hotdesking"
                layout="fill"
                placeholder="blur"
                blurDataURL={`/_next/image?url=/images/desk_booking_home.png&w=16&q=1`} />

            </div>
          </div>


        </section>
          <section className="container text-center md:text-left  mx-auto lg:mr-3 2xl:mr-auto mt-18">

          <div className="flex flex-col-reverse md:flex-row">


            <div className="relative mt-12 w-full md:w-2/5 h-md lg:h-xl  ">
              <Image
                className="object-contain"
                src="/images/remote_office_home.png"
                alt="Screenshot Neighbourhoods"
                layout="fill"
                placeholder="blur"
                blurDataURL={`/_next/image?url=/images/remote_office_home.png&w=16&q=1`} />

            </div>

            <div className="md:ml-12 lg:ml-32 mt-12 md:w-3/5 flex flex-col md:pr-8">
                <h2 className="font-bold 	text-3xl pb-8  lg:pt-8 text-center md:text-left">
                {t('title_neighbourhoods')}
              </h2>

              <p className=" text-xl">
                {t('description_neighbourhoods')}
              </p>

                <div className="mt-4  text-xl ">
                  <Link href="/neighbourhoods" passHref>
                    <OutboundLink eventProperties={{ location: "home-neighbourhood-box" }} className="border-b-2 pb-1 hover:border-black text-primary-400 hover:text-black leading-8	 	transition-all  ">
                    {t('more_about_neighbourhoods')}
                    </OutboundLink>
                </Link>
              </div>
              <div className="mt-12">
                  <OutboundLink eventProperties={{ location: "home-neighbourhood-box" }} href="https://calendly.com/dewocracylabs/dewocracy-demo" className="shadow-2xl mt-4 bg-primary-400 hover:bg-primary-800 text-white   text-lg  transition-colors duration-150  rounded-full py-4 px-4 xl:px-8 focus:shadow-outline ">
                  {t('neighbourhoods_button')}
                  </OutboundLink>
              </div>
            </div>

          </div>


        </section>

          <section className="text-center md:text-left container  mx-auto lg:mr-3 2xl:mr-auto mt-8 lg:mt-18 ">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-3/5 flex flex-col md:pr-8">
                <h2 className="font-bold 	text-3xl pb-2 md:pb-8 pt-4 lg:pt-24 text-center md:text-left">
                {t('title_manage')}
              </h2>

              <p className=" text-xl">
                {t('description_manage')}
              </p>

                <div className="mt-4 text-xl  ">
                  <Link href="/manage-remotework" passHref>
                    <OutboundLink eventProperties={{ location: "home-manaage-remotework-box" }} className="border-b-2 pb-1 hover:border-black text-primary-400 hover:text-black leading-8 	transition-all  ">
                    {t('more_about_manage')}
                    </OutboundLink>
                </Link>
              </div>
              <div className="mt-12">
                  <Link href="https://app.dewocracy.com/register/free" passHref >
                    <OutboundLink eventProperties={{ location: "home-manaage-remotework-box" }} className="shadow-2xl mt-4 bg-primary-400 hover:bg-primary-800 text-white   text-lg  transition-colors duration-150  rounded-full py-4 px-4 xl:px-8 focus:shadow-outline ">
                    {t('manage_button')}
                    </OutboundLink>
                </Link>
              </div>
            </div>
            <div className="relative mt-12 md:mt-0 md:w-3/5 ml-2 lg:ml-10 h-md lg:h-xl  ">
              <Image
                className="object-contain"
                src="/images/manage_home.png"
                alt="Screenshots Neighourhoods"
                layout="fill"
                placeholder="blur"
                blurDataURL={`/_next/image?url=/images/manage_home.png&w=16&q=1`} />

            </div>
          </div>


        </section>

          <section className="container  mx-auto mr-3 2xl:mr-auto  mt-4 ">
          <div className=" flex flex-col pr-8">
              <h2 className="font-bold 	 text-3xl pb-2 md:pb-8 pt-24 text-center">
              {t('title_reports')}
            </h2>

            <div className="flex justify-center">
              <p className=" w-3/5 text-xl text-center">
                {t('description_reports')}
              </p>
            </div>
              <div className="mt-8 mb-8 text-xl text-center  ">
                <Link href="/analytics" passHref>
                  <OutboundLink eventProperties={{ location: "home-analytics-box" }} className="border-b-2 pb-1 hover:border-black text-primary-400 hover:text-black leading-8 	transition-all  ">
                  {t('more_about_reports')}
                  </OutboundLink>
              </Link>
            </div>

          </div>



          <div className="flex justify-center">
            <div className="relative  w-full h-md lg:h-xl  flex mb-8 flex-col items-center lg:flex-row">

              <Image
                className="object-contain"
                src="/images/reports_home.png"
                alt="Screenshots Analytics and Reports"
                layout="fill"
                placeholder="blur"
                blurDataURL={`/_next/image?url=/images/reports_home.png&w=16&q=1`} />


            </div>
          </div>

        </section>



      </div>


        <section style={{ background: "url('/images/background-plans.webp')" }} id="pricing" className="container pb-12    bg-purple-800 mx-auto  rounded-2xl lg:px-32">

        <PaymentsPlans />
      </section>

        <section id="contact" className="mx-auto container  mt-4 mb-20    md:rounded-2xl  self-center pt-24">
        <ContactForm />
      </section>
    </Layout>
    </Amplitude>
  )
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}

export default IndexPage;