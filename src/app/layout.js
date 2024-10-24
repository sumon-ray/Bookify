import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import AuthProvider from "@/services/AuthProvider";
import QueryProvider from "./QueryProvider";
import { Toaster } from "react-hot-toast";
// import { SearchProvider } from "./(dashboard)/dashboard/SearchProvider";
import { SearchProvider } from "./(dashboard)/dashboard/myBooks/SearchProvider";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
// import { Toaster } from 'react-hot-toast';

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
      <SearchProvider>
        <QueryProvider>
          <AuthProvider>
            <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F3F2ED99] dark:#272727CC`}>
              <ThemeProvider attribute="class">
                <NextUIProvider>
                  <Navbar />
                  <Toaster toastOptions={{
                    className: '',
                    style: {
                      background: '#364957',
                      color: '#ffffff',
                    },
                  }} />
                  {children}
                  <Footer />
                </NextUIProvider>
              </ThemeProvider>
            </body>
          </AuthProvider>
        </QueryProvider>
      </SearchProvider>
    </html>
  );
}
