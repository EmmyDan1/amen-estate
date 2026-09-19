import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/src/components/navigation/Navbar";
import SmoothScroll from "@/src/components/SmoothScroll";

export const metadata: Metadata = {
  title: "AMEN Estates",
  description: "Exceptional homes for extraordinary living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <Navbar />

        {children}
      </body>
    </html>
  );
}