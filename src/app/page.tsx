import { MapPin, Phone, Star, Mail, Instagram, TwitterIcon as TikTok } from 'lucide-react'
import { Hero } from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import { Gallery } from '@/components/Gallery'
import { InfoTabs } from '@/components/InfoTabs'
import { MapEmbed } from '@/components/MapEmbed'
import Header from '@/components/Header'
import Image from 'next/image'

import { getServices, getPolicies, getFaqs, getAftercare, getHealth, getPreop } from '@/lib/fs'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  { name: "Sarah L.", text: "Pixie Brows transformed my look completely! The attention to detail is impeccable.", rating: 5 },
  { name: "Emily R.", text: "The most professional and luxurious brow experience I've ever had.", rating: 5 },
  { name: "Jessica T.", text: "Found my forever brow artist! The results are absolutely stunning.", rating: 5 }
]

export default async function Home() {
  const services = await getServices()
  const policies = await getPolicies()
  const faqs = await getFaqs()
  const aftercare = await getAftercare()
  const health = await getHealth()
  const preop = await getPreop()

  return (
    <div id='top' className="bg-[#FAF5F2] min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <section id="hero" className="grid h-[100vh] justify-center align-center place-items-center bg-[#2B1D1A]">
          <Hero />
        </section>

        <section id="services" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-light text-[#ba867b] mb-16 text-center">Services</h2>
            <h3 className="text-2xl font-light text-[#ba867b] mb-16 text-center">Call/Text (714) 417-7859 to book!</h3>
            <div className="grid gap-8 md:grid-cols-2">
              {services.map(service => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24 bg-[#FAF5F2]">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-light text-[#ba867b] mb-16 text-center">My Work</h2>
            <Gallery />
          </div>
        </section>

        <section id="testimonials" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-light text-[#ba867b] mb-16 text-center">Client Stories</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-[#FAF5F2] border-none shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#D4A69A] fill-current" />
                      ))}
                    </div>
                    <p className="text-[#2B2B2B]/80 mb-4 italic">"{testimonial.text}"</p>
                    <p className="font-medium text-[#8E4E3B]">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="info" className="py-24 bg-[#FAF5F2]">
          <InfoTabs
            health={health}
            preop={preop}
            policies={policies}
            aftercare={aftercare}
          />
        </section>

        <section id="faq" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-light text-[#ba867b] mb-16 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem value={`item-${index}`} key={index} className="border-b border-[#ba867b]">
                    <AccordionTrigger className="text-lg text-[#2B2B2B] hover:text-[#ba867b]">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-[#2B2B2B]/80">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-[#FAF5F2]">
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
        </section>
      </main>

      <footer className="bg-white py-8 border-t border-[#E8C1B8]">
        <div className="container mx-auto px-4 text-center text-[#2B2B2B]/80">
          <p>&copy; 2024 Pixie Brows. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}