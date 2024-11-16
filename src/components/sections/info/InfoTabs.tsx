import React from "react";
import { InfoTabsWrapper } from '@/components/sections/info/InfoTabsWrapper'
import { InfoTabsContent } from '@/components/sections/info/InfoTabsContent'

export const InfoTabs: React.FC = () => {
  return (
    <InfoTabsWrapper tabs={[
      { value: 'policy', title: 'Policy' },
      { value: 'health', title: 'Health' },
      { value: 'preop', title: 'Pre-op' },
      { value: 'aftercare', title: 'Aftercare' }
    ]}>
      <InfoTabsContent />
    </InfoTabsWrapper>
  )
}