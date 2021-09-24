import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useCallback, useMemo, useState } from "react";
import { useTranslations } from 'next-intl';
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { OutboundLink } from "../utils/OutboundLink";
const getCurrencyText = (value) =>
  Number(value).toLocaleString(undefined, {
    style: "currency",
    currency: "EUR",
  });

const plans = {
  biannual: {
    text: "Seminnual - up to 28% discount",
    startup: getCurrencyText(3),
    business: getCurrencyText(5),
  },
  monthly: {
    text: "Monthly",
    startup: getCurrencyText(4),
    business: getCurrencyText(7),
  },
};

export const PaymentsPlans = () => {
  const [plan, setPlan] = useState("biannual");
  const t = useTranslations("Default");
  const { business } = useMemo(() => plans[plan], [plan]);
  const changePlan = useCallback(
    () => setPlan(plan === "biannual" ? "monthly" : "biannual"),
    [plan]
  );
  return (
    <Fragment>
      <div className="grid  justify-center">
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-12 lg:gap-x-24 mb-8">
          {Object.entries(plans).map(([key, { text }]) => (
            <Fragment key={key}>
              {key === plan ? (
                <p className="btn h-16 px-8 pt-4 text-white bg-primary-800 font-bold text-lg rounded-lg  text-center">
                  {t(text)}
                </p>
              ) : (
                <button
                    className="btn h-16 px-8  text-white shadow-2xl text-lg text-white text-primary-800 rounded-lg  bg-white"
                  onClick={changePlan}
                >
                  {t(text)}
                </button>
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 justify-center h-full">
        <div
          data-sal="zoom-in"
          data-sal-easing="ease"
          className="grid rounded-lg bg-white p-8 md:p-10 max-w-md gap-y-8 my-4 lg:my-16"
        >
          <div>
            <p className="text-primary-800 text-2xl md:text-4xl font-bold pb-4">
              {t('Free')}
            </p>
            <p className="text-primary text-2xl md:text-4xl">
              <span className="font-bold">{getCurrencyText(0)}</span>
              <span className="text-sm">
                {" "}
                {t('Month / User')}
              </span>
            </p>
          </div>
          <ol className="text-black grid gap-6">
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              {t('1 administrator.')}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              {t('Up to 5 users.')}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              {t('Web app for the company.')}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              {t('Mobile app for the employees.')}
            </li>
            <li className="text-grey flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="mr-4"
              />
              {t('Optimum workspace and cost cutting proposal.')}
            </li>
            <li className="text-grey flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="mr-4"
              />
              {t('Ideal remote work strategy proposal.')}
            </li>
            <li className="text-grey flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="mr-4"
              />
              {t('Guidance throughout the entire process.')}
            </li>
          </ol>
          <OutboundLink
            eventType="signup" eventProperties={{ plan: "free", location: "plan listing" }}

            className="shadow-2xl  h-16 bg-primary-800 hover:bg-primary-400 text-white px-6 pt-4  text-lg  transition-colors duration-150  rounded-lg focus:shadow-outline"
            href="https://app.dewocracy.com/register/free"
          >
            {t('Start for free')}
          </OutboundLink>
        </div>
        <div
          data-sal="zoom-in"
          data-sal-easing="ease"
          className="grid rounded-lg bg-white p-8 md:p-10 max-w-md gap-y-8 my-4 lg:my-16"
        >

        <div
          data-sal="zoom-in"
          data-sal-easing="ease"
          className="grid rounded-lg bg-white p-8 md:p-10 max-w-md gap-y-8 my-4 lg:my-16"
        >
          <div>
            <p className="text-primary text-2xl md:text-4xl font-bold  pb-4">
                {t('Business')}
            </p>
            <p className="text-primary text-2xl md:text-4xl">
              <span className="font-bold">{business}</span>
              <span className="text-sm">
                {" "}
                  {t('Month / User')}
              </span>
            </p>
          </div>
          <ol className="text-black grid gap-6">
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="absolute text-primary mr-4 leading-8"
              />
              <span className="ml-8 inline">
                  {t('Unlimited administrators.')}
              </span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
                {t('Unlimited users.')}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
                {t('Web app for the company.')}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
                {t('Mobile app for the employees.')}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              <span>
                  {t('Optimum workspace and cost cutting proposal.')}
              </span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
                {t('Ideal remote work strategy proposal.')}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
                {t('Guidance throughout the entire process.')}
            </li>
          </ol>
          <OutboundLink
            eventType="signup"
            eventProperties={{ plan: "business", location: "plan listing" }}
              className="shadow-2xl  h-16 bg-primary-800 hover:bg-primary-400 text-white px-6 pt-4  text-lg  transition-colors duration-150  rounded-lg focus:shadow-outline"
            href="#contact"
          >
              {t('Explore')}
          </OutboundLink>
        </div>
        </div>
      </div>
    </Fragment>
  );
};
