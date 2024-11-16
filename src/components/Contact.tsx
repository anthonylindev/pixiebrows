import React from "react";
import Image from 'next/image'
import { MapPin, Phone } from 'lucide-react'
import { MapEmbed } from '@/components/MapEmbed'

export const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-light text-[#ba867b] mb-16 text-center">Visit Me!</h2>
      <div className="bg-white rounded-lg p-8 flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-2xl font-base mb-4 text-[#ba867b]">Location</h3>
              <div className="flex items-start mb-2">
                <MapPin className="mr-2 text-[#ba867b] flex-shrink-0 mt-1" />
                <span>14331 Euclid Street ste 205, Garden Grove, California, USA</span>
              </div>
              <p className="flex items-center mb-2">
                <Phone className="mr-2 text-[#ba867b]" />
                (714) 417-7859
              </p>
            </div>
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-base mb-4 text-[#ba867b]">Socials</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/pixiebrows.k" target="_blank" rel="noopener noreferrer" className="text-[#8E4E3B] hover:text-[#D4A69A] transition-colors">
                  <Image
                    src="/images/insta-glyph.png"
                    height={32}
                    width={32}
                    alt="instagram link"
                  />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://www.tiktok.com/@pixiebrowsbykelly" target="_blank" rel="noopener noreferrer" className="text-[#8E4E3B] hover:text-[#D4A69A] transition-colors">
                  <Image
                    src="/images/tiktok.png"
                    height={32}
                    width={32}
                    alt="tiktok link"
                  />
                  <span className="sr-only">TikTok</span>
                </a>
              </div>
            </div>
          </div>
          <MapEmbed />
        </div>
      </div>
    </div>
  )
}