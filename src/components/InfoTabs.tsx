'use client'

import React, { useState } from 'react'
import { ListCollection } from '@/components/ListCollection'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Aftercare, Policy, Preop} from '@/types'
import { motion } from 'framer-motion'

interface InfoTabsProps {
  aftercare: Aftercare
  policies: Policy[]
  preop: Preop
  health: string[]
}

export const InfoTabs: React.FC<InfoTabsProps> = ({aftercare, policies, preop, health}) => {
  const [activeTab, setActiveTab] = useState('policy')

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-light text-[#ba867b] mb-16 text-center">Important Information</h2>
      <Tabs defaultValue="policy" className="w-full">
        <TabsList className="w-full justify-center mb-8 bg-[#FAF5F2]">
        {[ 
          {value: 'policy', title: 'Policy'}, 
          {value: 'health', title: 'Health'}, 
          {value: 'preop', title: 'Pre-op'}, 
          {value: 'aftercare', title: 'Aftercare'}
        ].map(infoItem => ( 
          <TabsTrigger 
            onClick={() => setActiveTab(infoItem.value)}
            key={infoItem.value} 
            value={infoItem.value} 
            className={`relative mx-3 py-2 text-lg font-medium transition-colors duration-200 ${
              activeTab === infoItem.value
                ? 'text-[#ba867b]'
                : 'text-gray-500 hover:text-[#ba867b]'
            }`} > 
            {infoItem.title}
            {activeTab === infoItem.value && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ba867b]"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )} 
          </TabsTrigger> 
        ))} 
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
  )
}