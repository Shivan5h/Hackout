import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgroMitra",
  description: "Ai automated one stop solution for farmers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900">
        <Navbar/>
        {children}</body>
    </html>
  );
}
