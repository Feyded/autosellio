import prisma from "@/lib/db";
import React from "react";
import PostCard from "./post-card";

export default async function Feed() {
  const posts = await prisma.post.findMany({
    include: {
      user: true,
      likes: {
        select: {
          userId: true,
        },
      },
    },    
    orderBy: {
      createdAt: "desc",
    },
  });
  
  return (
    <div className="flex flex-col gap-2">
      {posts.length ? (
        posts.map((post) => <PostCard key={post.id} posts={post} />)
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}
