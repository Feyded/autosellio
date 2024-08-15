"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, SquarePen } from "lucide-react"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DeleteProductButton from "./delete-product-button";
import EditProduct from "./edit-product";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ProductsColumnProps = {
  id: string,
  product: string;
  price: number;
  stock: number;
  category: string;
  sku: string;
};

export const columns: ColumnDef<ProductsColumnProps>[] = [
  {
    accessorKey: "product",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "stock",
    header: "Stocks",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "sku",
    header: "Sku",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <EditProduct product={product}/>
            <DropdownMenuSeparator/>
          <DeleteProductButton productId={product.id} />
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
];



