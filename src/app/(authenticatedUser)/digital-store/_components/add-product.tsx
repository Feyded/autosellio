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
import { useFormState } from "react-dom";

export default function AddProduct() {
  const [state, dispatch] = useFormState(createProduct, null);
  
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
        <form action={dispatch} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Samsung S23"
              className="col-span-3"
              name="name"
            /> 
            {state?.errors?.name && <p className="text-red-500 text-xs italic col-start-2 col-span-3">
              {state.errors.name[0]}
            </p>}            
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              id="price"
              placeholder="100"
              className="col-span-3"
              type="number"
              name="price"
            />
            {state?.errors?.price && <p className="text-red-500 text-xs italic col-start-2 col-span-3">
              {state.errors.price[0]}
            </p>} 
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stock" className="text-right">
              Stocks
            </Label>
            <Input
              id="stock"
              type="number"
              placeholder="20"
              className="col-span-3"
              name="stock"
            />
            {state?.errors?.stock && <p className="text-red-500 text-xs italic col-start-2 col-span-3">
              {state.errors.stock[0]}
            </p>} 
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Input
              id="category"
              placeholder="Phone"
              className="col-span-3"
              name="category"
            />
            {state?.errors?.category && <p className="text-red-500 text-xs italic col-start-2 col-span-3">
              {state.errors.category[0]}
            </p>} 
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="sku" className="text-right">
              SKU
            </Label>
            <Input
              id="sku"
              placeholder="GW1032"
              name="sku"
              className="col-span-3"
            />
            {state?.errors?.sku && <p className="text-red-500 text-xs italic col-start-2 col-span-3">
              {state.errors.sku[0]}
            </p>} 
          </div>
          <DialogFooter>
            <SubmitButton pendingMessage="Adding" message="Add"/>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

