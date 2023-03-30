import Navigation from "@/components/common/navigation/navbar";
import type { Metadata } from "next";
import Footer from "../components/common/footer/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inter Montreal",
  description: "Welcome to Inter Montreal website",
};
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const response = await import(`../pages/api/layout.json`);
  const layout = response.default;
  return (
    <html lang="en">
      <body className="bg-home">
        <Navigation data={layout} />
        <main>{children}</main>
        <Footer data={layout} />
      </body>
    </html>
  );
}
