'use client'

import { useState, useEffect } from 'react'
import { scrollToSection } from '@/lib/utils'

import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Info', href: '#info' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToSection(href)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false)
    window.addEventListener('resize', closeMenu)

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', closeMenu)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`fixed overflow-hidden w-screen z-20 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 py-10">
          <div className="w-1/3 md:w-1/4" />
          <a
            onClick={(e) => handleClick(e, '#home')}
            href="#hero"
            className={`w-72 h-24 md:w-56 md:h-64 my-2 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <Image
              src="/images/logo-trim.png"
              alt="Pixie Brows"
              style={{ objectFit: "contain" }}
              sizes='320px'
              height={1825}
              width={4183}
              className='h-full w-full'
            />
          </a>
          <div className={`flex items-center justify-end w-1/3 md:w-1/4 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'
            }`}>
            <nav className="hidden lg:flex lg:right-0 lg:absolute space-x-4 pr-32">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`text-md font-medium capitalize transition-colors duration-300 ${isScrolled
                      ? 'text-gray-700 hover:text-[#8E4E3B]'
                      : 'text-white hover:text-[#D4A69A]'
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className={`lg:hidden right-0 absolute pr-4 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open Menu"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={'block px-3 py-2 rounded-md text-base font-medium text-[#2B2B2B] hover:text-[#8E4E3B] hover:bg-[#FAF5F2]'}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}