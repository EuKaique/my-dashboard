"use client";

import { ResponsiveBar } from "@nivo/bar";

const heights = [110, 90, 110, 69, 100, 32, 91, 130, 110, 79, 130, 95, 113, 56, 94, 72, 114, 94, 68, 124, 89, 102, 61, 115, 97, 123];
const data = heights.map((value, index) => ({
  interval: String(index),
  value,
  color: index % 2 === 0 ? "#cb3cff" : "#00c2ed",
}));
const labels: Record<string, string> = {
  "0": "12 AM",
  "8": "8 AM",
  "16": "4 PM",
  "25": "11 PM",
};

const Bar = () => (
  <div className="h-[390px] w-full min-w-0 bg-[#0b1533] mt-4">
    <ResponsiveBar
      data={data}
      keys={["value"]}
      indexBy="interval"
      margin={{ top: 37, right: 56, bottom: 80, left: 56 }}
      padding={0.62}
      valueScale={{ type: "linear", min: 0, max: 150 }}
      indexScale={{ type: "band", round: false }}
      colors={({ data: datum }) => datum.color}
      borderRadius={2}
      enableLabel={false}
      enableGridX={false}
      enableGridY={false}
      axisTop={null}
      axisRight={null}
      axisLeft={null}
      axisBottom={{
        tickValues: Object.keys(labels),
        tickSize: 0,
        tickPadding: 20,
        format: (value) => labels[String(value)] ?? "",
      }}
      theme={{
        text: { fontFamily: "Arial, sans-serif" },
        axis: {
          domain: { line: { stroke: "transparent" } },
          ticks: { text: { fill: "#aeb9e1", fontSize: 18 } },
        },
      }}
      isInteractive={false}
      animate={false}
      role="img"
      ariaLabel="Gráfico de barras ao longo do dia, de 12 AM a 11 PM. Dados ilustrativos."
    />
  </div>
);

export default Bar;