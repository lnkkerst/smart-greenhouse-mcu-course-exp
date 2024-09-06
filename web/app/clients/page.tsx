import { db } from "@/prisma";
import { RefreshInterval } from "@/components/RefreshInterval";
import Table from "./components/Table";
import clsx from "clsx";

export const revalidate = 10;

export default async function Home() {
  const clients = await db.client.findMany({
    orderBy: {
      lastUploaded: "desc",
    },
    include: {
      data: {
        orderBy: {
          updatedAt: "desc",
        },
        take: 1,
      },
    },
  });

  return (
    <div>
      <div className="text-lg font-semibold my-4">终端设备</div>
      <div className={clsx("card bg-base-100 card-bordered rounded-md")}>
        <div className="w-full overflow-auto">
          <Table clients={clients}></Table>
        </div>

        <div className={clsx("flex items-center justify-end", "px-8 py-4")}>
          <div className="text-gray-600 text-sm">{`共${clients.length}条数据`}</div>
        </div>
      </div>
      <RefreshInterval interval={10000}></RefreshInterval>
    </div>
  );
}
