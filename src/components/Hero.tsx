'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTypewriter } from 'react-simple-typewriter'
import {greatVibes} from '@/fonts'
import { scrollToSection } from '@/lib/utils'
import { ChevronDownIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"

export const Hero = () => {

  const [currSubtitle, setCurrSubtitle] = useState('')
  
  useEffect(() => {
    let index = -1;

    const fullString = 'By Kelly'
    let interval: ReturnType<typeof setInterval>
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        // Update the state with the next character
        setCurrSubtitle((prev) => prev + fullString[index]);
        index++;
  
        // Clear the interval when the string is fully displayed
        if (index === fullString.length - 1) {
          clearInterval(interval);
        }
      }, 50); 
    }, 2500)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
       <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/gallery/brow1.jpg"
            alt="Beautiful eyebrows"
            fill
            style={{objectFit:"cover"}}
            className="opacity-40"
            priority
          />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Pixie Brows"
              width={900}
              height={360}
              className="w-4/5 max-w-2xl animate-scale-in"
              priority
            />
                      {/* <p className={`  text-end text-white text-lg mt-2 transform translate-y-full text-xl md:text-3xl text-[#F2DED8] mb-10 ${greatVibes.className}`}>{currSubtitle}</p> */}
            <button
              onClick={() => scrollToSection('#services')}
              className=" transform bg-pink-100 bg-opacity-80 hover:bg-opacity-100 text-pink-700 rounded-full py-2 px-6 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50 flex items-center space-x-2 shadow-md hover:shadow-lg"              aria-label="Scroll to Services"
            >
                <span className="text-sm font-semibold">Explore Services</span>
            <ChevronDownIcon className="w-6 h-6 animate-bounce" />
          </button>
          </div>
    </>
  )
}