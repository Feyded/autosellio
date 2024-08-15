import { LogInIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-muted border-t">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Link href="#" prefetch={false}>
              <div className="flex items-center space-x-2">
                <LogInIcon className="w-6 h-6" />
                <span className="font-bold text-lg">Acme Inc</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Contact
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
              prefetch={false}
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
