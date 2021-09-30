import React from "react";
import Link from 'next/link'
import Image from "next/image";
import { useTranslations } from 'next-intl';

import { PaymentsPlans } from "../components/payments-plans";
import { ContactForm } from "../components/contact-form";
import { OutboundLink } from "../utils/OutboundLink";
import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  const t = useTranslations("Default");

  return (
    <Layout>
      <SEO title="DeWocracy - Remote Work | Work from anywhere" />

      <div style={{ backgroundImage: "url('/images/background3.webp')" }}
        className="md:w-full bg-no-repeat	bg-cover  absolute left-0 top-50">

        <section className="container mx-auto text-white grid grid-cols-1 lg:grid-cols-2 content-center min-h-screen md:pl-10 pr-0 lg:pb-4">
          <div className="grid content-center px-0 md:px-8 lg:px-0">
            <div className="md:mt-24 lg:mt-0 lg:mb-16">
              <h1 className="text-4xl text-white mt-8 lg:text-6xl  font-bold leading-tight pb-4">
                {t('implement_flexible_remote_work')}
              </h1>
              <p className="text-2xl text-white py-8 md:py-4 md:pb-12 md:pr-24">
                <strong className="pr-2">DeWocracy</strong>{t('Save thousands of euros')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-8 mt-6 md:mt-0 mr-4 md:mr-0">

                <OutboundLink
                  eventType="signup" eventProperties={{ plan: "free", location: "home button" }}

                  className="shadow-2xl mt-2 md:mt-0  hover:bg-primary-800  hover:text-white bg-white text-primary-400    text-xl  transition-colors duration-150   rounded-full py-4 px-4 xl:px-16 focus:shadow-outline" href="#pricing">
                  {t('Sign up for free')}
                </OutboundLink>
                <OutboundLink
                  eventProperties={{ location: "home button" }}
                  className="shadow-2xl sm:ml-4  md:ml-0 mt-2 md:mt-0   hover:bg-primary-800  bg-primary-400 text-white   text-xl  transition-colors duration-500 rounded-full py-4 px-4 xl:px-16  focus:shadow-outline"
                  href="https://calendly.com/dewocracylabs/dewocracy-demo"
                >
                  {t('Request demo')}
                </OutboundLink>
              </div>
            </div>
          </div>
          <div className="md:mt-4 lg:mt-20 grid content-center px-0 md:px-8 lg:px-0">
            <div className="mt-4 lg:mt-20 lg:w-200 ml-8 max-w-2xl">
              <img src="/images/home_mockup.webp" alt="Screenshots of the Dewocracy Apps" />
            </div>
          </div>
        </section>
      </div>

      <div style={{ marginTop: "45em" }} className="w-full py-16 md:py-48  lg:py-32">
        <section className=" mt-48 lg:mt-0 text-center md:text-left container  mx-auto ">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-3/5 flex flex-col md:pr-8">
              <h2 className="font-bold text-primary-800	text-4xl pb-2 md:pb-8 pt-12 lg:pt-24 text-center md:text-left">
                {t('title_hotdesking')}
              </h2>

              <p className=" text-xl">
                {t('description_hotdesking')}
              </p>

              <div className="	mt-4 text-xl text-primary-800">
                <Link href="/hotdesking">
                  <a className="border-b-2 pb-1 hover:border-black leading-8 	transition-all  ">
                    {t('more_about_hotdesking')}
                  </a>
                </Link>
              </div>
              <div className="mt-12">
                <Link href="https://calendly.com/dewocracylabs/dewocracy-demo" >
                  <a className="shadow-2xl mt-4 bg-primary-400 hover:bg-primary-800 text-white   text-lg  transition-colors duration-150  rounded-full py-4 px-4 xl:px-16 focus:shadow-outline ">
                    {t('hotdesking_button')}
                  </a>
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
        <section className="container text-center md:text-left  mx-auto lg:mr-3 mt-24">

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
              <h2 className="font-bold text-primary-800	text-4xl pb-8  lg:pt-8 text-center md:text-left">
                {t('title_neighbourhoods')}
              </h2>

              <p className=" text-xl">
                {t('description_neighbourhoods')}
              </p>

              <div className="mt-4  text-xl text-primary-800">
                <Link href="/neighbourhoods">
                  <a className="border-b-2 pb-1 hover:border-black leading-8	 	transition-all  ">
                    {t('more_about_neighbourhoods')}
                  </a>
                </Link>
              </div>
              <div className="mt-12">
                <a href="https://calendly.com/dewocracylabs/dewocracy-demo" className="shadow-2xl mt-4 bg-primary-400 hover:bg-primary-800 text-white   text-lg  transition-colors duration-150  rounded-full py-4 px-4 xl:px-16 focus:shadow-outline ">
                  {t('neighbourhoods_button')}
                </a>
              </div>
            </div>

          </div>


        </section>

        <section className="text-center md:text-left container  mx-auto lg:mr-3 mt-8 lg:mt-36 ">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-3/5 flex flex-col md:pr-8">
              <h2 className="font-bold text-primary-800	text-4xl pb-2 md:pb-8 pt-4 lg:pt-24 text-center md:text-left">
                {t('title_manage')}
              </h2>

              <p className=" text-xl">
                {t('description_manage')}
              </p>

              <div className="mt-4 text-xl  text-primary-800">
                <Link href="/manage-remotework">
                  <a className="border-b-2 pb-1 hover:border-black leading-8 	transition-all  ">
                    {t('more_about_manage')}
                  </a>
                </Link>
              </div>
              <div className="mt-12">
                <Link href="https://app.dewocracy.com/register/free" >
                  <a className="shadow-2xl mt-4 bg-primary-400 hover:bg-primary-800 text-white   text-lg  transition-colors duration-150  rounded-full py-4 px-4 xl:px-16 focus:shadow-outline ">
                    {t('manage_button')}
                  </a>
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

        <section className="container  mx-auto mr-3 mt-8 lg:mt-36 ">
          <div className=" flex flex-col pr-8">
            <h2 className="font-bold text-primary-800	 text-4xl pb-2 md:pb-8 pt-24 text-center">
              {t('title_reports')}
            </h2>

            <div className="flex justify-center">
              <p className=" w-3/5 text-xl text-center">
                {t('description_reports')}
              </p>
            </div>
            <div className="mt-8 mb-8 text-xl text-center  text-primary-800">
              <Link href="/analytics">
                <a className="border-b-2 pb-1 hover:border-black leading-8 	transition-all  ">
                  {t('more_about_reports')}
                </a>
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


      <section style={{ w: "url('/images/background.webp')" }} id="pricing" className="container pb-12  text-primary-800  bg-purple-800 mx-auto  rounded-2xl lg:px-32">

        <PaymentsPlans />
      </section>

      <section id="contact" className="mx-auto container  mt-4 mb-20  text-primary-800  md:rounded-2xl  self-center pt-24">
        <ContactForm />
      </section>
    </Layout>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}

export default IndexPage;