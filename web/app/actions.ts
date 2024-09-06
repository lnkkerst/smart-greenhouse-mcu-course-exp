"use server";

import { db } from "@/prisma";
import { z } from "zod";

const UpdateClientNotesSchema = z.object({
  id: z.string(),
  notes: z.string().max(100).nullable(),
});

export async function updateClientNotes(formData: FormData) {
  const res = UpdateClientNotesSchema.safeParse({
    id: formData.get("id"),
    notes: formData.get("notes"),
  });
  if (!res.success) {
    return {
      errors: res.error.flatten().fieldErrors,
    };
  }
  const {
    data: { id, notes },
  } = res;
  return await db.client.update({
    where: {
      id,
    },
    data: {
      notes,
    },
  });
}
