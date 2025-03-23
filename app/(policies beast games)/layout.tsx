import type { Metadata } from "next";
import "../globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Providers from "@/components/provider";



export const metadata: Metadata = {
  title: "Beast Games",
  description: "Beast Games Application Page",
};

export default function PoliciesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <div className="bg-black min-h-screen">
        <Header />
        <main className="pt-20 pb-40 mx-5">
          {children}
        </main>
        <Footer />
      </div>
    </Providers>
  );
}
