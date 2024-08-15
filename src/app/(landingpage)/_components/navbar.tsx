"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oWtZiVCXnIp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React, { Suspense } from "react";
import Link from "next/link";
import { LoginLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
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
  LogOutIcon,
  SettingsIcon,
  UserIcon,
  Menu,
  Dumbbell,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const homeLinks = [
  {
    href: "/pricing",
    label: "Pricing",
    icon: <Dumbbell />,
  },
  {
    href: "/about",
    label: "About",
    icon: <Dumbbell />,
  },
  {
    href: "/service",
    label: "Services",
    icon: <Dumbbell />,
  },
  {
    href: "/become-a-seller",
    label: "Become a Seller",
    icon: <Dumbbell />,
  },
];

export default function Navbar() {
  const { user, getUser } = useKindeBrowserClient();
  const alsoUser = getUser();
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-purple-700 flex justify-between lg:justify-center items-center gap-[7.5rem] px-4 py-3 shadow-sm">
      <div className="flex gap-3">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image
            className="hidden lg:block"
            src={"/images/system/autosell-logo.png"}
            alt="logo"
            width={150}
            height={150}
          />
          <Image
            className="lg:hidden"
            src={"/images/system/autosell-icon.svg"}
            alt="logo"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <nav className="hidden lg:flex items-center gap-[1rem]">
        {homeLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`hover:text-purple-700 ${
              link.href === pathname ? "text-purple-700" : ""
            } `}
          >
            {link.label}
          </Link>
        ))}
      </nav>
        
      
      {user ? (
        <div className="flex items-center gap-2 md:gap-0">
          <div className="md:hidden md:mr-2">
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
              <LogoutLink>
              <DropdownMenuItem>
                <div className="flex items-center gap-2">
                  <LogOutIcon className="text-purple-700 w-4 h-4" />
                  <span>Logout</span>
                </div>
              </DropdownMenuItem>
              </LogoutLink>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="flex gap-[1.25rem]">
          <LoginLink>
            <Button
              className="border-purple-700 text-purple-700 font-bold hover:bg-purple-700 hover:text-white px-[2rem] rounded-full"
              variant="outline"
            >
              Log In
            </Button>
          </LoginLink>
          <Button
            className="bg-purple-700 text-white font-bold hover:bg-purple-900 hover:text-white rounded-full px-[2rem]"
            variant="outline"
          >
            Try Now For Free
          </Button>
        </div>
      )}
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
          {homeLinks.map((link) => (
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
