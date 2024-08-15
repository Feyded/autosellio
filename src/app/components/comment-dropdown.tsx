"use client";
import { useState } from "react";
import { deleteComment } from "@/lib/action/comment";
export default function CommentDropdown({ commentid }: { commentid: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex items-center justify-center w-7 h-7  text-white rounded-full focus:outline-none"
      >
        <div className="flex items-center justify-center h-screen bg-background">
          <div className="flex items-center space-x-1">
            <span className="block w-1 h-1 bg-black rounded-full"></span>
            <span className="block w-1 h-1 bg-black rounded-full"></span>
            <span className="block w-1 h-1 bg-black rounded-full"></span>
          </div>
        </div>
      </button>

      <div
        className={`absolute bg-white shadow-md rounded-md ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <button
      className="bg-red-500 hover:bg-red-700 p-1 rounded"
      onClick={() => deleteComment(commentid)}
    >
      Delete
    </button>
      </div>
    </div>
  );
}
