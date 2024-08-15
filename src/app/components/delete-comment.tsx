"use client";

import { deleteComment } from "@/lib/action/comment";

export default function DeleteComment({ id }: { id: string }) {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 p-1 rounded"
      onClick={() => deleteComment(id)}
    >
      Delete
    </button>
  );
}
