import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getFaqs } from '@/lib/fs'

export const Faqs: React.FC = async () => {
  const faqs = await getFaqs()

  return (
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
  )
}