import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslations } from 'next-intl';
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { OutboundLink } from "../utils/OutboundLink";


export const PaymentsPlans = () => {
  const t = useTranslations("payment_plans");

  return (
    <div className="relative z-10">


      <h2 className="text-2xl pt-24 text-center md:text-left">
        {t('title')}

      </h2>


      <h2 className="pt-4 font-bold text-4xl pb-8 text-center md:text-left">
        {t('title_question')}
      </h2>

      <div className="grid lg:grid-cols-2 gap-10 justify-center h-full">
        <div
          data-sal="zoom-in"
          data-sal-easing="ease"
          className="grid rounded-lg bg-white p-8 md:p-10 xl:ml-24 max-w-sm gap-y-8 my-4 lg:my-16"
        >
          <div>
            <p className="text-primary-800 text-2xl md:text-3xl font-bold pb-4">
              {t('free_plan_title')}
            </p>
            <p className="text-primary text-2xl md:text-3xl">
              <span className="font-bold">0 €</span>
              <span className="text-sm">
                {" "}
                {t('per_month')}
              </span>
            </p>
          </div>
          <ol className="text-black grid gap-6">

            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4 text-primary-400"
              />
              {t('unlimited_users')}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4 text-primary-400"
              />
              {t('calendar')}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4 text-primary-400"
              />
              {t('limits')}
            </li>

            <li className="line-through  opacity-70 flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="mr-4 text-white"
              />
              {t('reservations')}
            </li>
            <li className="line-through  opacity-70 flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="mr-4 text-white"
              />
              {t('interative_map')}
            </li>
            <li className="line-through  opacity-70 text-str flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="mr-4 text-white "
              />
              {t('reports')}
            </li>
          </ol>
          <OutboundLink
            eventType="signup" eventProperties={{ plan: "free", location: "plan listing" }}

            className="shadow-2xl h-16 bg-primary-400 hover:bg-primary-800 text-white  pt-4  text-lg  transition-colors duration-500  rounded-full py-4 px-4 xl:px-8 text-center focus:shadow-outline"
            href="https://app.dewocracy.com/register/free"
          >
            {t('start_free')}
          </OutboundLink>
        </div>
        <div
          data-sal="zoom-in"
          data-sal-easing="ease"
          className=" grid rounded-lg bg-white p-8 md:p-10 max-w-sm gap-y-8 my-4 lg:my-16"
        >
          <div>
            <p className="text-primary text-2xl md:text-3xl font-bold  pb-4">
              {t('business_plan_title')}
            </p>
            <OutboundLink
              eventProperties={{ location: "payment-plans-box" }}
              className=" mt-4 text-sm   border-b-2 pb-1 hover:border-black text-primary-400 hover:bg-primary-800 leading-8 "
              href="//calendly.com/dewocracylabs/dewocracy-demo" >
              {t('talk_with_an_expert')}
            </OutboundLink>
          </div>
          <ol className="text-black grid gap-6">
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4 text-primary-400"
              />
              {t('unlimited_users')}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4 text-primary-400"
              />
              {t('calendar')}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4 text-primary-400"
              />
              {t('limits')}
            </li>

            <li className=" flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="mr-4 text-primary-400"
              />
              {t('reservations')}
            </li>
            <li className=" flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="mr-4 text-primary-400"
              />
              {t('interative_map')}
            </li>
            <li className=" flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="mr-4 text-primary-400 "
              />
              {t('reports')}
            </li>
          </ol>
          <OutboundLink
            eventType="signup"
            eventProperties={{ plan: "business", location: "plan listing" }}
            className="shadow-2xl bg-primary-400 hover:bg-primary-800 text-white  h-16  text-lg  transition-colors duration-150  rounded-full py-4 px-4 xl:px-8 text-center focus:shadow-outline"
            href="#contact"
          >
            {t('explore')}
          </OutboundLink>
        </div>
      </div>
    </div>
  );
};
