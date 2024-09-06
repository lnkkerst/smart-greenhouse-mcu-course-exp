import { ClientSchema, DataSchema } from "@/prisma/generated/zod";
import { z } from "zod";

export const ClientWithDataSchema = ClientSchema.extend({
  data: DataSchema.array(),
});

export type ClientWithData = z.infer<typeof ClientWithDataSchema>;
