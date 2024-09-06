import { Data } from "@prisma/client";

export type DataProp = {
  title: string;
  name: keyof Data;
  unit?: string;
  type: "number" | "boolean";
};

export const dataProps: DataProp[] = [
  { title: "温度", name: "temperature", unit: "°C", type: "number" },
  { title: "湿度", name: "humidity", unit: "%", type: "number" },
  { title: "压强", name: "pressure", unit: "Pa", type: "number" },
  { title: "光照", name: "illuminance", unit: "%", type: "number" },
  { title: "土壤湿度", name: "soilMoisture", unit: "%", type: "number" },
  { title: "降雨指数", name: "precipitation", unit: "%", type: "number" },
  { title: "降雨中", name: "raining", type: "boolean" },
  { title: "烟雾报警", name: "smoke", type: "boolean" },
];
