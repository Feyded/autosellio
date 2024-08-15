import createComment from "@/lib/action/comment";
import { likePost, unlikePost } from "@/lib/action/like";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, MessageCircleIcon, Send, ThumbsUp } from "lucide-react";

export default function PostInteraction() {
  return (
    <div className="flex items-center gap-2">
      {/* {like != null ? (
            <form action={unlikePost}>
              <input
                className="hidden"
                type="text"
                name="likeId"
                value={like.id}
                readOnly
              />
              <Button type="submit" variant="ghost" size="icon">
                    <ThumbsUp
                      className={` text-purple-700 fill-purple-700 w-5 h-5`}
                    />
                    <span className="sr-only">Unlike</span>
                  </Button>
              <Button
                className="bg-gray-200"
                type="submit"
                variant="ghost"
                size="icon"
              >
                <div className="flex gap-1">
                  <ThumbsUp className="text-purple-700 w-5 h-5" />
                  <small className="font-bold">
                    {posts.likes &&
                      posts.likes.length > 0 &&
                      posts.likes.length}
                  </small>
                </div>
              </Button>
            </form>
          ) : ( */}
      <form action={likePost}>
        <Button
          className="bg-gray-200"
          type="submit"
          variant="ghost"
          size="icon"
        >
          <ThumbsUp className="w-5 h-5" />
          <span className="sr-only">Like</span>
        </Button>
      </form>
      <Button
        className="bg-gray-200 px-[1.5rem]"
        type="submit"
        variant="ghost"
        size="icon"
      >
        <div className="flex gap-1">
          <MessageCircleIcon className="text-purple-700 w-5 h-5" />
          <small className="font-bold">
            {/* {posts.comments &&
                  posts.comments.length > 0 &&
                  posts.comments.length} */}
            18
          </small>
        </div>
      </Button>
      <form className="flex-1" action={createComment}>
        <div className="flex gap-2">
          <Input
            className="border-purple-700"
            type="text"
            name="comment"
            placeholder="Write a comment..."
          />
          <Button
            className="bg-gray-200"
            type="submit"
            variant="ghost"
            size="icon"
          >
            <Send className="text-purple-700 w-5 h-5" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </form>
      <Button className="bg-gray-200" variant="ghost" size="icon">
        <Link className="text-purple-700 w-5 h-5" />
        <span className="sr-only">attach file</span>
      </Button>
    </div>
  );
}
