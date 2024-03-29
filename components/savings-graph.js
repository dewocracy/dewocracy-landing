import * as React from "react";
import { BarPropTypes, ResponsiveBar } from "@nivo/bar";
import { useTranslations } from 'next-intl';

export const SavingsGraph = ({ data }) => {
  const t = useTranslations("Calculator");
  return (
    <ResponsiveBar
      data={data}
      keys={[t("key_utilities"), t("key_rent"), t("key_cost")]}
      indexBy="costType"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.5}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={["#1e3a8a", "#00635D", "#E9D758"]}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 0,
        format: (value) =>
          `${Number(value).toLocaleString("en-GB", {
            notation: "compact",
          })}`,
      }}
      axisBottom={{
        tickSize: 0,
        tickPadding: 20,
        tickRotation: 15,
      }}
      labelFormat={(value) =>
        `${Number(value).toLocaleString("en-GB", {
          notation: "compact",
        })}`
      }
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor="white"
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 10,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      tooltip={({ id, value, color }) => (
        <strong style={{ color }}>
          {id}:{" "}
          {value.toLocaleString("en-GB", {
            style: "currency",
            currency: "EUR",
          })}
        </strong>
      )}
      theme={{
        fontSize: "14px",
        tooltip: {
          container: {
            background: "#fff",
          },
        },
        grid: {
          line: {
            stroke: "#eee",
          },
        },
        labels: {
          text: {
            fontWeight: "bolder",
            fontSize: "12px",
          },
        },
      }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
};

SavingsGraph.propTypes = {
  data: BarPropTypes.data,
};
