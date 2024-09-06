import { db } from "@/prisma";
import Charts from "./components/Charts";

export type PageProps = Readonly<{
  params: {
    id: string;
  };
}>;

export default async function Page({ params }: PageProps) {
  const client = await db.client.findUnique({
    where: {
      id: params.id,
    },
    include: {
      data: {
        orderBy: {
          updatedAt: "desc",
        },
      },
    },
  });

  if (!client) {
    return <div>{`没有找到 ID 为 ${params.id} 的设备。`}</div>;
  }

  return (
    <div>
      <Charts data={client.data}></Charts>
    </div>
  );
}
