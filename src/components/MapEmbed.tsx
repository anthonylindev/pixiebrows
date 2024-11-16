'use client'

import { useState } from 'react'
import { LoaderCircle } from 'lucide-react'

export const MapEmbed = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)

  return (
    <div className="h-[400px] relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 flex-col">
          <p>Loading map</p>
          <LoaderCircle
            size={24}
            className="animate-spin"
            viewBox="0 0 24 24"
          />
        </div>
      )}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 flex-col">
          <p>Couldn't load map :(</p>
        </div>
      )}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.2489230578167!2d-117.9378888!3d33.7542329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd27ed3bcdc441%3A0x6e57ac50ebce8c49!2s14331%20Euclid%20St%20%23205%2C%20Garden%20Grove%2C%20CA%2092843!5e0!3m2!1sen!2sus!4v1731684156410!5m2!1sen!2sus"
        width="100%"
        height="100%"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-none"
        onLoad={() => {
          setIsLoaded(true)
          setIsError(false)
        }}
        onError={() => {
          setIsError(true)
          setIsLoaded(true)
        }}
      >
      </iframe>
    </div>
  )
}