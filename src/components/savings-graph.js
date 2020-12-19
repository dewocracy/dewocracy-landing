import * as React from "react";
import { BarPropTypes, ResponsiveBar } from "@nivo/bar";

export const SavingsGraph = ({ data }) => {
  return (
    <ResponsiveBar
      data={data}
      keys={["Supplies costs", "Rent costs","DW costs"]}
      indexBy="costType"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.50}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={["#78A5FF", "#2945FF","#ffbebe"]}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 0,
        format: value =>
          `${Number(value).toLocaleString(undefined, {
            notation: 'compact',
          })}`,
      }}
      axisBottom={{
        tickSize: 0,
        tickPadding: 20,
      }}
      labelFormat={value => `${Number(value).toLocaleString(undefined, {
        notation: 'compact',
      })}`}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["brighter", 2]] }}
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
          {value.toLocaleString(undefined, {
            style: "currency",
            currency: "EUR",
          })}
        </strong>
      )}
      theme={{
        fontSize: '14px',
        tooltip: {
          container: {
            background: "#fff",
          },
        },
        grid: {
          line: {
            stroke: "#eee",
          }
        },
        labels: {
          text: {
            fontWeight: 'bolder',
            fontSize: '12px'
          }
        }
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
