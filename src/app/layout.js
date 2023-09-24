import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muttakin Ahmed",
  description: "Muttakin Ahmed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <div>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
