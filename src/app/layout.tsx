import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Playfair_Display, Great_Vibes, Open_Sans } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: '700', // Use bold for headings
  variable: '--font-playfair',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-great-vibes',
  weight: '400'
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-open-sans',
});
export const metadata: Metadata = {
  title: "Pixiebrows by Kelly",
  description: "Ombre powder brow artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${greatVibes.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
