import PriceTableCard from '@/app/components/PriceTableCard'
import React from 'react'

const PriceTable = () => {
  return (
    <div className=' flex flex-col items-center justify-center mt-10 w-full min-h-screen space-y-10 overflow-hidden'>
      <p className='italic font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-widest text-center text-slate-800'
        >
          SERVICES WE PROVIDE
        </p>
        {/* Cards are below */}

        <PriceTableCard/>
    </div>
  )
}

export default PriceTable
