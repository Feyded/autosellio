"use client";
import BottomNavbar from "@/components/bottom-navbar";
import Sidebar from "@/components/sidebar";
import AnnouncementAndRequests from "./_components/announcement-and-requests";
import Navbar from "./_components/navbar";
import { usePathname } from "next/navigation";
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const containDashboard = pathname.includes("dashboard") || pathname.includes("/product-and-services") || pathname.includes("/courses-and-webinars") || pathname.includes("/job");
    return (
    <div>
      <Navbar />
      <div className="md:flex mx-auto justify-center">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div className={`p-5 w-full ${containDashboard && "lg:w-[50%]"}  `}>{children}</div>
        <div className="block md:hidden">
          <BottomNavbar />
        </div>
        {containDashboard && (        
          <div className="hidden bg-muted/40 xl:block">
          <AnnouncementAndRequests />
        </div>
        )}
      </div>
    </div>
  );
}
