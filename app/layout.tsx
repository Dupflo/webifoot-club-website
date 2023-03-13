import Navigation from "@/components/common/navigation";
import type { Metadata } from "next";
import Footer from "../components/common/footer";

import { Archivo_Black, Open_Sans, Poppins } from "@next/font/google";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import InterMtl from "../assets/layout/intermtl-logo.png";

import "./globals.css";

export const metadata: Metadata = {
  title: "Club Name",
  description: "Welcome to Club Name",
};

const openSans = Open_Sans({ subsets: ["latin"] });
const archivoBlack = Archivo_Black({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation logo={InterMtl} Fb={FaFacebookF} Insta={FaInstagram} openFont={openSans.className} />
        <main>{children}</main>
        <Footer
          logo={InterMtl}
          Fb={FaFacebookF}
          Insta={FaInstagram}
          arialFont={archivoBlack.className}
          poppinsFont={poppins.className}
        />
      </body>
    </html>
  );
}
