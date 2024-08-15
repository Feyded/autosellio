import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CarouselImage } from "./carousel-image";
export default function AnnouncementAndRequests() {
  return (
      <div className="flex h-full max-h-screen flex-col gap-4 p-4 md:p-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-purple-800">
            Announcements
          </h3>
          <CarouselImage />
        </div>
        <section className="mb-6">
          <h2 className="font-bold text-purple-800">Friend Request</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className=" border-2 border-purple-700 h-12 w-12">
                <AvatarImage src="" />
                <AvatarFallback>DZ</AvatarFallback>
              </Avatar>
              <div>
                <span className="font-semibold">Jane Doe</span>
                <div className="flex space-x-2 mt-2">
                  <button className="bg-purple-700 text-white py-1 px-3 rounded-full">
                    Accept
                  </button>
                  <button className="bg-gray-200 py-1 px-3 rounded-full">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
