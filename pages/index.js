import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Link from 'next/link'

import { PaymentsPlans } from "../components/payments-plans";
import { ContactForm } from "../components/contact-form";
import { OutboundLink } from "../utils/OutboundLink";
import { useTranslations } from 'next-intl';

function IndexPage() {
  const t = useTranslations("Default");

  return (
    <Layout>
      <SEO title="DeWocracy - Remote Work | Work from anywhere" />
      <div style={{ backgroundImage: "url('/images/background.png')" }}
        className="w-full bg-yellow-100 bg-no-repeat	bg-cover	  rounded-2xl"


      >
        <section className="container mx-auto text-white grid grid-cols-1 lg:grid-cols-2 content-center min-h-screen py-10 lg:pb-40">
          <div className="grid content-center px-0 md:px-8 lg:px-0">
            <div className="md:mt-24 lg:mt-0">
              <h1 className="text-4xl text-primary-800  lg:text-6xl font-medium font-bold leading-tight pb-4">
                {t('implement_flexible_remote_work')}
              </h1>
              <p className="text-3xl text-primary-800 py-12">
                {t('Save thousands of euros')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-8 mt-6 md:mt-0">

                <OutboundLink
                  eventType="signup" eventProperties={{ plan: "free", location: "home button" }}

                  className="shadow-2xl  h-16 hover:bg-primary-800  hover:text-white bg-white text-primary-800 px-6 pt-4 font-semibold  text-xl  transition-colors duration-150  rounded-lg focus:shadow-outline" href="#pricing">
                  {t('Sign up for free')}
                </OutboundLink>
                <OutboundLink
                  eventProperties={{ location: "home button" }}
                  className="shadow-2xl  h-16 hover:bg-primary-400 font-semibold	 bg-primary-800 text-white px-6 pt-4  text-xl  transition-colors duration-150  rounded-lg focus:shadow-outline"
                  href="https://calendly.com/dewocracylabs/dewocracy-demo"
                >
                  {t('Request demo')}
                </OutboundLink>
              </div>
            </div>
          </div>
          <div className="grid content-center px-0 md:px-8 lg:px-0">
            <div className=" ml-20  ">
            </div>
          </div>
        </section>
      </div>

      <div className="w-full py-16 lg:py-32">
        <section className="container  mx-auto mr-3 ">
          <div className="flex">
            <div className="w-3/5 flex flex-col pr-8">
              <h2 className="font-bold text-primary-800	text-4xl pb-2 md:pb-8 pt-24 text-left">
                {t('title_hotdesking')}
              </h2>

              <p className=" text-xl">
                {t('description_hotdesking')}
              </p>

              <div className="mt-4 text-xl font-semibold text-primary-800">
                <Link href="/desk-booking">
                  <a>
                    {t('more_about_hotdesking')}
                  </a>
                </Link>
              </div>
              <div className="mt-12">
                <Link href="/" >
                  <a className="shadow-2xl mt-4    bg-primary-800 hover:bg-primary-400 text-white px-6 py-4  text-lg  transition-colors duration-150  rounded-lg focus:shadow-outline ">
                    {t('hotdesking_button')}
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-2/5 ml-20">
              <img
                src="/images/desk_booking_home.png"
              />
            </div>
          </div>


        </section>
        <section className="container  mx-auto mr-3 mt-24">

          <div className="flex">
            <div className="w-2/5">
              <img
                src="/images/remote_office_home.png"

              />
            </div>
            <div className="ml-32 mt-12 w-3/5 flex flex-col pr-8">
              <h2 className="font-bold text-primary-800	text-4xl pb-2 md:pb-8 pt-8 text-left">
                {t('title_neighbourhoods')}
              </h2>

              <p className=" text-xl">
                {t('description_neighbourhoods')}
              </p>

              <div className="mt-4 font-semibold text-xl text-primary-800">
                <Link href="/neighbourhoods">
                  <a>
                    {t('more_about_neighbourhoods')}
                  </a>
                </Link>
              </div>
              <div className="mt-12">
                <Link href="/" >
                  <a className="shadow-2xl mt-4    bg-primary-800 hover:bg-primary-400 text-white px-6 py-4  text-lg  transition-colors duration-150  rounded-lg focus:shadow-outline ">
                    {t('neighbourhoods_button')}
                  </a>
                </Link>
              </div>
            </div>

          </div>


        </section>

        <section className="container  mx-auto mr-3 mt-36 ">
          <div className="flex">
            <div className="w-3/5 flex flex-col pr-8">
              <h2 className="font-bold text-primary-800	text-4xl pb-2 md:pb-8 pt-24 text-left">
                {t('title_manage')}
              </h2>

              <p className=" text-xl">
                {t('description_manage')}
              </p>

              <div className="mt-4 text-xl font-semibold text-primary-800">
                <Link href="/manage">
                  <a>
                    {t('more_about_manage')}
                  </a>
                </Link>
              </div>
              <div className="mt-12">
                <Link href="/" >
                  <a className="shadow-2xl mt-4    bg-primary-800 hover:bg-primary-400 text-white px-6 py-4  text-lg  transition-colors duration-150  rounded-lg focus:shadow-outline ">
                    {t('manage_button')}
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-3/5 ml-10  ">
              <img
                src="/images/manage_home.png"

              />
            </div>
          </div>


        </section>

        <section className="container  mx-auto mr-3 mt-36 ">
          <div className=" flex flex-col pr-8">
            <h2 className="font-bold text-primary-800	 text-4xl pb-2 md:pb-8 pt-24 text-center">
              {t('title_reports')}
            </h2>

            <div className="flex justify-center">
              <p className=" w-3/5 text-xl text-center">
                {t('description_reports')}
              </p>
            </div>
            <div className="mt-8 mb-8 text-xl text-center font-semibold text-primary-800">
              <Link href="/reports">
                <a>
                  {t('more_about_reports')}
                </a>
              </Link>
            </div>

          </div>

          <div className="flex  justify-center">
            <img className="mt-8 w-3/4"
              src="/images/reports_home.png"
            />
          </div>

        </section>



      </div>


      <section id="pricing" className="container pb-12  mr-3 text-primary-800  bg-purple-800 mx-auto shadow-2xl rounded-2xl lg:px-32">

        <PaymentsPlans />
      </section>

      <section id="contact" className="container bg-yellow-100 mt-32 mb-20 mr-6 text-primary-800 shadow-2xl  rounded-2xl  self-center pt-24">
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
