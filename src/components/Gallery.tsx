'use client'

import React, {useState} from "react"
import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
]

export const Gallery: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  if (!images || images.length === 0) {
    return <p className="text-center text-[#2B2B2B]/80">No images to display.</p>
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {images.map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger onClick={() => setCurrentImageIndex(index)} asChild>
            <div className="aspect-square relative overflow-hidden rounded-lg cursor-pointer">
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                style={{objectFit:"cover"}}
                className="transition-transform duration-300 hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </DialogTrigger>
          <DialogContent aria-describedby="Image of client's eyebrows" className="max-w-3xl w-full">
            <DialogTitle>Brows</DialogTitle>
            <DialogDescription>
              This action cannot be undone. Are you sure you want to permanently
              delete this file from our servers?
            </DialogDescription>
            <div className="relative aspect-square">
              <Image
                src={images[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                style={{objectFit:"contain"}}
                fill
              />
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}