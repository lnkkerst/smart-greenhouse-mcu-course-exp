"use client";

import { updateClientNotes } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { MdEdit, MdCheck } from "react-icons/md";

export default function TableNotesCell({
  id,
  notes,
}: {
  id: string;
  notes: string | null;
  onUpdateNotes?: (notes: string) => void;
}) {
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState("");

  const { pending } = useFormStatus();

  function handleEdit() {
    setEditText(notes || "");
    setEditing(true);
  }

  if (editing) {
    return (
      <td>
        <form
          action={async (formData: FormData) => {
            await updateClientNotes(formData);
            router.refresh();
            setTimeout(() => {
              setEditing(false);
            }, 200);
          }}
        >
          <input type="hidden" name="id" value={id} />
          <div className="flex flex-row gap-1 items-center">
            <input
              type="text"
              className="input input-xs inline w-20 bg-base-300"
              name="notes"
              value={editText}
              onChange={e => setEditText(e.target.value)}
            />

            <button
              className="btn btn-sm btn-ghost btn-circle"
              type="submit"
              disabled={pending}
            >
              {pending ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <MdCheck />
              )}
            </button>
          </div>
        </form>
      </td>
    );
  } else {
    return (
      <td>
        <div className="flex flex-row gap-1 items-center">
          <span>{notes}</span>
          <button
            className="btn btn-sm btn-ghost btn-circle"
            onClick={() => void handleEdit()}
          >
            <MdEdit />
          </button>
        </div>
      </td>
    );
  }
}
