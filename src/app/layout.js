import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import { MenuProvider } from "@/contexts/MenuContext";

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
  title: "Muskan Indien",
  description: "La meilleure cuisine indienne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <MenuProvider>{children}</MenuProvider>
      </body>
    </html>
  );
}
