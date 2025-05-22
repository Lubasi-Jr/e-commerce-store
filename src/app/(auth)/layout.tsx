import React from "react";
import { AuthProvider } from "@/context/AuthWrapper";
import { metadataDescription } from "@/constants";
import type { Metadata } from "next";
import { Geist, Geist_Mono, EB_Garamond, Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
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

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${ebGaramond.variable} ${inter.variable} antialiased`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
