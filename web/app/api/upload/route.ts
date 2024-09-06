import { NextRequest, NextResponse } from "next/server";
import { db } from "@/prisma";
import { DataSchema } from "@/prisma/generated/zod";
import { camelCase } from "lodash-es";

const FieldsSchema = DataSchema.omit({
  id: true,
  clientId: true,
  updatedAt: true,
  createdAt: true,
}).partial();

export async function POST(request: NextRequest) {
  const text = await request.text();
  const [id, rawData] = text.split("\n");
  let dbClient = await db.client.findUnique({ where: { id } });
  if (!dbClient) {
    dbClient = await db.client.create({
      data: { id },
    });
  }
  const fields = FieldsSchema.parse(
    Object.fromEntries(
      rawData
        .trim()
        .split(/\s+/)
        .map(field => {
          const [k, v] = field.trim().split(":");
          return [camelCase(k), JSON.parse(v)];
        }),
    ),
  );
  const [dbData] = await db.$transaction([
    db.data.create({
      data: {
        ...fields,
        clientId: dbClient.id,
      },
    }),
    db.client.update({
      where: {
        id: dbClient.id,
      },
      data: {
        lastUploaded: new Date(),
      },
    }),
  ]);
  return NextResponse.json(dbData);
}
