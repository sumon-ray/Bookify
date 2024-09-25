import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import QueryProvider from "./QueryProvider";



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
  title: "Create Next App",
  description: "Book is Love ",
};

export default function RootLayout({ children }) {
  return (
    <QueryProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </QueryProvider>
  );
}