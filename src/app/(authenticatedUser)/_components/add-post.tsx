"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { GalleryHorizontal, Shell, Video, FileImage } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createPost } from "@/lib/action/post";
export default function AddPost() {
  const { user, getUser } = useKindeBrowserClient();
  const alsoUser = getUser();
  
  if (!user) return;
  
  return (
    <div className="p-[1.25rem]">
      <div className="w-full mb-4">
        <form action={createPost} className="flex items-center mb-4">
          <div className="relative">
            <Avatar className=" border-2 border-purple-700 h-12 w-12">
              <AvatarImage src={""} />
              <AvatarFallback>{`${
                user.given_name && user.given_name[0].toUpperCase()
              } ${
                user.family_name && user.family_name[0].toUpperCase()
              } `}</AvatarFallback>
            </Avatar>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <div className="flex-1 ml-4 px-4 py-2 rounded-lg border border-purple-700 text-gray-500 bg-gray-200 hover:bg-gray-100 hover:cursor-pointer">
                Whats on your mind?
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create A Post</DialogTitle>
                <DialogDescription>Whats on your mind?</DialogDescription>
              </DialogHeader>
              <form className="grid gap-4 py-4" action={createPost}>
                <div className="grid grid-cols items-center gap-4">
                  <Label htmlFor="name">Post</Label>
                  <Input id="name" className="col-span-3" name="content" />
                </div>
                <div className="grid grid-cols items-center gap-4">
                  <Label htmlFor="picture">Picture</Label>
                  <Input id="picture" name="postImage" type="file" />
                </div>
                <DialogFooter>
                  <Button type="submit">Post</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </form>
      </div>
      <div className="flex justify-center space-x-4">
        <Button className="flex gap-1 items-center bg-gray-200 text-gray-700 hover:bg-gray-300">
          <Video />
          <p className="hidden sm:block"> Live Stream</p>
        </Button>
        <Button className="flex gap-1 items-center bg-gray-200 text-gray-700 hover:bg-gray-300">
          <FileImage/>
          <p className="hidden sm:block">Media</p>
        </Button>
        <Button className="flex gap-1 items-center bg-gray-200 text-gray-700 hover:bg-gray-300">
          <GalleryHorizontal />
          <p className="hidden sm:block"> Carousel</p>
        </Button>
        <Button className="flex gap-1 items-center bg-gray-200 text-gray-700 hover:bg-gray-300">
          <Shell />
          <p className="hidden sm:block">Story</p>
        </Button>
      </div>
    </div>
  );
}
