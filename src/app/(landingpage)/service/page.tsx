import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default async function About() {
  return (
    <div>
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-[4rem] lg:px-[8rem]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="flex flex-col gap-[3rem] bg-gradient-to-tl from-emerald-300 from-0% via-indigo-700 via-43% to-purple-700 to-100% px-5 py-[7rem]">
      <DisplayTextCard />
      <div className="relative w-full lg:w-1/2 mx-auto">
        <Input
          type="text"
          placeholder="Search"
          className="w-full border bg-muted rounded-full pr-[4rem] pl-4 h-[4rem] focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <SearchIcon className="text-white p-2 rounded-full absolute bg-purple-600 right-2 top-1/2 -translate-y-1/2 w-12 h-12 text-muted-foreground" />
      </div>
      <FilterButtons />
    </div>
  );
}

function DisplayTextCard() {
  return (
    <div className="w-full md:w-[45rem] mx-auto">
      <h1 className="text-white font-bold text-4xl">
        Find the Right{" "}
        <span className="italic underline"> Freelance Service</span> on the
        Philippines Largest Talent Marketplace
      </h1>
    </div>
  );
}

function FilterButtons() {
  return (
    <div className="w-2/3 lg:w-1/3 mx-auto flex gap-2 flex-wrap justify-center">
      <Button className="rounded-full bg-white text-black hover:bg-purple-700 hover:text-white">
        Services
      </Button>
      <Button className="rounded-full bg-white text-black hover:bg-purple-700 hover:text-white">
        Courses
      </Button>
      <Button className="rounded-full bg-white text-black hover:bg-purple-700 hover:text-white">
        Webinars
      </Button>
      <Button className="rounded-full bg-white text-black hover:bg-purple-700 hover:text-white">
        Digital Goods
      </Button>
      <Button className="rounded-full bg-white text-black hover:bg-purple-700 hover:text-white">
        Physical Goods
      </Button>
      <Button className="rounded-full bg-white text-black hover:bg-purple-700 hover:text-white">
        Templates
      </Button>
      <Button className="rounded-full bg-white text-black hover:bg-purple-700 hover:text-white">
        Themes
      </Button>
    </div>
  );
}

function ProductCard() {
  return (
    <div className="rounded-3xl relative my-10">
      <div className="absolute top-3 left-3 bg-white text-purple-800 text-xs font-semibold px-2 py-1 rounded-full inline-block mb-2">
        Category
      </div>
      <div className="flex justify-center mb-4">
        <Image
          src="https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Product"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="p-[1rem]">
        <div className="flex items-center mb-4">
          <Avatar className=" w-9 h-9 border-2 border-purple-700">
            <AvatarImage src="" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="ml-2">
            <div className="text-sm font-bold">Jane Doe</div>
            <div className="flex items-center text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927C9.349 2.087 10.651 2.087 10.951 2.927L12.151 6.001L15.402 6.276C16.271 6.344 16.61 7.372 15.992 7.982L13.614 10.252L14.265 13.498C14.429 14.338 13.498 14.982 12.707 14.613L10.001 13.23L7.293 14.613C6.502 14.982 5.571 14.338 5.736 13.498L6.387 10.252L4.008 7.982C3.39 7.372 3.73 6.344 4.598 6.276L7.849 6.001L9.049 2.927Z" />
              </svg>
              <span className="ml-1">4.9</span>
            </div>
          </div>
        </div>
        <div className="text-lg font-bold mb-2">Product Name</div>
        <div className="text-sm text-gray-500 mb-4">
          Super Long Product Description By The User That Is Cutoff On With
          Automatically with...
        </div>
        <div className="flex gap-3">
          <Button className="flex-1 bg-purple-800 text-white py-2 rounded-lg">
            Buy Now
          </Button>
          <Button className=" bg-white text-purple-800 border border-purple-800 hover:bg-purple-800 hover:text-white py-2 rounded-lg">
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
}
