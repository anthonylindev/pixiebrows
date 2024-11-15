'use client'

import { scrollToSection } from '@/lib/utils'
import { ChevronDownIcon } from 'lucide-react'

export default function ScrollButton() {
  return (
    <div className="absolute bottom-48 sm:bottom-64 left-0 right-0 flex items-center justify-center">
      <button
        onClick={() => scrollToSection('#services')}
        className="transform border-solid border-2 bg-transparent hover:bg-white/25 hover:bg-white/ text-white rounded-full py-2 px-6 transition-all duration-300 ease-in-out flex items-center space-x-2 shadow-md hover:shadow-lg" 
        aria-label="Scroll to Services"
      >
        <span className="text-md md:text-xl">Explore Services</span>
        <ChevronDownIcon className="w-6 h-6 animate-bounce-soft" />
      </button>
    </div>
  )
}
