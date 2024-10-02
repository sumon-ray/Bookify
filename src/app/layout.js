import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import AuthProvider from "@/services/AuthProvider";
import QueryProvider from "./QueryProvider";
import { Toaster } from 'react-hot-toast';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Bookify",
  description: "Book is Love ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <QueryProvider>
        <AuthProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F3F2ED99]`}
          >
            <Toaster />
            <Navbar />
            {children}

            <Footer />
          </body>
        </AuthProvider>
      </QueryProvider>
    </html>
  );
}
