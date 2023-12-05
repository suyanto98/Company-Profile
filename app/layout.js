import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "HealthCare",
  description: "your good health makes your happiness",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
