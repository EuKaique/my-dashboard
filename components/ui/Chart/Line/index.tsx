"use client";

import { ResponsiveLine, type LineCustomSvgLayerProps } from "@nivo/line";
import { useId } from "react";
import { customData } from "./mock";

type Series = (typeof customData)[number];
const colors = { Revenue: "#cb3cff", Expenses: "#00c2ff" };

const Highlights = ({ points, innerWidth, currentPoint }: LineCustomSvgLayerProps<Series>) => {
  const active = currentPoint ?? points.find((point) => point.seriesId === "Revenue" && point.data.x === "Jun");
  if (!active) return null;
  const month = customData[0].data.findIndex((point) => point.x === active.data.x);
  const date = new Date(2023, month, 21).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const x = Math.max(0, Math.min(active.x - 78, innerWidth - 156));
  return (
    <g pointerEvents="none">
      {points.filter((point) => point.data.x === "Dec").map((point) => (
        <circle key={point.id} cx={point.x} cy={point.y} r={2.5} fill={point.seriesColor} />
      ))}
      <circle cx={active.x} cy={active.y} r={6.5} fill="#0b1533" stroke={active.seriesColor} strokeWidth={1.2} />
      <g transform={`translate(${x}, ${Math.max(4, active.y - 96)})`}>
        <rect width={156} height={68} rx={4} fill="#0b1533" fillOpacity={0.96} />
        <text x={16} y={29} fill="#fff" fontSize={18} fontWeight={500}>${Number(active.data.y).toFixed(1)}k</text>
        <rect x={87} y={13} width={49} height={20} rx={2} fill="#00c896" fillOpacity={0.16} />
        <text x={91} y={27} fill="#00c896" fontSize={10}>12.5% ↗</text>
        <text x={16} y={49} fill="#aeb9e1" fontSize={11}>{date}</text>
      </g>
    </g>
  );
};

export const Line = () => {
  const id = useId().replace(/:/g, "");
  return (
    <div className="h-[476px] w-[1280px] min-w-0 bg-[#0b1533] mr-8">
      <ResponsiveLine
        data={customData}
        margin={{ top: 28, right: 30, bottom: 64, left: 70 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: 0, max: 250, stacked: false }}
        colors={(series) => colors[series.id as keyof typeof colors]}
        curve="catmullRom"
        lineWidth={1}
        enableArea
        areaOpacity={1}
        defs={Object.entries(colors).map(([name, color]) => ({
          id: `${id}-${name}`, type: "linearGradient",
          colors: [{ offset: 0, color, opacity: 0.19 }, { offset: 100, color, opacity: 0 }],
        }))}
        fill={Object.keys(colors).map((name) => ({ match: { id: name }, id: `${id}-${name}` }))}
        enablePoints={false}
        enableGridX={false}
        enableGridY={false}
        axisTop={null}
        axisRight={null}
        axisLeft={{ tickValues: [0, 25, 50, 100, 150, 200, 250], tickSize: 0, tickPadding: 18, format: (value) => `${value}K` }}
        axisBottom={{ tickSize: 0, tickPadding: 28 }}
        theme={{
          text: { fontFamily: "Arial, sans-serif" },
          axis: {
            domain: { line: { stroke: "transparent" } },
            ticks: { text: { fill: "#aeb9d9", fontSize: 12 } },
          },
        }}
        layers={["areas", "axes", "lines", "mesh", Highlights]}
        useMesh
        enableCrosshair={false}
        tooltip={() => null}
        animate={false}
        role="img"
        ariaLabel="Revenue and expenses from January to December, in thousands of dollars"
      />
    </div>
  );
};
