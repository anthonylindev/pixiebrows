import type { Metadata } from "next";
import "./globals.css";

import { Great_Vibes, Montserrat } from 'next/font/google';

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-great-vibes',
  weight: '400'
});


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: '400'
})

export const metadata: Metadata = {
  title: "Pixiebrows by Kelly",
  description: "Ombre powder brow artist serving Orange County, CA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${greatVibes.variable} ${montserrat.variable} antialiased`}
      >
        <link rel="icon" href="/icon.svg" sizes="any" />
        {children}
      </body>
    </html>
  );
}
