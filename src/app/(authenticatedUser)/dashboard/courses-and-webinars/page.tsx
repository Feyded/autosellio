import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";

const courses = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/27361560/pexels-photo-27361560/free-photo-of-rush-to-work.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "How To Create Your Online Course",
    authorName: "Jane Doe",
    authorImage: "/images/system/sillhoutte.png",
    description: "Step-by-step guide to creating your online course.",
    rating: 4.9,
    reviews: 327,
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/27260299/pexels-photo-27260299/free-photo-of-a-bouquet-of-flowers-on-a-table-with-a-card.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Coding Course For Beginners",
    authorName: "John Smith",
    authorImage: "/images/system/sillhoutte.png",
    description: "An introductory course to coding.",
    rating: 4.9,
    reviews: 727,
  },
  
];

export default function CourseAndWebinars() {
  return (
    <div>
      <SearchBar />
      <FilterButtons />
      <CourseList courses={courses} />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="relative my-5">
      <Input
        type="text"
        placeholder="Search"
        className="w-full border border-purple-700 bg-muted rounded-full pr-[4rem] pl-4 h-[4rem] focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <SearchIcon className="text-white p-2 rounded-full absolute bg-purple-600 right-2 top-1/2 -translate-y-1/2 w-12 h-12 text-muted-foreground" />
    </div>
  );
}


function FilterButtons() {
  return (
    <div className="flex space-x-2 mb-4">
      <button className="px-4 py-2 bg-gray-200 rounded-xl">Most Popular</button>
      <button className="px-4 py-2 bg-gray-200 rounded-xl">Lowest Price</button>
      <button className="px-4 py-2 bg-purple-600 text-white rounded-xl">
        Highest Ratings
      </button>
    </div>
  );
}


function CourseList({ courses }: any) {
  return (
    <div>
      {courses.map((course: { id: any }) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

function CourseCard({ course }: any) {
  return (
    <div className=" md:flex rounded-md overflow-hidden mb-4">
      <Image
        src={course.image}
        alt={course.title}
        width={500}
        height={176}
        className="w-full md:w-1/2 h-44 object-cover"
      />
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center mb-2">
              <Image
                src={course.authorImage}
                alt={course.authorName}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover mr-2"
              />
              <span>{course.authorName}</span>
            </div>
            <div className="text-yellow-500">
              ⭐ {course.rating} ({course.reviews})
            </div>
          </div>
          <div className="font-bold text-lg mb-2">{course.title}</div>
          <div className="text-gray-700 mb-2">{course.description}</div>
        </div>
        <div className="flex gap-2 items-center">
          <Button className="flex-1 px-4 py-2 bg-purple-700 text-white rounded-md">
            Buy Now
          </Button>
          <Button className=" bg-white text-purple-800 border border-purple-800 hover:bg-purple-800 hover:text-white py-2 rounded-lg">
            <Heart />
          </Button>
          <Button className=" bg-white text-purple-800 border border-purple-800 hover:bg-purple-800 hover:text-white py-2 rounded-lg">
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
}