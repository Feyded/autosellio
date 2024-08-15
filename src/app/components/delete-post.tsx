"use client";

import { deletePost } from "@/lib/action/post";

export default function DeletePost({ id }: { id: string }) {
  return (
    <button
      className="bg-red-500 text-white hover:bg-red-700 p-2 rounded"
      onClick={() => {
        deletePost(id);
      }}
    >
      Delete
    </button>
  );
}
