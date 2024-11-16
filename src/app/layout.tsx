import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Playfair_Display, Great_Vibes, Open_Sans, Montserrat } from 'next/font/google';

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

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: '400'
})

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
        className={`${greatVibes.variable} ${openSans.variable} ${montserrat.variable} antialiased`}
      >
        <link rel="icon" href="/icon.svg" sizes="any" />
        {children}
      </body>
    </html>
  );
}
