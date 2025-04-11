"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="flex justify-between items-center px-6 py-3 mt-4">
      {/* Centered navigation */}
      <nav className="border text-sm text-gray-500 px-3 py-2 rounded-full w-fit mx-auto">
        <div className="flex items-center gap-6">
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Projects", href: "/projects" },
            { label: "Uses", href: "/uses" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`hover:underline ${
                pathname === href ? "text-green-600 font-bold" : "text-black dark:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Theme toggle button aligned to the right */}
      {mounted && (
        <button
          className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      )}
    </header>
  );
}