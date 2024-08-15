"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


export async function likePost(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if(!user) return;

  const postId = formData.get("postId") as string;

  await prisma.like.create({
    data: {
      userId: user?.id,
      postId,
    },
  });
  revalidatePath("/");
}

export async function unlikePost(formData: FormData) {
  const likeId = formData.get("likeId") as string;

  await prisma.like.delete({
    where: {
      id: likeId,
    },
  });
  revalidatePath("/");
}
