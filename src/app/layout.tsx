import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aureliara - Premium Skincare Products in Algeria",
  description:
    "Discover Aureliara, your go-to brand for high-quality skincare products in Algeria. Enhance your beauty routine with our natural and effective solutions. Shop now and experience the best in beauty care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
