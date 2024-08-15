import IconMenu from "@/components/icon-menu";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { deleteProduct } from "@/lib/action/product";
import { Trash2 } from "lucide-react";

export default function DeleteProductButton({ productId }: { productId: string }) {
    return (
      <DropdownMenuItem className="group flex w-full items-center justify-between  text-left p-0 text-sm font-base text-neutral-500 ">
      <button
        onClick={() => deleteProduct(productId)}
        className="w-full justify-start flex text-red-500 rounded-md p-2 transition-all duration-75 hover:bg-neutral-100"
      >
        <IconMenu
          text="Delete"
          icon={<Trash2 className="h-4 w-4" />}
        />
      </button>
    </DropdownMenuItem>
    )
}