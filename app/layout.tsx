import Navigation from "@/components/common/navigation/navigation";
import type { Metadata } from "next";
import Footer from "../components/common/footer/footer";
import { LayoutContextProvider } from "./Context/layout-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inter Montreal",
  description: "Welcome to Inter Montreal website",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const response = await import(`../public/layout.json`);
  const layoutContent = response.default;

  return (
    <html lang="en">
      <body className="bg-home">
        <LayoutContextProvider>
          <Navigation data={layoutContent} />
          <main>{children}</main>
          <Footer data={layoutContent} />
        </LayoutContextProvider>
      </body>
    </html>
  );
}
