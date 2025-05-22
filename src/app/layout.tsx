import type { Metadata } from "next";
import { Geist, Geist_Mono, EB_Garamond, Inter } from "next/font/google";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import QueryWrapper from "@/context/QueryWrapper";
import { AuthProvider } from "@/context/AuthWrapper";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "@/components/ui/sonner";
import { metadataDescription } from "@/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stylas",
  description: metadataDescription,
  icons: {
    icon: [
      {
        url: "/vinyl-svgrepo-com.svg",
        href: "/vinyl-svgrepo-com.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ebGaramond.variable} ${inter.variable} antialiased`}
      >
        <AuthProvider>
          <QueryWrapper>
            <CartProvider>
              <NavBar />
              {children}
              <Footer />
              <Toaster />
            </CartProvider>
          </QueryWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
