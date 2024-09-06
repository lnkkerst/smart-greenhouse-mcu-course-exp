import { ClientWithData } from "@/schemas";
import { dataProps } from "@/utils";
import clsx from "clsx";
import { isNil } from "lodash-es";
import Link from "next/link";

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
      {dataProps.map(({ name }) => {
        let value = data?.[name];
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
            key={name}
          >
            {value}
          </td>
        );
      })}
      <td>
        <Link
          href={`/clients/${client.id}`}
          prefetch={false}
          className="btn btn-sm btn-ghost"
        >
          查看
        </Link>
      </td>
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
          {dataProps.map(({ title, name, unit }) => (
            <th key={name}>{`${title}` + (unit ? `(${unit})` : "")}</th>
          ))}
          <th>操作</th>
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
