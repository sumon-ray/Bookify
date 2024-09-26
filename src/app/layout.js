import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import QueryProvider from "./QueryProvider";
import 'react-tabs/style/react-tabs.css';



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
    <QueryProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F3F2EDCC]`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </QueryProvider>
  );
}