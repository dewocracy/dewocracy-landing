/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Link from 'next/link'

import { PaymentsPlans } from "../components/payments-plans";
import { ContactForm } from "../components/contact-form";
import { SavingsCalculator } from "../components/savings-calculator";
import { faChartBar, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleArrows, faSearch } from "@fortawesome/free-solid-svg-icons";
import { OutboundLink } from "../utils/OutboundLink";
import { useTranslations } from 'next-intl';
import Image from 'next/image'

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
          {/*<h2 className="font-bold text-primary-800	text-4xl pb-2 md:pb-8 pt-24 text-center">
            {t('How much could your company save with DeWocracy?')}
          </h2>
          <SavingsCalculator />

          */}
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
          {/*<h2 className="font-bold text-primary-800	text-4xl pb-2 md:pb-8 pt-24 text-center">
            {t('How much could your company save with DeWocracy?')}
          </h2>
          <SavingsCalculator />

          */}
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
          {/*<h2 className="font-bold text-primary-800	text-4xl pb-2 md:pb-8 pt-24 text-center">
            {t('How much could your company save with DeWocracy?')}
          </h2>
          <SavingsCalculator />

          */}
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


        {/*<section className="container mx-auto">
          <div className="relative md:table">
            <figure className="absolute top-96 lg:top-56 -left-72">
              <Image
                id="arrow-loop-svg"
                src="/images/arrow-loop.lsv"
                alt="Arrow Loop"
                width="550px"
                height="550px"
              />
            </figure>
            <h2 className="font-medium text-2xl pt-12 md:pt-36 pb-10">
              {t('We help you transition')}
            </h2>
            <div className="grid gap-y-4 lg:gap-10 lg:grid-cols-12 lg:w-9/12 float-right">
              <div
                data-sal="flip-up"
                data-sal-delay="500"
                data-sal-easing="ease"
                className="bg-white bg-opacity-70 z-10 p-6 shadow-lg rounded-lg flex justify-between items-center col-span-12 lg:col-span-10"
              >
                <div className="flex">
                  <div className="mr-4 text-primary">
                    <FontAwesomeIcon
                      icon={faChartBar}
                      className="text-primary mr-4"
                      size="3x"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg pb-4">
                    {t('Understand your needs')}
                  </h3>
                  <p>
                    {t('We give you the tools')}
                  </p>
                </div>
              </div>
              <div
                data-sal="flip-up"
                data-sal-delay="500"
                data-sal-easing="ease"
                className="bg-white bg-opacity-70 z-10 p-6 shadow-lg rounded-lg flex justify-between items-center lg:col-start-2 col-span-12 lg:col-span-10"
              >
                <div className="flex">
                  <div className="mr-4 text-primary">
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-primary mr-2 lg:mr-4"
                      size="3x"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg pb-4">
                    {t('Find your space')}
                  </h3>
                  <p>
                    {t('We use the data')}
                  </p>
                </div>
              </div>
              <div
                data-sal="flip-up"
                data-sal-delay="500"
                data-sal-easing="ease"
                className="bg-white bg-opacity-70 z-10 p-6 shadow-lg rounded-lg flex justify-between items-center col-span-12 lg:col-span-10"
              >
                <div className="flex">
                  <div className="mr-4 text-primary">
                    <FontAwesomeIcon
                      icon={faPeopleArrows}
                      className="text-primary mr-4"
                      size="3x"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg pb-4">
                    {t('Manage remote work')}
                  </h3>
                  <p>
                    {t('Implement your strategy')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto grid lg:grid-cols-2 pt-16 lg:pt-32">
          <div data-sal="slide-right" data-sal-easing="ease">
            <figure className="w-auto mt-12 lg:mt-0">

            </figure>
          </div>
          <div
            data-sal="slide-left"
            data-sal-easing="ease"
            className="grid justify-center content-start"
          >
            <h2 className="font-medium text-2xl py-10 pb-5 text-center">
              {t('Web app for the company')}
            </h2>
            <div>
              <ul className="grid gap-6">
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  {t('Real-time monitoring of your companys remote/in-office work breakdown.')}
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  {t('Office occupancy rate analysis.')}
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  {t('Unused space cost.')}
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  {t('Digital clock-in, absence and holidays management.')}
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="container mx-auto grid flex-col-reverse lg:grid-cols-2 pt-16 lg:pt-16">
          <div
            data-sal="slide-right"
            className="grid justify-center content-center"
          >
            <h2 className="font-medium text-2xl py-10 pb-5 text-center">
              {t('Mobile app for the employee')}
            </h2>
            <div>
              <ul className="grid gap-6">
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  {t('Office and remote work booking.')}
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  {t('Management of custom work spaces.')}
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  {t('Digital clock-in, absences and holidays request.')}
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-primary mr-4"
                  />
                  {t('Historical data of workplace habits.')}
                </li>
              </ul>
            </div>
          </div>

        </section> */}
      </div>


      <section className="container   mr-3 text-primary-800  bg-purple-800 mx-auto shadow-2xl rounded-2xl lg:px-32">
        <h2 className="font-medium text-center pt-24 font-bold text-5xl pb-24">
          {t('CHOOSE_A_PLAN')}
        </h2>
        <PaymentsPlans />
      </section>

      <section
        id="contact"
        className="container bg-yellow-100 mt-32 mb-20 mr-6 text-primary-800 shadow-2xl  rounded-2xl  self-center pt-24"
      >
        <h2 className="font-bold text-primary-800 text-2xl lg:text-6xl text-center py-16 lg:pt-24">
          {t('Interested? Contact us!')}
        </h2>
        <p className="pb-5 text-center text-primary-800">
          {t('You can')}{" "}
          <OutboundLink eventProperties={{ location: "form description" }}

            href="https://calendly.com/dewocracylabs/dewocracy-demo"
            className="font-bold"
          >
            {t('request a video call')}
          </OutboundLink>{" "}
          {t('CONTACT_FORM_TEXT_2')}
        </p>
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
