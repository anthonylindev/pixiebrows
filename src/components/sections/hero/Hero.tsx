import React from "react";
import Image from 'next/image'
import ScrollButton from '@/components/ui/ScrollButton'
import { HeroWrapper } from './HeroWrapper'
import { StaticHeroImage } from './StaticHeroImage'

export const Hero: React.FC = () => {
  const renderLogo = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/logo-lg.png"
          alt="Pixie Brows - Orange County Eyebrow Artist"
          width={1775}
          height={802}
          className="w-11/12 md:w-full max-w-2xl md:max-w-3xl mx-auto animate-scale-in opacity-100 z-10 will-change-transform"
          priority
          sizes="100vh, 100vw"
        />
        <ScrollButton />
      </div>
    )
  }
  return (
    <HeroWrapper logo={renderLogo()}>
      <StaticHeroImage src='/images/gallery/brow10.jpeg' />
    </HeroWrapper>
  )
}