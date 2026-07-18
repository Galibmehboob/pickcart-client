import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
import Providers from "@/providers/Providers";


export const metadata: Metadata = {
  title: {
    default: "PickCart",
    template: "%s | PickCart",
  },
  description: "Modern Full Stack E-Commerce Platform",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}