'use client'

import React from 'react'
import { GalleryItem } from './GalleryItem'

export const GalleryItems = ({ images, imagePaths }: { images: React.ReactNode[], imagePaths: string[] }) => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-light text-[#ba867b] mb-16 text-center">My Work</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <GalleryItem key={index} image={image} imageSrc={imagePaths[index]} />
        ))}
      </div>
    </div>
  )
}