import { Hero } from '@/components/sections/hero/Hero'
import { Gallery } from '@/components/sections/gallery/Gallery'
import { Contact } from '@/components/sections/Contact'
import { Services } from '@/components/sections/services/Services'
import { Faqs } from '@/components/sections/Faqs'
import { Dms } from '@/components/sections/Dms'
import Header from '@/components/ui/Header'
import { InfoTabs } from '@/components/sections/info/InfoTabs'

export default async function Home() {
  return (
    <div id='home' className="bg-[#FAF5F2] min-h-screen overflow-x-hidden">
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
        <section id="dms" className="py-24 bg-white">
          <Dms />
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