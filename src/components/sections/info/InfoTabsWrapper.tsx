'use client'

import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from 'framer-motion'

interface InfoTabsWrapperProps {
  children?: React.ReactNode
  tabs: { value: string; title: string }[]
}

export const InfoTabsWrapper: React.FC<InfoTabsWrapperProps> = ({ children, tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value)

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-light text-[#ba867b] mb-16 text-center">Important Information</h2>
      <Tabs defaultValue="policy" className="w-full">
        <TabsList className="w-full justify-center mb-8 bg-[#FAF5F2]">
          {tabs.map(infoItem => (
            <TabsTrigger
              onClick={() => setActiveTab(infoItem.value)}
              key={infoItem.value}
              value={infoItem.value}
              className={`relative mx-3 py-2 text-lg font-medium transition-colors duration-200 ${activeTab === infoItem.value
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
        {children}
      </Tabs>
    </div>
  )
}