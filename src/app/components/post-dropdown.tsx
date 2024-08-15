"use client";
import { useState } from "react";
import Image from "next/image";
import DeletePost from "./delete-post";
export default function PostDropdown({postid}: {postid: string}) {
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
        className={`absolute right-0 top-12 bg-white shadow-md rounded-md ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col p-2">
          <DeletePost id={postid} />
        </ul>
      </div>
    </div>
  );
}
