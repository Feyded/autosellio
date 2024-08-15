"use server";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function createProduct(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return;

  const result = await prisma.product.create({
    data: {
      product: formData.get("name") as string,
      price: Number(formData.get("price")),
      stock: Number(formData.get("stock")),
      category: formData.get("category") as string,
      sku: formData.get("sku") as string,
      userId: user.id,
    },
  });

  revalidatePath("/digital-store");
}

export async function editProduct(formData: FormData) {
  try {
    const result = await prisma.product.update({
      where: {
        id: "clzut4jdn0003j9277rgj4j1z",
      },
      data: {
        product: formData.get("name") as string,
        price: Number(formData.get("price")),
        stock: Number(formData.get("stock")),
        category: formData.get("category") as string,
        sku: formData.get("sku") as string,
      },
    });

    revalidatePath("/digital-store");
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(id: string) {
  try {
    await prisma.product.delete({
      where: {
        id,
      },
    });
    revalidatePath("/digital-store");
  } catch (error) {
    console.log(error);
  }
}

 
export async function testProduct(prevState: any, formData: FormData) {
  // Transform FormData to a plain object
  const form = Object.fromEntries(formData.entries());

  // Define the schema
  const FormDataSchema = z.object({
    username: z.string().min(1, 'User is required.'),
    password: z.string().min(1, 'Password is required')
  });

  // Parse and validate the data safely
  const result = FormDataSchema.safeParse(form);
  console.log(result);
  if (!result.success) {
    return {
      errors: result.error
    }
  }

}




