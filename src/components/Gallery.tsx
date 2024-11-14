import React from "react"
import Image from 'next/image'

const imagePaths = [
  '/images/gallery/brow1.jpg',
  '/images/gallery/brow2.jpeg',
  '/images/gallery/brow3.jpeg',
  '/images/gallery/brow4.jpg',
  '/images/gallery/brow5.jpeg',
  '/images/gallery/brow6.jpeg',
  '/images/gallery/brow7.jpeg',
  '/images/gallery/brow8.jpeg',
  '/images/gallery/brow9.jpeg',
  '/images/gallery/brow_before_1.jpeg',
  '/images/gallery/brow_before_2.jpeg',
  '/images/gallery/brow_before_3.jpeg',
]

export const Gallery: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    {imagePaths.map((path, i) => (
      <div key={i} className="relative aspect-square group">
        <Image
          src={path}
          alt={`Eyebrow style ${i+1}`}
          fill
          style={{objectFit:"cover"}}
          className="rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    ))}
  </div>
  )
}