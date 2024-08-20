"use client";
import IconMenu from "@/components/icon-menu";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { SquarePen } from "lucide-react";
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
import { editProduct } from "@/lib/action/product";
import SubmitButton from "./submit-button";

type EditProductProps = {
  product: {
    id: string;
    product: string;
    price: number;
    stock: number;
    category: string;
    sku: string;
  };
};

export default function EditProduct({ product }: EditProductProps) {
  return (
    <Dialog>
      <DropdownMenuItem className="group flex w-full items-center justify-between  text-left p-0 text-sm font-base text-neutral-500 "></DropdownMenuItem>
      <DialogTrigger asChild>
        <button className="w-full justify-start flex rounded-md p-2 transition-all duration-75 hover:bg-neutral-100">
          <IconMenu text="Edit" icon={<SquarePen className="h-4 w-4" />} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit product</DialogTitle>
          <DialogDescription>
            Make changes to your product here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form action={editProduct.bind(null, product.id)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Product
            </Label>
            <Input
              id="name"
              name="name"
              defaultValue={product.product}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input id="price" name="price" defaultValue={product.price} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stocks" className="text-right">
              Stocks
            </Label>
            <Input
              id="stocks"
              name="stocks"
              defaultValue={product.stock}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Input
              id="category"
              name="category"
              defaultValue={product.category}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="sku" className="text-right">
              Sku
            </Label>
            <Input id="sku" name="sku" defaultValue={product.sku} className="col-span-3" />
          </div>
        <DialogFooter>
        <SubmitButton pendingMessage="Saving" message="Save Changes"/>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}


