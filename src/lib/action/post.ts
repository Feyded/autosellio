"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function createPost(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) return;
  try {
    const postImage = formData.get("postImage") as File;
    const content = formData.get("content") as string;

    let imagePath = null;
    if (postImage.size > 0) {
      await fs.mkdir("public/images/posts", { recursive: true });
      imagePath = `images/posts/${crypto.randomUUID()}-${postImage.name}`;
      await fs.writeFile(
        `public/${imagePath}`,
        Buffer.from(await postImage.arrayBuffer())
      );
    }

    await prisma.post.create({
      data: {
        content,
        postImage: imagePath,
        userId: user?.id,
      },
    });

    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}

export async function deletePost(id: string) {
  const result = await prisma.post.delete({
    where: {
      id,
    },
  });

  if (result.postImage != null) {
    await fs.unlink(`public/${result.postImage}`); // delete result.imageUrl
  }
  revalidatePath("/");
}

// export async function editPost(formData: FormData) {
//   const id = formData.get("postid") as string;
//   const image = formData.get("imageUrl") as File;
//   const postcontent = formData.get("content") as string;

//   const post = await prisma.post.findUnique({
//     where: {
//       id,
//     },
//   });

//   let imageUrl = post?.imageUrl;
//   if (image != null && image.size > 0) {
//     if (post?.imageUrl) {
//       await fs.unlink(`public/${post?.imageUrl}`);
//     }

//     imageUrl = `images/posts/${crypto.randomUUID()}-${image.name}`;
//     await fs.writeFile(
//       `public/${imageUrl}`,
//       Buffer.from(await image.arrayBuffer())
//     );
//   }

//   let content = post?.content;
//   if (postcontent.length > 0) {
//     content = postcontent;
//   }

//   await prisma.post.update({
//     where: {
//       id,
//     },
//     data: {
//       content,
//       imageUrl,
//     },
//   });

//   revalidatePath("/");
//   redirect("/");
// }
