import { ClientWithData } from "@/schemas";
import clsx from "clsx";
import { isNil } from "lodash-es";

export type TableProps = Readonly<{
  clients: ClientWithData[];
}>;

type TableRowProps = Readonly<{
  client: ClientWithData;
}>;

function TableRow({ client }: TableRowProps) {
  const {
    data: [data],
  } = client;
  return (
    <tr className="hover">
      <td>{client.id}</td>
      <td>{client.lastUploaded.toLocaleString()}</td>
      {(
        [
          "temperature",
          "humidity",
          "pressure",
          "illuminance",
          "soilMoisture",
          "precipitation",
          "raining",
          "smoke",
        ] as Array<keyof typeof data>
      ).map(prop => {
        let value = data?.[prop];
        if (isNil(value)) {
          value = "无";
        }
        if (value instanceof Date) {
          value = value.toLocaleString();
        }
        if (typeof value === "boolean") {
          value = value ? "是" : "否";
        }
        if (typeof value === "number") {
          value = value.toFixed(2);
        }
        return (
          <td
            className={clsx(value === "无" && "text-gray-400 italic")}
            key={prop}
          >
            {value}
          </td>
        );
      })}
    </tr>
  );
}

export default async function Table({ clients }: TableProps) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>最后更新</th>
          <th>温度(°C)</th>
          <th>湿度(%)</th>
          <th>压强(Pa)</th>
          <th>光照(%)</th>
          <th>土壤湿度(%)</th>
          <th>降雨指数(%)</th>
          <th>降雨中</th>
          <th>烟雾报警</th>
        </tr>
      </thead>
      <tbody>
        {clients.map(client => (
          <TableRow key={client.id} client={client}></TableRow>
        ))}
      </tbody>
    </table>
  );
}
