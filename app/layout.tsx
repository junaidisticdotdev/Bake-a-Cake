import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Font setup
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "The Rose Bakers",
  icons: {
    icon: '/icon.png', // Ye file public folder mein honi chahiye
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-full flex flex-col ${cormorant.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}