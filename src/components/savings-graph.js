import * as React from "react";
import { BarPropTypes, ResponsiveBar } from "@nivo/bar";

export const SavingsGraph = ({ data }) => {
  return (
    <ResponsiveBar
      data={data}
      keys={["Supplies costs","DW costs", "Rent costs"]}
      indexBy="costType"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.1}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={['#b5fdfd', '#ffbebe', '#c6bcff']}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
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
          symbolSize: 20,
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
            {id}: {value.toLocaleString(undefined, {
            style: "currency",
            currency: "EUR",
          })}
          </strong>
      )}
      theme={{
        tooltip: {
          container: {
            background: '#333',
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
