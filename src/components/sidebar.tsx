"use client";
import {
  HomeIcon,
  ShoppingCart,
  Heart,
  User,
  MessageCircle,
  Link2,
  CircleDollarSign,
  MessageSquareMore,
  MonitorPlay,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/digital-store",
    label: "Digital Store",
    icon: <ShoppingCart />,
  },
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: <HomeIcon />,
  },
  {
    href: "/testimonials",
    label: "Testimonials",
    icon: <MessageCircle />,
  },
  {
    href: "/community",
    label: "Community",
    icon: <Heart />,
  },
  {
    href: "/profile-builder",
    label: "Profile Builder",
    icon: <User />,
  },

  {
    href: "/webinars",
    label: "Webinars",
    icon: <MonitorPlay />,
  },
  {
    href: "/automate",
    label: "Automate",
    icon: <MessageSquareMore />,
  },
  {
    href: "/course",
    label: "Course",
    icon: <GraduationCap />,
  },
  {
    href: "/payment-links",
    label: "Payment Links",
    icon: <Link2 />,
  },
  {
    href: "/refer-and-earn",
    label: "Refer & Earn",
    icon: <CircleDollarSign />,
  },
  {
    href: "/ask-autosell-ai",
    label: "Ask Autosell AI",
    icon: <Sparkles />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();  
  return (
    <nav className="flex flex-col gap-2 px-4 py-4 text-sm font-medium md:px-6">
      {navLinks.map((link) => (
        <Link
          href={link.href}
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-purple-700 hover:bg-purple-200 hover:bg-muted ${
            pathname === link.href || pathname.includes(link.href )? "text-purple-700 bg-purple-200" : ""
          }`}
          prefetch={false}
          key={link.label}
        >
          {link?.icon}
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
