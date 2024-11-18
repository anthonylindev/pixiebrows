import React, { useState } from "react"
import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription, } from "@/components/ui/dialog"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export const GalleryItem = React.memo(({ image, imageSrc }: { image: React.ReactNode, imageSrc: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog onOpenChange={setIsOpen}>
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <div className="aspect-square relative overflow-hidden rounded-lg cursor-pointer">
          {image}
        </div>
      </DialogTrigger>
      {isOpen && (
        <DialogContent className="fixed text-white max-w-full max-h-full w-[90vw] h-[90vh] flex justify-center items-center bg-transparent overflow-hidden">
          <VisuallyHidden.Root>
            <DialogTitle>Brows</DialogTitle>
            <DialogDescription>
              Image of client&#39;s eyebrows
            </DialogDescription>
          </VisuallyHidden.Root>
          <DialogPrimitive.Close className="relative w-full h-[calc(90vh-100px)] cursor-default focus:outline-none">
            <Image
              src={imageSrc}
              alt={`Gallery image`}
              style={{ objectFit: "contain" }}
              sizes="100vw, 50vw, 33vw"
              fill
              className="border-none"
            />
          </DialogPrimitive.Close>
        </DialogContent>
      )}
    </Dialog>
  )
})

GalleryItem.displayName = 'GalleryItem'