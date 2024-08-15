import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";
import AddProduct from "./_components/add-product";
import prisma from "@/lib/db";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if(!user) return;
  
  const products = await prisma.product.findMany(
    {
      where: {
        userId: user.id
      },
    select: {
      id: true,
      product: true,
      price: true,
      stock: true,
      category: true,
      sku: true,
    }
  });

  return (
      <div className="bg-transparent shadow-lg rounded-lg p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-4">Products</h1>
          <div className="flex gap-[10px] text-xs">
            <AddProduct />
            <button className="bg-gray-100 text-black px-[10px] py-[10px] rounded-[30px]">
              Add Category
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-[5px] bg-purple-700 rounded-3xl p-[3px]">
            <button className="bg-white text-black px-[20px] py-[2px] rounded-3xl">
              All
            </button>
            <button className=" text-white px-[20px] py-[2px] rounded-3xl hover:bg-white hover:text-black">
              Active
            </button>
            <button className=" text-white px-[20px] py-[2px] rounded-3xl hover:bg-white hover:text-black">
              Inactive
            </button>
          </div>
          {/* <div className="relative mt-5">
            <Input
              type="text"
              placeholder="Search"
              className="w-full border bg-muted rounded-full pr-[3rem] pl-4 h-[2rem] focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <SearchIcon className="text-white p-1 rounded-full absolute bg-purple-600 right-2 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
          </div> */}
        </div>
        <div>
          <DataTable columns={columns} data={products} />
        </div>
        {/* <div className="flex justify-center mt-4 space-x-2">
          <button className="px-4 py-2 rounded bg-gray-300">{"<<"}</button>
          <button className="px-4 py-2 rounded bg-purple-600 text-white">
            1
          </button>
          <button className="px-4 py-2 rounded bg-gray-300">{">>"}</button>
        </div> */}
      </div>
  );
}
