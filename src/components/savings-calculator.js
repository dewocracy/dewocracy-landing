import React, { Fragment, useEffect, useState } from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import { SavingsGraph } from "./savings-graph";
import { useDebounce } from "../hooks/use-debounce";

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
  }, [employeesSignal]);

  useEffect(() => {
    const result = AVG_PRICE_METER_PER_MONTH * officeSizeWithDW;
    setRentCostPerMonthWithDW(Number(result.toFixed(2)));
  }, [employeesSignal, officeSizeWithDW]);

  useEffect(() => {
    const result =
      MONTHLY_COST.CLEANING * officeSize +
      MONTHLY_COST.ELECTRICITY * officeSize +
      MONTHLY_COST.HEATING * officeSize +
      MONTHLY_COST.WATTER * officeSize;
    setSuppliesCost(Number(result.toFixed(2)));
  }, [employeesSignal]);

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

  const handleEmployeesChange = (e) => {
    if (!Number(e.target.value)) {
      return setEmployees("");
    }
    setEmployees(Number(e.target.value));
  };
  const handleSizeOfficeChange = (e) => {
    if (!Number(e.target.value)) {
      return setOfficeSize("");
    }
    setOfficeSize(Number(e.target.value));
  };
  const handleTargetChange = (e) => {
    if (!Number(e.target.value)) {
      return setTarget("");
    }
    setTarget(Number(e.target.value));
  };

  // Debug :D
  // console.log({employees, officeSize, target, officeSizeWithDW, rentCostPerMonth, rentCostPerMonthWithDW, suppliesCost, suppliesCostWithDW, techInvestment, monthlySavings, annualSavings, savingsPercentage });
  const showData = !!(employees && officeSize && target);
  return (
    <Fragment>
      <div className="md:grid grid-cols-2 gap-x-4">
        <div className="grid justify-center mt-10">
          <div className="flex justify-between mt-6 items-center">
            <label htmlFor="employees" className="font-bold pr-4">
              <Trans>Empleados:</Trans>
            </label>
            <input
              id="employees"
              type="number"
              min={1}
              name="employees"
              required
              placeholder="Empleados"
              className="rounded-sm text-black p-2 h-10 w-20 border border-grey"
              onChange={handleEmployeesChange}
              value={employees}
            />
          </div>
          <input
            type="range"
            value={employees || 0}
            max={1000}
            onChange={handleEmployeesChange}
          />
          <div className="flex justify-between mt-6 items-center">
            <label htmlFor="employees" className="font-bold pr-4">
                <Trans>m<sup>2</sup> oficina:</Trans>
            </label>
            <input
              id="sizeOffice"
              type="number"
              name="sizeOffice"
              required
              placeholder="m2 oficina"
              className="rounded-sm text-black p-2 h-10 w-20 border border-grey"
              onChange={handleSizeOfficeChange}
              value={officeSize}
              max={10000}
            />
          </div>
          <input
            type="range"
            value={officeSize || 0}
            max={10000}
            onChange={handleSizeOfficeChange}
          />
          <div className="flex justify-between mt-6 items-center">
            <label htmlFor="target" className="font-bold pr-4">
              <Trans>Proporción de teletrabajo objetivo (%):</Trans>
            </label>
            <input
              id="target"
              type="number"
              name="target"
              required
              className="rounded-sm text-black p-2 h-10 w-20 border border-grey"
              onChange={handleTargetChange}
              value={target}
            />
          </div>
          <input
            type="range"
            value={target || 0}
            max={100}
            onChange={handleTargetChange}
          />
          {showData ? <div className="mt-4">
            <p className="my-4">Te ahorrarías...</p>
            <div className="font-bold mt-2">
              {isNaN(monthlySavings)
                ? "-"
                : `${monthlySavings.toLocaleString(undefined, {
                    style: "currency",
                    currency: "EUR",
                  })} mensuales`}
            </div>
            <p className="font-bold mt-2">
              {isNaN(annualSavings)
                ? "-"
                : `${annualSavings.toLocaleString(undefined, {
                    style: "currency",
                    currency: "EUR",
                  })} anuales`}{" "}
            </p>
            <p className="font-bold mt-2">
              {isNaN(savingsPercentage)
                ? "-"
                : `${savingsPercentage.toLocaleString(undefined, {
                    style: "percent",
                    maximumFractionDigits: 2,
                  })} de ahorro`}
            </p>
          </div> : <></>}
        </div>
        <div className="w-full h-full">
          {showData ? (
            <SavingsGraph
              data={[
                {
                  costType: "Current costs",
                  "Supplies costs": suppliesCost,
                  "Technological inversion": 0,
                  "Rent costs": rentCostPerMonth,
                },
                {
                  costType: "With DeWocracy",
                  "Supplies costs": suppliesCostWithDW,
                  "DW costs": techInvestment,
                  "Rent costs": rentCostPerMonthWithDW,
                },
              ]}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </Fragment>
  );
};
