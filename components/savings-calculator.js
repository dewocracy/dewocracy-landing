import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useTranslations } from 'next-intl';
import { SavingsGraph } from "./savings-graph";
import { useDebounce } from "../hooks/use-debounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { OutboundLink } from "../utils/OutboundLink";
import { Amplitude } from '@amplitude/react-amplitude';
import { useRouter } from "next/router";
const AVG_PRICE_METER_PER_MONTH = 28;

const AVG_COST_PER_METER = {
  ELECTRICITY: 52.5,
  WATTER: 307,
  HEATING: 186,
};

const AVG_COST_PER_UNIT = {
  ELECTRICITY: 0.13,
  WATTER: 0.00166,
  HEATING: 0.05,
};

const ANNUAL_COST = {
  CLEANING: 312,
  ELECTRICITY: AVG_COST_PER_METER.ELECTRICITY * AVG_COST_PER_UNIT.ELECTRICITY,
  WATTER: AVG_COST_PER_METER.WATTER * AVG_COST_PER_UNIT.WATTER,
  HEATING: AVG_COST_PER_METER.HEATING * AVG_COST_PER_UNIT.HEATING,
};

const MONTHLY_COST = {
  CLEANING: ANNUAL_COST.CLEANING / 12,
  ELECTRICITY: ANNUAL_COST.ELECTRICITY / 12,
  WATTER: ANNUAL_COST.WATTER / 12,
  HEATING: ANNUAL_COST.HEATING / 12,
};

const DW_PLANS = {
  free: 0,
  startup: 3,
  business: 5,
};

const DEFAULTS = {
  EMPLOYEES: 45,
  OFFICE_SIZE: 300,
  TARGET: 30,
};

const getDWCost = (employees) => {
  if (employees <= 5) {
    return 0;
  }
  if (employees >= 50) {
    return employees * DW_PLANS.business;
  }
  return employees * DW_PLANS.startup;
};

export const SavingsCalculator = () => {
  const router = useRouter()
  const t = useTranslations("Calculator")

  const [employees, setEmployees, { signal: employeesSignal }] = useDebounce(
    DEFAULTS.EMPLOYEES
  );
  const [officeSize, setOfficeSize, { signal: officeSizeSignal }] = useDebounce(
    DEFAULTS.OFFICE_SIZE
  );
  const [target, setTarget, { signal: targetSignal }] = useDebounce(
    DEFAULTS.TARGET
  );

  const [officeSizeWithDW, setOfficeSizeWithDW] = useState(0);
  const [rentCostPerMonth, setRentCostPerMonth] = useState(0);
  const [rentCostPerMonthWithDW, setRentCostPerMonthWithDW] = useState(0);
  const [suppliesCost, setSuppliesCost] = useState(0);
  const [suppliesCostWithDW, setSuppliesCostWithDW] = useState(0);
  const [techInvestment, setTechInvestment] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [savingsPercentage, setSavingsPercentage] = useState(0);

  useEffect(() => {
    setOfficeSizeWithDW(
      (officeSize / employees) * employees * (1 - target / 100)
    );
  }, [employeesSignal, officeSizeSignal, targetSignal]);

  useEffect(() => {
    const result = AVG_PRICE_METER_PER_MONTH * officeSize;
    setRentCostPerMonth(Number(result.toFixed(2)));
  }, [officeSizeSignal]);

  useEffect(() => {
    const result = AVG_PRICE_METER_PER_MONTH * officeSizeWithDW;
    setRentCostPerMonthWithDW(Number(result.toFixed(2)));
  }, [officeSizeWithDW]);

  useEffect(() => {
    const result =
      MONTHLY_COST.CLEANING * officeSize +
      MONTHLY_COST.ELECTRICITY * officeSize +
      MONTHLY_COST.HEATING * officeSize +
      MONTHLY_COST.WATTER * officeSize;
    setSuppliesCost(Number(result.toFixed(2)));
  }, [officeSizeSignal]);

  useEffect(() => {
    const result =
      MONTHLY_COST.CLEANING * officeSizeWithDW +
      MONTHLY_COST.ELECTRICITY * officeSizeWithDW +
      MONTHLY_COST.HEATING * officeSizeWithDW +
      MONTHLY_COST.WATTER * officeSizeWithDW;
    setSuppliesCostWithDW(Number(result.toFixed(2)));
  }, [officeSizeWithDW]);

  useEffect(() => {
    setTechInvestment(getDWCost(employees));
  }, [employeesSignal]);

  useEffect(() => {
    setMonthlySavings(
      rentCostPerMonth +
      suppliesCost -
      (rentCostPerMonthWithDW + suppliesCostWithDW + techInvestment)
    );
  }, [
    rentCostPerMonth,
    suppliesCost,
    rentCostPerMonthWithDW,
    suppliesCostWithDW,
    techInvestment,
  ]);

  useEffect(() => {
    setAnnualSavings(monthlySavings * 12);
  }, [monthlySavings]);

  useEffect(() => {
    setAnnualSavings(monthlySavings * 12);
  }, [monthlySavings]);

  useEffect(() => {
    setSavingsPercentage(monthlySavings / (rentCostPerMonth + suppliesCost));
  }, [monthlySavings, rentCostPerMonth, suppliesCost]);

  const handleEmployeesChange = useCallback((logEvent, e) => {
    if (!Number(e.target.value)) {
      return setEmployees("");
    }
    setEmployees(Number(e.target.value));

    logEvent("editedCalculator", {
      action: "changed number Employees",
      value: e.target.value,
    })


  }, []);
  const handleSizeOfficeChange = useCallback((logEvent, e) => {
    if (!Number(e.target.value)) {
      return setOfficeSize("");
    }
    setOfficeSize(Number(e.target.value));
    logEvent("editedCalculator", {
      action: "changed office space ",
      value: e.target.value,
    })

  }, []);

  const handleTargetChange = useCallback((logEvent, e) => {
    const newValue = Number(e.target.value);
    if (!newValue) {
      return setTarget("");
    }
    if (newValue >= 90) {
      return setTarget(90);
    }
    setTarget(newValue);
    logEvent("editedCalculator", {
      action: "changed target remote ",
      value: e.target.value,
    })

  }, []);

  // Debug :D
  // console.log({
  //   employees,
  //   officeSize,
  //   target,
  //   officeSizeWithDW,
  //   rentCostPerMonth,
  //   rentCostPerMonthWithDW,
  //   suppliesCost,
  //   suppliesCostWithDW,
  //   techInvestment,
  //   monthlySavings,
  //   annualSavings,
  //   savingsPercentage,
  // });
  const showData = !!(employees && officeSize && target);
  return (
    <Amplitude
      eventProperties={(inheritedProps) => ({
        ...inheritedProps,
        page: {
          ...inheritedProps.page,
          name: 'calculator page',
          language: router.locale,
          path: router.pathname
        },
      })}>

      {({ instrument, logEvent }) => (
      <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-24 ">
        <div className="grid text-primary-800 content-start justify-center md:mt-10   xl:p-8">
            <label htmlFor="employees" className="pr-4 pb-4 text-xl text-center">
            {t('employees_text')}
          </label>
          <input
            id="employees"
            type="number"
            min={1}
            name="employees"
            required
            placeholder={t("employees_placeholder")}
            className="rounded-lg text-black py-6 px-4 h-10 mb-8 w-full text-center bg-opacity-25 "
              onChange={(e) => handleEmployeesChange(logEvent, e)}
            value={employees}
          />
            <label htmlFor="sizeOffice" className=" pr-4 pt-10 pb-4 text-xl text-center">
            {t('square_meters_text')}
          </label>
          <input
            id="sizeOffice"
            type="number"
            name="sizeOffice"
            required
            placeholder={t("square_meters_placeholder")}
            className="rounded-lg text-black py-6 px-4 mb-8 h-10 w-full text-center "
              onChange={(e) => handleSizeOfficeChange(logEvent, e)}
            value={officeSize}
            max={10000}
          />
            <label htmlFor="target" className="pr-4 pt-10 pb-4 text-xl text-center">
            {t('percentage_text')}
          </label>
          <input
            id="target"
            type="number"
            name="target"
            required
            className="rounded-lg text-black py-6 mb-8 px-4 h-10 w-full text-center "
              onChange={(e) => handleTargetChange(logEvent, e)}
            value={target}
          />
            <p className="text-center font-bold text-xl  text-primary-800 pt-10">
            {t('calculation')}
            <br />
          </p>
          <p className="text-center pt-12">
            <OutboundLink
              eventType={"accessed contact form"} eventProperties={{ location: "plans" }}
                href="/#contact" className="shadow-2xl   bg-primary-400 hover:bg-primary-800 text-white px-6 py-4  text-lg  transition-colors duration-150  rounded-full py-4 px-4 xl:px-8 focus:shadow-outline">


              {t('button_contact')}
            </OutboundLink>
          </p>
        </div>
        <div
          data-sal="slide-bottom"
          data-sal-easing="easeInQuad"
          className="col-span-2  rounded-lg p-y-10 lg:p-10"
        >
          <div className="w-full h-96 lg:h-4/6">
            <SavingsGraph
              data={[
                {
                  costType: t("label_now"),
                  [t("key_utilities")]: !isNaN(suppliesCost) ? suppliesCost : 0,
                  [t("key_rent")]: !isNaN(rentCostPerMonth) ? rentCostPerMonth : 0,
                },
                {
                  costType: t("label_with_dw"),
                  [t("key_utilities")]: !isNaN(suppliesCostWithDW)
                    ? suppliesCostWithDW
                    : 0,
                  [t("key_rent")]: !isNaN(rentCostPerMonthWithDW)
                    ? rentCostPerMonthWithDW
                    : 0,
                  [t("key_cost")]: !isNaN(techInvestment) ? techInvestment : 0,
                },
              ]}
            />
          </div>
          <div className="text-center md:text-left mt-10 grid text-primary-800 justify-center">
            {showData ? (
              <>
                <p className="my-4 font-bold text-2xl">
                  {t('saving_with_dw')}
                </p>
                <div className="pb-10 w-auto">
                  <div className="mt-2 text-lg lg:text-2xl">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-success mr-4 animate-bounce"
                    />
                    <span className="font-bold">
                      {isNaN(monthlySavings)
                        ? "-"
                        : `${monthlySavings.toLocaleString(undefined, {
                          style: "currency",
                          currency: "EUR",
                        })} `}
                    </span>
                    {t('monthly')}
                  </div>
                  <p className="mt-2 text-lg lg:text-2xl">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-success mr-4 animate-bounce"
                    />
                    <span className="font-bold">
                      {isNaN(annualSavings)
                        ? "-"
                        : `${annualSavings.toLocaleString(undefined, {
                          style: "currency",
                          currency: "EUR",
                        })} `}
                    </span>
                    {t('annually')}
                  </p>
                  <p className="mt-2 text-lg lg:text-2xl">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-success mr-4 animate-bounce"
                    />
                    <span className="font-bold">
                      {isNaN(savingsPercentage)
                        ? "-"
                        : `${savingsPercentage.toLocaleString(undefined, {
                          style: "percent",
                          maximumFractionDigits: 2,
                        })} `}
                    </span>
                    {t('saving')}
                  </p>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      )}
    </Amplitude>
  );
};
