"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oWtZiVCXnIp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React from "react";
import Link from "next/link";
import { LoginLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  BellIcon,
  LogOutIcon,
  SearchIcon,
  SettingsIcon,
  UserIcon,
  MessageCircleMore,
  Settings,
  Menu,
  Dumbbell,
  ShoppingBag,
  TvMinimalPlay,
  WifiHigh,
  BriefcaseBusiness,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const dashboardLinks = [
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
    label: "Challenge",
    icon: <Dumbbell />,
  },
];

const digitalStoreLinks = [
  {
    href: "/digital-store",
    label: "Products",
    icon: <Dumbbell />,
  },
  {
    href: "/digital-store/service",
    label: "Services",
    icon: <Dumbbell />,
  },
  
];


export default function Navbar() {
  const { user, getUser } = useKindeBrowserClient();
  const alsoUser = getUser();
  const pathname = usePathname();
  let navLinks: any[] = [];

  if (pathname.includes("dashboard")) {
    navLinks = dashboardLinks;
  }

  if (pathname.includes("digital-store")) {
    navLinks = digitalStoreLinks;
  }

  return (
    <header className="bg-white border-b flex items-center justify-between px-4 py-3 shadow-sm md:px-6">
      <div className="flex gap-3">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image
            className="hidden md:block"
            src={"/images/system/autosell-logo.png"}
            alt="logo"
            width={180}
            height={180}
          />
          <Image
            className="md:hidden"
            src={"/images/system/autosell-icon.svg"}
            alt="logo"
            width={50}
            height={50}
          />
        </Link>
        {user && (
          <div className="relative max-w-[12rem]">
            <Input
              type="text"
              placeholder="Search"
              className="w-full border border-purple-700 bg-muted rounded-lg pr-11 pl-4 py-1 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <SearchIcon className="text-white p-1 rounded absolute bg-purple-700 right-3 top-1/2 -translate-y-1/2 w-7 h-7 text-muted-foreground" />
          </div>
        )}
      </div>
      <nav className="hidden xl:flex items-center gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`font-semibold text-xs px-4 py-2 rounded-xl hover:bg-purple-700 hover:text-white ${
              pathname === link.href
                ? "bg-purple-700 text-white "
                : "text-purple-700 bg-gray-200  "
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-2 md:gap-0">
        <div className="hidden md:block">
          <Button variant="ghost" size="icon" className="rounded-full">
            <BellIcon className="text-purple-700 w-5 h-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <MessageCircleMore className="text-purple-700 w-5 h-5" />
            <span className="sr-only">Messages</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full mr-2">
            <Settings className="text-purple-700 w-5 h-5" />
            <span className="sr-only">Settings</span>
          </Button>
        </div>
        <div className="xl:hidden md:mr-2">
          <DropdownMenuNav currentPathName={pathname} />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className=" w-9 h-9  border-2 border-purple-700">
              <AvatarImage src={user?.picture || ""} />
              <AvatarFallback>{`${
                user?.given_name ? user?.given_name[0].toUpperCase() : "P"
              } ${
                user?.family_name && user?.family_name[0].toUpperCase()
              } `}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>
              <Link
                href="#"
                className=" flex items-center gap-2 "
                prefetch={false}
              >
                <UserIcon className="text-purple-700 w-4 h-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href="#"
                className="flex items-center gap-2"
                prefetch={false}
              >
                <SettingsIcon className="text-purple-700 w-4 h-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogoutLink className="flex items-center gap-2">
                <LogOutIcon className="text-purple-700 w-4 h-4" />
                <span>Logout</span>
              </LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export function DropdownMenuNav({
  currentPathName,
}: {
  currentPathName: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="border-purple-700" variant="outline" size="icon">
          <Menu className="text-purple-700" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Page Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {dashboardLinks.map((link) => (
            <Link href={link.href} key={link.label}>
              <DropdownMenuItem
                className={`${
                  currentPathName === link.href && "bg-purple-700 text-white"
                }`}
              >
                <div className="flex gap-2 ">
                  {link?.icon}
                  <span>{link.label}</span>
                </div>
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
