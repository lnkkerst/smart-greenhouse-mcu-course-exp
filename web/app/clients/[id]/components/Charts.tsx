"use client";
import { DataProp, dataProps } from "@/utils";
import { Data } from "@prisma/client";
import clsx from "clsx";
import ReactEcharts from "echarts-for-react";

export type ChartsProps = Readonly<{
  data: Data[];
}>;

export type LineChartProps = ChartsProps &
  Readonly<{
    title: string;
    prop: keyof Data;
    propType: DataProp["type"];
  }>;

export function LineChart({ data, title, prop, propType }: LineChartProps) {
  const availableData = data.filter(item => item[prop]);
  const option = {
    title: {
      text: title,
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "time",
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      ...(propType === "boolean"
        ? {
            min: 0,
            max: 1,
            interval: 1,
            axisTick: { alignWithLabel: true },
            axisLabel: {
              formatter: (val: number) => (val === 1 ? "是" : "否"),
            },
          }
        : {}),
    },
    series: [
      {
        type: "line",
        data: availableData.map(item => [item.updatedAt, item[prop]]),
        areaStyle: propType === "boolean" ? {} : undefined,
      },
    ],
  };
  return <ReactEcharts option={option}></ReactEcharts>;
}

export default function Charts({ data }: ChartsProps) {
  return (
    <div
      className={clsx("grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4")}
    >
      {dataProps.map(({ name, title, type }) => (
        <div className="card bg-base-100" key={name}>
          <div className="card-body">
            <LineChart
              data={data}
              title={title}
              prop={name}
              propType={type}
            ></LineChart>
          </div>
        </div>
      ))}
    </div>
  );
}
