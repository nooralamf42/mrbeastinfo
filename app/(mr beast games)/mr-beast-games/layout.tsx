import type { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/footer";
import Providers from "@/components/provider";
import { Toaster } from 'react-hot-toast';



export const metadata: Metadata = {
  title: "Beast Games",
  description: "Beast Games Application Page",
};

export default function MrBeastGamesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-[url('/images/bgBeastGames.webp')] bg-no-repeat bg-cover bg-center bg-top min-h-screen">
        <Toaster position="top-center" />
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </div>
    </>
  );
}
