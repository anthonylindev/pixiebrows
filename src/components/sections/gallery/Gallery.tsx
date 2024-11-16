import React from "react";
import Image from 'next/image'
import { GalleryItems } from './GalleryItems'

const images = [
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
  '/images/gallery/brow10.jpeg',
  '/images/gallery/brow12.jpeg',
  '/images/gallery/brow13.jpeg',
  '/images/gallery/brow15.jpeg',
]

export const Gallery: React.FC = () => {
  return (
    <GalleryItems
      imagePaths={images}
      images={images.map((imagePath, index) => (
        <GalleryImage key={index} src={imagePath} />
      ))}
    />
  )
}

const GalleryImage = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      alt={'Image of permanent makeup - ombre powder brows'}
      fill
      style={{ objectFit: "cover" }}
      className="transition-transform duration-300 hover:scale-110"
      sizes="100vw, 50vw, 33vw"
    />
  )
}