import React from 'react'
import { ListCollection } from '@/components/sections/info/ListCollection'
import { TabsContent } from "@/components/ui/tabs"
import { getPolicies, getAftercare, getHealth, getPreop } from '@/lib/fs'

export const InfoTabsContent: React.FC = async () => {

  const policies = await getPolicies()
  const aftercare = await getAftercare()
  const health = await getHealth()
  const preop = await getPreop()

  return (
    <>
      <TabsContent value="policy" className="bg-white p-8 rounded-lg">
        <ListCollection
          data={[{
            title: 'Business Policies',
            desc: 'By booking any of our services, you agree to abide by the entirety of our business policies outlined below:',
            listData: policies.map(policy => ({ header: policy.title, info: policy.description }))
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
          {
            title: 'What\'s Normal?',
            listData: aftercare.whatIsNormal,
          }
          ]}
        />
      </TabsContent>
    </>
  )
}