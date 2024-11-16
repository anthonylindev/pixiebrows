import { Playfair_Display, Great_Vibes } from 'next/font/google';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-playfair',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-great-vibes',
  weight: '400'
});


export { playfairDisplay, greatVibes }