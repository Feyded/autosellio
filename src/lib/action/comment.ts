"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function createComment(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) return;

  try {
    const comment = formData.get("comment") as string;
    await prisma.comment.create({
      data: {
        comment,
        userId: user.id,
        postId: "clzc3wicn000112gpvc2z478g",
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/");
}

export async function deleteComment(id: string) {
  const result = await prisma.comment.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
}

export async function editComment(id: string, comment: string) {
  await prisma.comment.update({
    where: {
      id,
    },
    data: {
      comment,
    },
  });
  revalidatePath("/");
}
