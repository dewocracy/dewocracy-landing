import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { SavingsGraph } from "./savings-graph";
import { useDebounce } from "../hooks/use-debounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

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
  const { t } = useTranslation();

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

  const handleEmployeesChange = useCallback((e) => {
    if (!Number(e.target.value)) {
      return setEmployees("");
    }
    setEmployees(Number(e.target.value));
  }, []);
  const handleSizeOfficeChange = useCallback((e) => {
    if (!Number(e.target.value)) {
      return setOfficeSize("");
    }
    setOfficeSize(Number(e.target.value));
  }, []);

  const handleTargetChange = useCallback((e) => {
    const newValue = Number(e.target.value);
    if (!newValue) {
      return setTarget("");
    }
    if (newValue >= 90) {
      return setTarget(90);
    }
    setTarget(newValue);
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
    <Fragment>
      <div className="md:grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-24 ">
        <div className="grid content-start justify-center md:mt-10 shadow-xl rounded-lg p-10">
          <label htmlFor="employees" className="font-bold pr-4 pb-4">
            <Trans>How many employees does your company have?</Trans>
          </label>
          <input
            id="employees"
            type="number"
            min={1}
            name="employees"
            required
            placeholder={t("Employees")}
            className="rounded-lg text-black py-6 px-4 h-10 w-full text-center border border-grey"
            onChange={handleEmployeesChange}
            value={employees}
          />
          <label htmlFor="sizeOffice" className="font-bold pr-4 pt-10 pb-4">
            <Trans>
              How many square meters of office space do you currently have?
              (sqm)
            </Trans>
          </label>
          <input
            id="sizeOffice"
            type="number"
            name="sizeOffice"
            required
            placeholder={t("office square metres")}
            className="rounded-lg text-black py-6 px-4 h-10 w-full text-center border border-grey"
            onChange={handleSizeOfficeChange}
            value={officeSize}
            max={10000}
          />
          <label htmlFor="target" className="font-bold pr-4 pt-10 pb-4">
            <Trans>
              What{"'"}s the percentage of remote work you would like to
              implement? (%)
            </Trans>
          </label>
          <input
            id="target"
            type="number"
            name="target"
            required
            className="rounded-lg text-black py-6 px-4 h-10 w-full text-center border border-grey"
            onChange={handleTargetChange}
            value={target}
          />
          <p className="text-center pt-10">
            <Trans>How do we calculate it?</Trans>
            <br />
          </p>
          <p className="text-center pt-4">
            <a href="#contact" className="text-primary underline">
              <Trans>Contact us</Trans>
            </a>
          </p>
        </div>
        <div
          data-sal="slide-bottom"
          data-sal-easing="easeInQuad"
          className="col-span-2 shadow-xl rounded-lg p-y-10 lg:p-10"
        >
          <div className="w-full h-96 lg:h-4/6">
            <SavingsGraph
              data={[
                {
                  costType: t("Now"),
                  [t("Utilities")]: !isNaN(suppliesCost) ? suppliesCost : 0,
                  [t("Rent")]: !isNaN(rentCostPerMonth) ? rentCostPerMonth : 0,
                },
                {
                  costType: t("With DW"),
                  [t("Utilities")]: !isNaN(suppliesCostWithDW)
                    ? suppliesCostWithDW
                    : 0,
                  [t("Rent")]: !isNaN(rentCostPerMonthWithDW)
                    ? rentCostPerMonthWithDW
                    : 0,
                  [t("DW cost")]: !isNaN(techInvestment) ? techInvestment : 0,
                },
              ]}
            />
          </div>
          <div className="mt-10 grid justify-center">
            {showData ? (
              <>
                <p className="my-4">
                  <Trans>With DeWocracy you could save up to...</Trans>
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
                    <Trans>monthly</Trans>
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
                    <Trans>annually</Trans>
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
                    <Trans>saving</Trans>
                  </p>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
