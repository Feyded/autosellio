import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      <Skeleton className="h-[64px] w-[731px] my-5 rounded-full" />
      <div className="flex space-x-2 mb-4">
        <Skeleton className="h-[40px] w-[151px] rounded-xl" />
        <Skeleton className="h-[40px] w-[151px] rounded-xl" />
        <Skeleton className="h-[40px] w-[151px] rounded-xl" />
      </div>

      <div className=" md:flex rounded-md overflow-hidden mb-4">
        <Skeleton className="h-[212px] w-[365px] rounded-xl" />
      <div className="p-4 flex flex-col flex-1 justify-between">
        {/* <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center mb-2">
              <img
                src={course.authorImage}
                alt={course.authorName}
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
        </div> */}
        {/* <div className="flex gap-1 items-center">
          <Button className="flex-1 px-4 py-2 bg-purple-700 text-white rounded-md">
            Buy Now
          </Button>
          <Button className=" bg-white text-purple-800 border border-purple-800 hover:bg-purple-800 hover:text-white py-2 rounded-lg">
            <Heart />
          </Button>
          <Button className=" bg-white text-purple-800 border border-purple-800 hover:bg-purple-800 hover:text-white py-2 rounded-lg">
            <ShoppingCart />
          </Button>
        </div> */}
      </div>
    </div>
    </div>
  );
}
