
import Image from 'next/image'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/NavBar';




 
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Free Tools",
  description: "Generated by: Ahmed Mohamed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
