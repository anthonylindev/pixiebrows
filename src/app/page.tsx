import Image from 'next/image'
import {Service} from '@/types'
import { MapPin, Phone, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import {ListCollection} from '@/components/ListCollection'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ServiceCard from '@/components/ServiceCard'
import {getServices, getPolicies, getFaqs, getAftercare, getHealth, getPreop} from '@/lib/fs'

const testimonials = [
  { name: "Sarah L.", text: "Pixie Brows transformed my look completely! The attention to detail is impeccable.", rating: 5 },
  { name: "Emily R.", text: "The most professional and luxurious brow experience I've ever had.", rating: 5 },
  { name: "Jessica T.", text: "Found my forever brow artist! The results are absolutely stunning.", rating: 5 }
]

const services = [
  {
    name: "Eyebrow Shaping",
    shortDescription: "Expert shaping to enhance your natural brow line.",
    longDescription: "Our eyebrow shaping service is designed to enhance your natural beauty and frame your face perfectly. Using a combination of waxing, threading, and tweezing techniques, our skilled technicians will create the ideal brow shape to complement your features.",
    image: "/images/eyebrow-shaping.jpg",
    priceOptions: [
      {
        name: "Basic Shaping",
        price: "$30",
        duration: "20-30 minutes",
        description: "A quick reshape and tidy up of your existing brow shape."
      },
      {
        name: "Full Brow Makeover",
        price: "$50",
        duration: "45-60 minutes",
        description: "A complete redesign of your brow shape, including consultation and styling advice."
      }
    ]
  },
  {
    name: "Eyebrow Tinting",
    shortDescription: "Semi-permanent dye to enhance the color and definition of your brows.",
    longDescription: "Eyebrow tinting is a semi-permanent dye process that enhances the color and definition of your brows. It's perfect for those with lighter or sparse brows, or anyone looking to achieve a fuller, more defined look without daily makeup application.",
    image: "/images/eyebrow-tinting.jpg",
    priceOptions: [
      {
        name: "Tinting Only",
        price: "$25",
        duration: "15-20 minutes",
        description: "A quick application of semi-permanent dye to enhance your brow color."
      },
      {
        name: "Tinting with Shaping",
        price: "$45",
        duration: "30-40 minutes",
        description: "Combine tinting with our basic shaping service for a complete brow refresh."
      }
    ]
  },
  {
    name: "Microblading",
    shortDescription: "A semi-permanent tattoo technique for fuller, natural-looking brows.",
    longDescription: "Microblading is a semi-permanent tattoo technique that creates hair-like strokes to fill in sparse or thinning brows. This advanced procedure is perfect for those looking to reconstruct, define, cover gaps, or fill-in over plucked brows.",
    image: "/images/microblading.jpg",
    priceOptions: [
      {
        name: "Initial Session",
        price: "$350",
        duration: "2-3 hours",
        description: "Your first microblading session, including consultation, numbing, and the procedure itself."
      },
      {
        name: "Touch-up Session",
        price: "$150",
        duration: "1-2 hours",
        description: "A follow-up session 4-6 weeks after your initial treatment to perfect your results."
      }
    ]
  },
  {
    name: "Brow Lamination",
    shortDescription: "A perm for your brows that helps them stay brushed up and in place.",
    longDescription: "Brow lamination is a relatively new technique that's best described as a perm for your eyebrows. It's a great, non-invasive alternative to microblading. The treatment works by relaxing the brow hairs so they can be manipulated into your desired shape and position.",
    image: "/images/brow-lamination.jpg",
    priceOptions: [
      {
        name: "Lamination Only",
        price: "$70",
        duration: "45-60 minutes",
        description: "Our standard brow lamination treatment for a fuller, more polished look."
      },
      {
        name: "Lamination with Tint",
        price: "$85",
        duration: "60-75 minutes",
        description: "Combine lamination with tinting for the ultimate brow transformation."
      }
    ]
  }
]

export default async function Home() {
  const services = await getServices()
  const policies = await getPolicies()
  const faqs = await getFaqs()
  const aftercare = await getAftercare()
  const health = await getHealth()
  const preop = await getPreop()

  return (
    <div className="bg-[#FAF5F2] min-h-screen">
      <header className="bg-white/80 backdrop-blur-md py-4 fixed w-full z-10 border-b border-[#E8C1B8]">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sFOi7rBCttqtTr71aOgoEI34LnCFOB.png"
            alt="Pixie Brows"
            width={120}
            height={40}
            className="h-10 w-auto"
          /> */}
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-[#2B2B2B] hover:text-[#8E4E3B] transition-colors">Services</a>
            <a href="#gallery" className="text-[#2B2B2B] hover:text-[#8E4E3B] transition-colors">Gallery</a>
            <a href="#testimonials" className="text-[#2B2B2B] hover:text-[#8E4E3B] transition-colors">Testimonials</a>
            <a href="#contact" className="text-[#2B2B2B] hover:text-[#8E4E3B] transition-colors">Contact</a>
          </nav>
          <Button className="bg-[#8E4E3B] text-white hover:bg-[#D4A69A]">Book Now</Button>
        </div>
      </header>

      <main className="pt-16">
        <section className="relative h-[90vh] flex items-center justify-center bg-[#8E4E3B]">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Beautiful eyebrows"
              layout="fill"
              objectFit="cover"
              className="opacity-40"
            />
          </div>
          <div className="relative z-1 text-center max-w-3xl px-4">
            <h2 className="text-5xl md:text-6xl font-light text-white mb-6">Elevate Your Natural Beauty</h2>
            <p className="text-xl md:text-2xl text-[#F2DED8] mb-8 font-light">Expert eyebrow artistry for the modern, sophisticated you</p>
            <Button size="lg" className="bg-white text-[#8E4E3B] hover:bg-[#F2DED8]">Book Your Experience</Button>
          </div>
        </section>

        <section id="services" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-light text-[#8E4E3B] mb-16 text-center">Services</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {/* {services.map((service, index) => (
                <Card key={index} className="bg-[#FAF5F2] border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="flex flex-col justify-between	 items-start p-6 mt-2 h-56">
                    <div className="w-full	 flex justify-between content-center">
                      <h3  className="text-xl font-medium text-[#2B2B2B] mb-2">{`${service.title}`}</h3>
                      <Button className="bg-[#8E4E3B] text-white hover:bg-[#D4A69A]">Learn More</Button>
                    </div>
                    <p className="text-[#2B2B2B]/80 mb-6">{service.info}</p>
                    <p className="text-[#2B2B2B]/80 mb-6">{service.desc}</p>
                  </CardContent>
                </Card>
              ))} */}
              {services.map((service, index) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24 bg-[#FAF5F2]">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-light text-[#8E4E3B] mb-16 text-center">My Work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="relative aspect-square group overflow-hidden">
                  {/* <Image
                    src={`/placeholder.svg?height=400&width=400&text=Brow+${i+1}`}
                    alt={`Eyebrow style ${i+1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                  /> */}
                </div>
              ))}
            </div>
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

        <section className="py-24 bg-[#FAF5F2]">
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

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-light text-[#8E4E3B] mb-16 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem value={`item-${index}`} key={index} className="border-b border-[#E8C1B8]">
                    <AccordionTrigger className="text-lg text-[#2B2B2B] hover:text-[#8E4E3B]">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-lg text-[#2B2B2B]/80">
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
                <p className="text-[#2B2B2B]">(555) 123-4567</p>
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