'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export const HeroWrapper = ({ children, logo }: { children?: React.ReactNode, logo: React.ReactNode }) => {

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
  const [isLoaded, setIsLoaded] = useState(false)

  const imageRefs = useRef<(HTMLImageElement | null)[]>([])

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    const checkImagesLoaded = () => {
      const allLoaded = imageRefs.current.every((img) => img && img.complete)
      if (allLoaded) {
        setIsLoaded(true)
      }
    }

    checkImagesLoaded()
    return () => clearInterval(imageInterval)
  }, [])

  const handleImageLoad = (index: number) => (event: React.SyntheticEvent<HTMLImageElement>) => {
    imageRefs.current[index] = event.currentTarget
  }

  return (
    <div className='flex flex-col justify-center items-center overflow-hidden relative w-screen h-screen'>
      <div className={`absolute inset-0  opacity-40 ${isLoaded ? 'hidden' : 'visible'}`}>
        {children}
      </div>
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-40' : 'opacity-0'} ${isLoaded ? 'visible' : 'hidden'}`}
        >
          <Image
            src={image}
            alt={`Hero background ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
            onLoad={() => handleImageLoad(index)}
          />
        </div>
      ))}
      {logo}
    </div>
  )
}