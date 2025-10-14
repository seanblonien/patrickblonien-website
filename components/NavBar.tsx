"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteInfo } from "@/data/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200 shadow-sm">
      <nav className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-serif font-semibold text-zinc-900 hover:text-primary focus-ring rounded"
          >
            {siteInfo.name}
          </Link>

          <div className="flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus-ring ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}

