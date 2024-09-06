"use client";
import { DataProp, dataProps } from "@/utils";
import { Data } from "@prisma/client";
import clsx from "clsx";
import ReactEcharts from "echarts-for-react";
import { isNil } from "lodash-es";

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
  const availableData = data.filter(item => !isNil(item[prop]));
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
      axisLabel: {
        hideOverlap: true,
      },
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
        smooth: true,
        sampling: "lttb",
        data: availableData.map(item => [item.updatedAt, item[prop]]),
        areaStyle: propType === "boolean" ? {} : undefined,
        showSymbol: false,
        emphasis: {
          focus: "series",
          itemStyle: {
            show: true,
          },
        },
      },
    ],
  };
  return <ReactEcharts option={option}></ReactEcharts>;
}

export default function Charts({ data }: ChartsProps) {
  return (
    <div
      className={clsx("grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4")}
    >
      {dataProps.map(({ name, title, type, unit }) => (
        <div className="card bg-base-100 pt-4 pl-4" key={name}>
          <LineChart
            data={data}
            title={`${title}` + (unit ? `(${unit})` : "")}
            prop={name}
            propType={type}
          ></LineChart>
        </div>
      ))}
    </div>
  );
}
