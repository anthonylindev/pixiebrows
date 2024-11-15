import Image from 'next/image'
import { MapPin, Phone, Star } from 'lucide-react'
import { Hero } from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import { Gallery } from '@/components/Gallery'
import { ListCollection } from '@/components/ListCollection'
import Header from '@/components/Header'
import ScrollButton from '@/components/ui/ScrollButton'

import {getServices, getPolicies, getFaqs, getAftercare, getHealth, getPreop} from '@/lib/fs'

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
    <div id='top' className="bg-[#FAF5F2] min-h-screen">
      <Header />
      <main>
        <section id="hero" className="grid h-[100vh] justify-center align-center place-items-center bg-[#2B1D1A]">
          <Hero />
          {/* <div className="flex justify-center">
            <ScrollButton />  
          </div> */}
        </section>

        <section id="services" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-light text-[#8E4E3B] mb-16 text-center">Services</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {services.map(service => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24 bg-[#FAF5F2]">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-light text-[#8E4E3B] mb-16 text-center">My Work</h2>
            <Gallery />
          </div>
        </section>

        <section id="testimonials" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-light text-[#8E4E3B] mb-16 text-center">Client Stories</h2>
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
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-light text-[#8E4E3B] mb-16 text-center">Important Information</h2>
            <Tabs defaultValue="policy" className="w-full">
              <TabsList className="w-full justify-center mb-8 bg-[#FAF5F2]">
                <TabsTrigger value="policy" className="text-base text-[#2B2B2B] data-[state=active]:text-[#8E4E3B] data-[state=active]:border-[#8E4E3B]">Policy</TabsTrigger>
                <TabsTrigger value="health" className="text-base text-[#2B2B2B] data-[state=active]:text-[#8E4E3B]  data-[state=active]:border-[#8E4E3B]">Health</TabsTrigger>
                <TabsTrigger value="preop" className="text-base text-[#2B2B2B] data-[state=active]:text-[#8E4E3B]  data-[state=active]:border-[#8E4E3B]">Pre-op</TabsTrigger>
                <TabsTrigger value="aftercare" className="text-base text-[#2B2B2B] data-[state=active]:text-[#8E4E3B] data-[state=active]:border-[#8E4E3B]">Aftercare</TabsTrigger>
              </TabsList>
              <TabsContent value="policy" className="bg-white p-8 rounded-lg">
                <ListCollection
                  data={[{
                    title: 'Business Policies',
                    desc: 'By booking any of our services, you agree to abide by the entirety of our business policies outlined below:',
                    listData: policies.map(policy => ({header: policy.title, info: policy.description}))
                  }]} 
                />
              </TabsContent>
              <TabsContent value="health" className="bg-white p-8 rounded-lg">
                <ListCollection
                  data={[{
                    title: 'Health Clearance',
                    desc: "For your safety, please do not book an appointment if you have any of the following conditions:",
                    listData: health,
                  }]} 
                />
              </TabsContent>
              <TabsContent value="preop" className="bg-white p-8 rounded-lg">
                <ListCollection
                  data={[{
                    title: 'Pre-op Instructions',
                    desc: 'Preparation before your appointment is critical! What not to do before your appointment:',
                    listData: preop.instructions,
                  },
                  {
                    desc: 'In order to avoid excessive bleeding and poor color deposit:',
                    listData: preop.tips,
                  }
                ]} 
                />
              </TabsContent>
              <TabsContent value="aftercare" className="bg-white p-8 rounded-lg">
                <ListCollection
                  data={[{
                    title: 'Aftercare Instructions',
                    listData: aftercare.aftercareInstructions,
                    desc: aftercare.importantNote
                  },
                  {title: 'What\'s Normal?',
                    listData: aftercare.whatIsNormal,
                  }
                ]} 
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="faq" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-light text-[#8E4E3B] mb-16 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem value={`item-${index}`} key={index} className="border-b border-[#E8C1B8]">
                    <AccordionTrigger className="text-lg text-[#2B2B2B] hover:text-[#8E4E3B]">{faq.question}</AccordionTrigger>
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
            <h2 className="text-5xl font-light text-[#8E4E3B] mb-16 text-center">Visit Me!</h2>
            <div className="bg-white rounded-lg p-8 flex flex-col md:flex-row justify-between items-center max-w-3xl mx-auto">
              <div className="flex items-center mb-4 md:mb-0">
                <MapPin className="text-[#8E4E3B] mr-3" />
                <p className="text-[#2B2B2B]">123 Beauty Lane, Style City, ST 12345</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-[#8E4E3B] mr-3" />
                <p className="text-[#2B2B2B]">(714) 417-7859</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-8 border-t border-[#E8C1B8]">
        <div className="container mx-auto px-4 text-center text-[#2B2B2B]/80">
          {/* <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sFOi7rBCttqtTr71aOgoEI34LnCFOB.png"
            alt="Pixie Brows"
            width={100}
            height={33}
            className="h-8 w-auto mx-auto mb-4"
          /> */}
          <p>&copy; 2024 Pixie Brows. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}