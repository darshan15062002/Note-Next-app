import { Button } from '@/components/ui/button'
import React from 'react'
import Heading from '../_componets/Heading'
import Heroes from '../_componets/Heroes'
import Footer from '../_componets/Footer'

export default function MarketingPage() {
  return (
   <div className="min-h-full flex flex-col">
    <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
      <Heading/>
      <Heroes/>
      <Footer/>
    </div>
   </div>
  )
}

