'use client'

import { useState, useEffect } from 'react'

export const PhoneNumber = ({ color }: { color?: string }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
  }, [])

  return (
    isMobile ? (
      <a href="tel:7144177859" className={`${isMobile ? 'border-b' : 'border-0'} border-[${color}]`}>(714) 417-7859</a>
    ) : (
      <span>(714) 417-7859</span>
    )
  )
}