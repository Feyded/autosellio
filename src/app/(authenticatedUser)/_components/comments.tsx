import prisma from "@/lib/db";
import CommentList from "./comment-list";

export default async function Comments({ postId }: { postId: string }) {
  const comments = await prisma.comment.findMany({
    where: {
      postId: postId,
    },
    include: {
      user: true,
    },
  });
  return (
    <div>
      <CommentList comments={comments} postId={postId} />
    </div>
  );
}
