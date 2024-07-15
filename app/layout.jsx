import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Funding App",
  description: "Website for funding projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-[calc(100vh-9rem)] inset-0 -z-10 w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
