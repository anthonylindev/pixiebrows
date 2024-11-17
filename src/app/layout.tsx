import type { Metadata } from "next";
import "./globals.css";
import { Great_Vibes, Montserrat } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"

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
  description: "Ombré powder brow artist serving Orange County, CA",
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
        <link rel="icon" href="images/icon.svg" sizes="any" type="image/svg+xml" />
        <link rel="icon" href="images/icon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png" type="image/png" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
