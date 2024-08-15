"use client";
import {
  BriefcaseBusiness,
  Dumbbell,
  ShoppingBag,
  TvMinimalPlay,
  WifiHigh,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
  {
    href: "/dashboard",
    label: "Newsfeed",
    icon: <WifiHigh />,
  },
  {
    href: "/dashboard/product-and-services",
    label: "Products & Services",
    icon: <ShoppingBag />,
  },
  {
    href: "/dashboard/courses-and-webinars",
    label: "Courses & Webinars",
    icon: <TvMinimalPlay />,
  },

  {
    href: "/dashboard/job",
    label: "Jobs",
    icon: <BriefcaseBusiness />,
  },
  {
    href: "/dashboard/challenge",
    label: "Challenges",
    icon: <Dumbbell />,
  },
];

export default function BottomNavbar() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 p-2">
      <div className="flex h-full w-full gap-1 font-medium">
        <div className="flex gap-[0.625rem] mx-auto">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className={`${
                pathname === link.href
                  ? " text-white rounded-xl bg-purple-700"
                  : "bg-gray-200 rounded-lg"
              } inline-flex gap-2 items-center justify-center px-5`}
            >
              {link.icon}
              {pathname === link.href ? (
                <span className="text-sm textwhite ">
                  {link.label}
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
