import BottomNavbar from "@/components/bottom-navbar";
import Sidebar from "@/components/sidebar";
import AnnouncementAndRequests from "./_components/announcement-and-requests";
import Navbar from "./_components/navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar />
      <div className="md:flex mx-auto justify-center">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div className="p-5 w-full lg:w-[70%] xl:w-[90%]">{children}</div>
        <div className="block md:hidden">
          <BottomNavbar />
        </div>
        {/* <div className="hidden bg-muted/40 xl:block">
          <AnnouncementAndRequests />
        </div> */}
      </div>
    </div>
  );
}
