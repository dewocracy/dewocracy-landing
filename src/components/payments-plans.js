import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useCallback, useMemo, useState } from "react";
import { useTranslation, Trans } from "gatsby-plugin-react-i18next";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
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
  const { t } = useTranslation();
  const { startup, business } = useMemo(() => plans[plan], [plan]);
  const changePlan = useCallback(
    () => setPlan(plan === "biannual" ? "monthly" : "biannual"),
    [plan]
  );
  return (
    <Fragment>
      <div className="grid justify-center">
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-12 lg:gap-x-24 mb-8">
          {Object.entries(plans).map(([key, { text }]) => (
            <Fragment key={key}>
              {key === plan ? (
                <p className="btn text-white bg-lightBlue text-center">
                  {t(text)}
                </p>
              ) : (
                <button
                  className="btn text-white bg-transparent"
                  onClick={changePlan}
                >
                  {t(text)}
                </button>
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 justify-center h-full">
        <div
          data-sal="zoom-in"
          data-sal-easing="ease"
          className="grid rounded-lg bg-white p-8 md:p-10 max-w-md gap-y-8 my-4 lg:my-16"
        >
          <div>
            <p className="text-primary text-2xl md:text-4xl font-bold pb-4">
              <Trans>Free</Trans>
            </p>
            <p className="text-primary text-2xl md:text-4xl">
              <span className="font-bold">{getCurrencyText(0)}</span>
              <span className="text-sm">
                <Trans> Mes / Usuario</Trans>
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
              <Trans>1 administrator.</Trans>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              <Trans>Up to 5 users.</Trans>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              <Trans>Web app for the company.</Trans>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              <Trans>Mobile app for the employees.</Trans>
            </li>
            <li className="text-grey flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="mr-4"
              />
              <Trans>Optimum workspace and cost cutting proposal.</Trans>
            </li>
            <li className="text-grey flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="mr-4"
              />
              <Trans>Ideal remote work strategy proposal.</Trans>
            </li>
            <li className="text-grey flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="mr-4"
              />
              <Trans>Guidance throughout the entire process.</Trans>
            </li>
          </ol>
          <a
            className="btn bg-white border border-primary border-4 text-primary w-full block h-12"
            href="#contact"
          >
            <Trans>Start for free</Trans>
          </a>
        </div>
        <div
          data-sal="zoom-in"
          data-sal-easing="ease"
          className="grid content-between rounded-lg bg-white p-8 md:p-10 max-w-md gap-y-8"
        >
          <div>
            {/*<div className="text-center">*/}
            {/*  <span className="btn bg-transparent border border-primary p-1 uppercase px-10 text-sm">*/}
            {/*    <Trans>Popular</Trans>*/}
            {/*  </span>*/}
            {/*</div>*/}
            <p className="text-primary text-2xl md:text-4xl font-bold pb-4">
              <Trans>Startup</Trans>
            </p>
            <p className="text-primary text-2xl md:text-4xl">
              <span className="font-bold">{startup}</span>
              <span className="text-sm">
                <Trans> Mes / Usuario</Trans>
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
              <Trans>1 administrator.</Trans>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              <Trans>Unlimited users.</Trans>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              <Trans>Web app for the company.</Trans>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              <Trans>Mobile app for the employees.</Trans>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              <Trans>Optimum workspace and cost cutting proposal.</Trans>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              <Trans>Ideal remote work strategy proposal.</Trans>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              <Trans>Guidance throughout the entire process.</Trans>
            </li>
          </ol>
          <a
            className="btn bg-primary text-white w-full block h-12"
            href="#contact"
          >
            <Trans>Start now</Trans>
          </a>
        </div>
        <div
          data-sal="zoom-in"
          data-sal-easing="ease"
          className="grid rounded-lg bg-white p-8 md:p-10 max-w-md gap-y-8 my-4 lg:my-16"
        >
          <div>
            <p className="text-primary text-2xl md:text-4xl font-bold  pb-4">
              <Trans>Business</Trans>
            </p>
            <p className="text-primary text-2xl md:text-4xl">
              <span className="font-bold">{business}</span>
              <span className="text-sm">
                <Trans> Mes / Usuario</Trans>
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
                <Trans>Unlimited administrators.</Trans>
              </span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              <Trans>Unlimited users.</Trans>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              <Trans>Web app for the company.</Trans>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              <Trans>Mobile app for the employees.</Trans>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              <span>
                <Trans>Optimum workspace and cost cutting proposal.</Trans>
              </span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              <Trans>Ideal remote work strategy proposal.</Trans>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="lg"
                className="text-primary mr-4"
              />
              <Trans>Guidance throughout the entire process.</Trans>
            </li>
          </ol>
          <a
            className="btn bg-white border border-primary border-2 text-primary w-full block h-12"
            href="#contact"
          >
            <Trans>Explore</Trans>
          </a>
        </div>
      </div>
    </Fragment>
  );
};
