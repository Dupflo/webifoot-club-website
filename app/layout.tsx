import { Montserrat } from "@next/font/google";
import type { Metadata } from "next";
import Navigation from "../components/common/navigation";
import Footer from "./footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Club Name",
  description: "Welcome to Club Name",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
