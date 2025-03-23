import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/navbar";
import BgManger from "@/components/bgManger";


export const metadata: Metadata = {
  title: "MrBeast",
  description: "All info about MrBeast",
};

export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BgManger>
      <Navbar />
      {children}
    </BgManger>
  );
}
