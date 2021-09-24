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
    text: "half_yearly_cost",
    startup: getCurrencyText(3),
    business: getCurrencyText(5),
  },
  monthly: {
    text: "monthly_cost",
    startup: getCurrencyText(4),
    business: getCurrencyText(7),
  },
};

export const PaymentsPlans = () => {
  const [plan, setPlan] = useState("biannual");
  const t = useTranslations("payment_plans");
  const { business } = useMemo(() => plans[plan], [plan]);
  const changePlan = useCallback(
    () => setPlan(plan === "biannual" ? "monthly" : "biannual"),
    [plan]
  );
  return (
    <Fragment>
      <h2 className="font-medium text-center pt-24 font-bold text-5xl pb-24">
        {t('title')}
      </h2>
      <div className="grid  justify-center">
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-12 lg:gap-x-24 mb-8">
          {Object.entries(plans).map(([key, { text }]) => (
            <Fragment key={key}>
              {key === plan ? (
                <p className="btn  px-8 py-4 inline-flex items-center	 text-white bg-primary-800 font-bold text-lg rounded-lg  ">
                  {t(text)}
                </p>
              ) : (
                <button
                    className="btn  px-8 py-4 inline-flex items-center	  text-white shadow-2xl text-lg font-bold text-white text-primary-800 rounded-lg  bg-white"
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
          className="grid rounded-lg bg-white p-8 md:p-10 max-w-xl gap-y-8 my-4 lg:my-16"
        >
          <div>
            <p className="text-primary-800 text-2xl md:text-4xl font-bold pb-4">
              {t('free_plan_title')}
            </p>
            <p className="text-primary text-2xl md:text-4xl">
              <span className="font-bold">{getCurrencyText(0)}</span>
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
                className="text-primary mr-4"
              />
              {t('single_admin')}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              {t('up_to_5_users')}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              {t('app_for_company')}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              {t('app_for_employees')}
            </li>
            <li className="text-grey flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="mr-4"
              />
              {t('cost_proposal')}
            </li>
            <li className="text-grey flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="mr-4"
              />
              {t('remote_work_proposal')}
            </li>
            <li className="text-grey flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="mr-4"
              />
              {t('guidance')}
            </li>
          </ol>
          <OutboundLink
            eventType="signup" eventProperties={{ plan: "free", location: "plan listing" }}

            className="shadow-2xl  h-16 bg-primary-800 hover:bg-primary-400 text-white px-6 pt-4  text-lg  transition-colors duration-150  rounded-lg focus:shadow-outline"
            href="https://app.dewocracy.com/register/free"
          >
            {t('start_free')}
          </OutboundLink>
        </div>
        <div
          data-sal="zoom-in"
          data-sal-easing="ease"
          className="grid rounded-lg bg-white p-8 md:p-10 max-w-xl gap-y-8 my-4 lg:my-16"
        >
          <div>
            <p className="text-primary text-2xl md:text-4xl font-bold  pb-4">
              {t('business_plan_title')}
            </p>
            <p className="text-primary text-2xl md:text-4xl">
              <span className="font-bold">{business}</span>
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
                className="absolute text-primary mr-4 leading-8"
              />
              <span className="ml-8 inline">
                {t('unlimited_administrators')}
              </span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              {t('unlimited_users')}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              {t('app_for_company')}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              {t('app_for_employees')}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              <span>
                {t('cost_proposal')}
              </span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              {t('remote_work_proposal')}
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              {t('guidance')}
            </li>
          </ol>
          <OutboundLink
            eventType="signup"
            eventProperties={{ plan: "business", location: "plan listing" }}
              className="shadow-2xl  h-16 bg-primary-800 hover:bg-primary-400 text-white px-6 pt-4  text-lg  transition-colors duration-150  rounded-lg focus:shadow-outline"
            href="#contact"
          >
            {t('explore')}
          </OutboundLink>
        </div>
      </div>
    </Fragment>
  );
};
