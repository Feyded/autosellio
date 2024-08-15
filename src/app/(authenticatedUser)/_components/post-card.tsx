import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ThumbsUp, MessageCircleIcon, Mail, Send, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Post } from "@/types/types";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import createComment from "@/lib/action/comment";
import Comments from "./comments";
import { likePost, unlikePost } from "@/lib/action/like";
import prisma from "@/lib/db";
import PostInfo from "./post-info";
import PostInteraction from "./post-interaction";

type PostCardProps = {
  posts: Post;
};

export default async function PostCard({ posts }: PostCardProps) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="flex flex-col gap-5 w-full p-4 border-2 border-gray-300 mx-auto bg-background rounded-3xl shadow-lg overflow-hidden">
      <div className="flex items-center space-x-4">
        <Avatar className="border-2 border-purple-700 w-10 h-10 ">
          <AvatarImage src={"/images/system/noAvatar.png"} />
          <AvatarFallback>DZ</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <p className="font-medium">
            {posts.user?.firstName + " " + posts.user?.lastName}
          </p>
          <small className="text-sm text-muted-foreground">
            {posts.createdAt.toLocaleTimeString([], {
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </small>
        </div>
        {posts.user?.id === user?.id && <PostInfo postId={posts.id} />}
      </div>
      <div>
        <p className="text-2xl">{posts.content}</p>
        {/* <p className="text-muted-foreground mt-2">{posts.content}</p> */}
      </div>
      {posts.postImage && (
        <Image
          src={`/${posts.postImage}`}
          width={800}
          height={450}
          alt="Post Image"
          className="rounded-2xl object-cover w-full h-[300px] md:h-[400px]"
        />
      )}
      <PostInteraction />
      <Comments postId={posts.id} />
    </div>
  );
}
