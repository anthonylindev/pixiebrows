'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {Service} from '@/types'

interface ServiceCardProps extends Service {
  image?: string
}

export default function ServiceCard({ 
  title, 
  moreInfo, 
  desc, 
  painLevel,
  healingTime,  
  image,
  price,
  prices,
  pricesTitle,
  duration
}: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const flipCard = () => setIsFlipped(!isFlipped)

  const hasPriceList = prices?.length && !price

  return (
    <div className="relative w-full xl:h-[450px] sm:h-[550px] md:h-[500px] lg:h-[500px] h-[600px] [perspective:1000px]">
      <motion.div
        className="w-full h-full [transform-style:preserve-3d] transition-all duration-0"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
            <div className="relative h-48">
              <img src={image} alt={title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-16" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-[#8E4E3B] mb-2">{title}</h3>
              <p className="text-[#2B2B2B]/80 mb-4 flex-grow">{desc}</p>
              <Button onClick={flipCard} className="bg-[#8E4E3B] text-white hover:bg-[#D4A69A] transition-colors">
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
              <h3 className="text-xl font-semibold text-[#8E4E3B]">{title}</h3>
            </div>
            <div className=" lg:block mb-4 flex-grow overflow-y-auto">
              <p className="text-[#2B2B2B]/80">{moreInfo}</p>
            </div>
            {hasPriceList && <p className="text-[#8E4E3B] font-normal mb-3">{pricesTitle}</p>}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
              {prices?.map((price, index) => (
                  <div key={index} className="mb-4">
                    <h5 className="font-semibold text-[#8E4E3B]">{price.desc}</h5>
                    <p className="text-[#2B2B2B]/80">Price: {price.price}</p>
                  </div>
                ))}
            </div>
            <div className="mt-auto">
              {price && <p className="text-[#8E4E3B] font-semibold">Price: {price}</p>}
              <p className="text-[#8E4E3B]">Duration: {duration}</p>
              {painLevel && <p className="text-[#8E4E3B]">Pain Level: {painLevel}</p>}
              {healingTime && <p className="text-[#8E4E3B]">Healing Time: {healingTime}</p>}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}