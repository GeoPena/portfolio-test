// src/app/layout.js
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio",
  description: "Personal portfolio of Geovanny Peña",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${roboto.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-300 min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <footer className="border-t text-sm text-gray-500 px-[144px] pt-[40px] pb-[64px]">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <nav className="flex gap-6">
                  <a href="/" className="hover:underline">Home</a>
                  <a href="/about" className="hover:underline">About</a>
                  <a href="/projects" className="hover:underline">Projects</a>
                  <a href="/uses" className="hover:underline">Uses</a>
                </nav>
                <p className="text-xs">© 2025 Geovanny Peña. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}