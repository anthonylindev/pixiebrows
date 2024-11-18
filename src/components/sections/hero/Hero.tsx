import React from "react";
import Image from 'next/image'
import ScrollButton from '@/components/ui/ScrollButton'
import { HeroWrapper } from './HeroWrapper'
import { StaticHeroImage } from './StaticHeroImage'

export const Hero: React.FC = () => {

  const renderLogo = () => {
    return (
      <ol className="h-full grid grid-rows-[1fr_auto_1fr] gap-1 justify-items-center grid-flow-col p-0 m-0 list-none text-white">
        <li className="row-start-2">
          <Image
            src="/images/logo-lg.png"
            alt="Pixie Brows - Orange County Eyebrow Artist"
            width={1775}
            height={802}
            className="w-11/12 md:w-full max-w-xl min-w-80 md:max-w-2xl mx-auto animate-scale-in opacity-100 z-10 will-change-transform"
            priority
            sizes="100vh, 100vw"
          />
        </li>
        <li className="mt-auto mb-56 md:mb-64">
          <ScrollButton />
        </li>
      </ol>
    )
  }
  return (
    <HeroWrapper logo={renderLogo()}>
      <StaticHeroImage src='/images/gallery/brow10.jpeg' />
    </HeroWrapper>
  )
}