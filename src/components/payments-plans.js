import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React, { Fragment, useCallback, useMemo, useState } from "react";
import { useTranslation, Trans } from "gatsby-plugin-react-i18next";
const getCurrencyText = (value) =>
  Number(value).toLocaleString(undefined, {
    style: "currency",
    currency: "EUR",
  });

const plans = {
  biannual: {
    text: "Semestral - hasta un 28% de ahorro",
    startup: getCurrencyText(3),
    business: getCurrencyText(5),
  },
  monthly: {
    text: "Mensual",
    startup: getCurrencyText(4),
    business: getCurrencyText(7),
  },
};

export const PaymentsPlans = () => {
  const [plan, setPlan] = useState("biannual");
  const { t } = useTranslation();
  const { startup, business } = useMemo(() => plans[plan], [plan]);
  const changePlan = useCallback(() =>
    setPlan(plan === "biannual" ? "monthly" : "biannual")
  , [plan]);
  return (
    <Fragment>
      <div className="grid justify-center">
        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-24 mb-8">
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
      <div className="grid lg:grid-cols-3 gap-8 justify-center">
        <div className="grid rounded-lg bg-white p-8 md:p-10 lg:p-12 max-w-md gap-y-8">
          <div>
            <p className="text-lightBlue text-2xl md:text-4xl font-bold"><Trans>Free</Trans></p>
            <p className="text-lightBlue text-2xl md:text-4xl">
              <span className="font-bold">{getCurrencyText(0)}</span>
              <span className="text-sm"><Trans> Mes / Usuario</Trans></span>
            </p>
          </div>
          <ol className="text-black text-sm md:text-md xl:text-lg ">
            <li className="my-3">
              <FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4" />
              <Trans>1 administrador</Trans>
            </li>
            <li className="my-3">
              <FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4" />
              <Trans>Hasta 3 usuarios</Trans>
            </li>
            <li className="my-3">
              <FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4" />
              <Trans>Plataforma de empresa</Trans>
            </li>
            <li className="my-3">
              <FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4" />
              <Trans>App para los trabajadores</Trans>
            </li>
            <li className="my-3 text-grey">
              <FontAwesomeIcon icon={faCheck} className="mr-4" />
              <Trans>Reporte semanal</Trans>
            </li>
            <li className="my-3 text-grey">
              <FontAwesomeIcon icon={faCheck} className="mr-4" />
              <Trans>Análisis de competencia</Trans>
            </li>
          </ol>
          <a
            className="btn bg-lightBlue text-white w-full block"
            href="#contact"
          >
            <Trans>Pruébalo gratis</Trans>
          </a>
        </div>
        <div className="grid rounded-lg bg-white p-8 md:p-10 lg:p-12 max-w-md gap-y-8">
          <div>
            <p className="text-purple text-2xl md:text-4xl font-bold">
              <Trans>Startup</Trans>
            </p>
            <p className="text-purple text-2xl md:text-4xl">
              <span className="font-bold">{startup}</span>
              <span className="text-sm"><Trans> Mes / Usuario</Trans></span>
            </p>
          </div>
          <ol className="text-black text-sm md:text-md xl:text-lg">
            <li className="my-3">
              <FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4" />
              <Trans>1 Administrador</Trans>
            </li>
            <li className="my-3">
              <FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4" />
              <Trans>Usuarios ilimitados</Trans>
            </li>
            <li className="my-3">
              <FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4" />
              <Trans>Plataforma de empresa</Trans>
            </li>
            <li className="my-3">
              <FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4" />
              <Trans>App para los trabajadores</Trans>
            </li>
            <li className="my-3">
              <FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4" />
              <Trans>Reporte semanal</Trans>
            </li>
            <li className="my-3 text-grey">
              <FontAwesomeIcon icon={faCheck} className="mr-4" />
              <Trans>Análisis de competencia</Trans>
            </li>
          </ol>
          <a className="btn bg-purple text-white w-full block" href="#contact">
            <Trans>Empieza ahora</Trans>
          </a>
        </div>
        <div className="grid rounded-lg bg-white p-8 md:p-10 lg:p-12 max-w-md gap-y-8">
          <div>
            <p className="text-primary text-2xl md:text-4xl font-bold">
              <Trans>Business</Trans>
            </p>
            <p className="text-primary text-2xl md:text-4xl">
              <span className="font-bold">{business}</span>
              <span className="text-sm">
                <Trans> Mes / Usuario</Trans>
              </span>
            </p>
          </div>
          <ol className="text-black text-sm md:text-md xl:text-lg">
            <li className="my-3">
              <FontAwesomeIcon
                icon={faCheck}
                className="absolute text-lightBlue mr-4 leading-8"
              />
              <span className="ml-8 inline">
                <Trans>Administradores ilimitados</Trans>
              </span>
            </li>
            <li className="my-3">
              <FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4" />
              <Trans>Usuarios ilimitados</Trans>
            </li>
            <li className="my-3">
              <FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4" />
              <Trans>Plataforma de empresa</Trans>
            </li>
            <li className="my-3">
              <FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4" />
              <Trans>App para los trabajadores</Trans>
            </li>
            <li className="my-3">
              <FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4" />
              <Trans>Reporte semanal</Trans>
            </li>
            <li className="my-3">
              <FontAwesomeIcon icon={faCheck} className="text-lightBlue mr-4" />
              <Trans>Análisis de competencia</Trans>
            </li>
          </ol>
          <a className="btn bg-primary text-white w-full block" href="#contact">
            <Trans>Descúbrelo</Trans>
          </a>
        </div>
      </div>
    </Fragment>
  );
};
