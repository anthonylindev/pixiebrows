'use client'

import React, { useState } from "react"
import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription, } from "@/components/ui/dialog"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-light text-[#ba867b] mb-16 text-center">My Work</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger onClick={() => setCurrentImageIndex(index)} asChild>
              <div className="aspect-square relative overflow-hidden rounded-lg cursor-pointer">
                <Image
                  src={image}
                  alt={'Image of permanent makeup - ombre powder brows'}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 hover:scale-110"
                  sizes="100vw, 50vw, 33vw"
                />
              </div>
            </DialogTrigger>
            <DialogContent className="fixed text-white max-w-full max-h-full w-[90vw] h-[90vh] flex justify-center items-center bg-transparent overflow-hidden">
              <VisuallyHidden.Root>
                <DialogTitle>Brows</DialogTitle>
                <DialogDescription>
                  Image of client's eyebrows
                </DialogDescription>
              </VisuallyHidden.Root>
              <DialogPrimitive.Close className="relative w-full h-[calc(90vh-100px)] cursor-default">
                <Image
                  src={images[currentImageIndex]}
                  alt={`Gallery image ${currentImageIndex + 1}`}
                  style={{ objectFit: "contain" }}
                  sizes="100vw, 50vw, 33vw"
                  fill
                />
              </DialogPrimitive.Close>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}