"use client";
import React, { FormEvent, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Comment } from "@/types/types";
import { deleteComment, editComment } from "@/lib/action/comment";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Comment as CommentType } from "@prisma/client";

type CommentWithUser = Comment & { user: User };

export default function CommentList({ comments, postId }: {comments: CommentWithUser[], postId: string}) {
  const [isEdit, setIsEdit] = useState(false);
  const [commentText, setCommentText] = useState("comment.comment");

  console.log(comments);
  
  const handleSubmit = () => {
    editComment("comment.id", commentText);
  };
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} className="flex items-start space-x-4">      
        <Avatar className="w-8 h-8 border">
          <AvatarImage src={"/images/system/noAvatar.png"} />
          <AvatarFallback>DZ</AvatarFallback>
        </Avatar>
        <div className="flex-1 ">
          <div className="bg-gray-200 w-fit rounded-xl px-2 py-1">
            <p className="font-bold text-sm">{`${comment.user.firstName} ${comment.user.lastName}`}</p>
            <p className="text-sm">{comment.comment}</p>
          </div>
            <small className="text-xs text-muted-foreground">
              {comment.createdAt.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </small>
        </div>
      </div>
      ))}
    
    </div>
  );
}
