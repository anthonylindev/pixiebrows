'use client'

import React, { useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Service } from '@/types'

interface ServiceCardContentProps extends Service {
  renderImage: React.ReactNode
}

export default function ServiceCardContent({
  title,
  moreInfo,
  desc,
  painLevel,
  healingTime,
  price,
  prices,
  pricesTitle,
  duration,
  renderImage
}: ServiceCardContentProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const flipCard = () => setIsFlipped(!isFlipped)

  const hasPriceList = prices?.length && !price

  return (
    <div className="relative w-full xl:h-[450px] sm:h-[550px] md:h-[500px] lg:h-[500px] h-[600px] [perspective:1000px]">
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
            <div className="relative h-full w-full">
              {renderImage}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-16" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-[#ba867b] mb-2">{title}</h3>
              <p className="text-[#2B2B2B]/80 mb-4 flex-grow">{desc}</p>
              <Button onClick={flipCard} className="bg-[#ba867b] text-white hover:bg-[#D4A69A] transition-colors">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="bg-[#FAF5F2] rounded-lg shadow-md overflow-hidden h-full flex flex-col p-6">
            <div className='relative flex items-center justify-center w-full mb-6'>
              <button onClick={flipCard} className="left-0 absolute text-[#8E4E3B] hover:text-[#D4A69A] transition-colors">
                <ChevronLeft size={24} />
              </button>
              <h3 className="text-xl font-semibold text-[#ba867b]">{title}</h3>
            </div>
            <div className=" lg:block mb-4 flex-grow overflow-y-auto">
              <p className="text-[#2B2B2B]/80">{moreInfo}</p>
            </div>
            {hasPriceList && <p className="text-[#8E4E3B] font-normal mb-3">{pricesTitle}</p>}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
              {prices?.map((price, index) => (
                <div key={index} className="mb-4">
                  <h5 className="font-semibold text-[#ba867b]">{price.desc}</h5>
                  <p className="text-[#2B2B2B]/80">Price: {price.price}</p>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              {price && <p className="text-[#ba867b] font-semibold">Price: {price}</p>}
              <p className="text-[#ba867b]">Duration: {duration}</p>
              {painLevel && <p className="text-[#ba867b]">Pain Level: {painLevel}</p>}
              {healingTime && <p className="text-[#ba867b]">Healing Time: {healingTime}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}