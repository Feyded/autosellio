"use client";
import { createProduct } from "@/lib/action/product";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "./submit-button";

export default function AddProduct() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-purple-700 text-white px-[10px] py-[10px] rounded-[30px]">
          Add Products
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
        </DialogHeader>
        <form action={createProduct} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              required
              id="name"
              placeholder="Samsung S23"
              className="col-span-3"
              name="name"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              required
              id="price"
              placeholder="100"
              className="col-span-3"
              type="number"
              name="price"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stock" className="text-right">
              Stocks
            </Label>
            <Input
              required
              id="stock"
              placeholder="20"
              className="col-span-3"
              name="stock"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Input
              required
              id="category"
              placeholder="Phone"
              className="col-span-3"
              name="category"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="sku" className="text-right">
              SKU
            </Label>
            <Input
              required
              id="sku"
              placeholder="GW1032"
              name="sku"
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <SubmitButton pendingMessage="Adding" message="Add"/>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

