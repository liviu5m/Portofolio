import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";

const roboto = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "DevL",
  icons: "/images/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className + " overflow-x-hidden"}>
        {children}
      </body>
    </html>
  );
}
