import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useTranslations } from 'next-intl';
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { OutboundLink } from "../utils/OutboundLink";
import Toggle from 'react-toggle'
import { set } from "lodash";


export const PaymentsPlans = () => {
  const t = useTranslations("payment_plans");

  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="relative z-10">


      <h2 className="text-2xl pt-24 text-left">
        {t('title')}

      </h2>


      <h2 className="pt-4 font-bold text-4xl pb-8 text-left">
        {t('title_question')}
      </h2>


      <div className="ml-20 flex justify-center" >
          <label className=" switch md:max-w-md">
            <Toggle className=" form-check-input"
              defaultChecked={true}
              icons={false}
              onChange={() => setIsMonthly(!isMonthly)} />
            <span className="slider round"></span>

          </label>
          <div className="ml-4 pt-2 w-36">{t(isMonthly ? 'monthly_cost' : 'yearly_cost')} </div>
        </div>
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
                {t(isMonthly ? 'per_month' : 'per_year')}
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
            href="https://app.dewocracy.com/auth/register/basic"
          >
            {t('start_free')}
          </OutboundLink>
        </div>
        <div
          data-sal="zoom-in"
          data-sal-easing="ease"
          className="grid rounded-lg bg-white p-8 md:p-10 max-w-sm gap-y-8 my-4 lg:my-16"
        >
          <div>
            <p className="text-primary text-2xl md:text-3xl font-bold  pb-4">
              {t('business_plan_title')}
            </p>
            <p className="text-primary text-2xl md:text-3xl">
              <span className="font-bold">{isMonthly ? 3 : 24} €</span>
              <span className="text-sm">
                {" "}
                {t(isMonthly ? 'per_month' : 'per_year')}
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
            href="//calendly.com/dewocracylabs/dewocracy-demo"
          >
            {t('explore')}
          </OutboundLink>
        </div>
      </div>
    </div>
  );
};
