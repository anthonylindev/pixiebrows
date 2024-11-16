import { Star } from 'lucide-react'
import { Hero } from '@/components/sections/Hero'
import { Gallery } from '@/components/sections/Gallery'
import { Contact } from '@/components/sections/Contact'
import { Services } from '@/components/sections/services/Services'
import { Faqs } from '@/components/sections/Faqs'
import Header from '@/components/ui/Header'
import { InfoTabs } from '@/components/sections/info/InfoTabs'
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  { name: "Sarah L.", text: "Pixie Brows transformed my look completely! The attention to detail is impeccable.", rating: 5 },
  { name: "Emily R.", text: "The most professional and luxurious brow experience I've ever had.", rating: 5 },
  { name: "Jessica T.", text: "Found my forever brow artist! The results are absolutely stunning.", rating: 5 }
]

export default async function Home() {
  return (
    <div id='top' className="bg-[#FAF5F2] min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <section id="hero" className="grid h-[100vh] justify-center align-center place-items-center bg-[#2B1D1A]">
          <Hero />
        </section>

        <section id="services" className="py-24 bg-white">
          <Services />
        </section>

        <section id="gallery" className="py-24 bg-[#FAF5F2]">
          <Gallery />
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
          <InfoTabs />
        </section>

        <section id="faq" className="py-24 bg-white">
          <Faqs />
        </section>

        <section id="contact" className="py-24 bg-[#FAF5F2]">
          <Contact />
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