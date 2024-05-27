import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/css/globals.css";
import { NavBar } from "@/components/NavBar";
import { ReactNode } from "react";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casecobra",
  description: "ecommerce de vendas de capinhas personalizadas.",
  authors: [{name: "Gabriel dos Santos Ximenes Ferreira", url: "https://github.com/ximeen"}]
};

export default function RootLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
