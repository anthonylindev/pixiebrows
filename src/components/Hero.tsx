'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import ScrollButton from '@/components/ui/ScrollButton'

export const Hero = () => {

  const images = [
    '/images/gallery/brow10.jpeg',
    '/images/gallery/brow12.jpeg',
    '/images/gallery/brow2.jpeg',
    '/images/gallery/brow15.jpeg',
    '/images/gallery/brow1.jpg',
    '/images/gallery/brow6.jpeg',
    '/images/gallery/brow8.jpeg',
    '/images/gallery/brow13.jpeg',
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(imageInterval)
  }, [])
  
  return (
    <div className='flex flex-col justify-center items-center overflow-hidden relative w-screen h-screen'>
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-40' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            // className="opacity-40"
            alt={`Hero background ${index + 1}`}
            fill
            style={{objectFit:"cover"}}
            priority={index === 0}
            sizes="100vw, 100vh"
          />
        </div>
      ))}
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/logo-lg.png"
          alt="Pixie Brows - Orange County Brow Artist"
          width={1775}
          height={802}
          className="w-11/12 md:w-full max-w-2xl md:max-w-3xl mx-auto animate-scale-in opacity-100 z-10 will-change-transform"
          priority
          sizes="100vh, 100vw"
        />
          <ScrollButton />  
      </div>
    </div>
  )
}