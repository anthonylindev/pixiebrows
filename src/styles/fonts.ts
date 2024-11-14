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

export { openSans, playfairDisplay, greatVibes }