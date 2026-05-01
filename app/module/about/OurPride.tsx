import PrideAwards from '@/app/components/PrideAwards'
import React from 'react'

const OurPride = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-7xl'>
        <p className='italic font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 mb-8 sm:mb-10 md:mb-12 font-serif tracking-wide text-center'>OUR PRIDE</p>

        {/* award cards */}

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 justify-center'>
<PrideAwards
image='/Media/Dolcetti-about-brand_01.png'
title='BAKERY OF THE YEAR'
years='2018-2019'
description='Owned by a famous Vermont baker, Denise Le'
/>
<PrideAwards
image='/Media/Dolcetti-about-brand_01.png'
title='BAKERY OF THE YEAR'
years='2021-2022'
description='Owned by a famous Vermont baker, Denise Le'
/>
<PrideAwards
image='/Media/Dolcetti-about-brand_01.png'
title='BAKERY OF THE YEAR'
years='2023-2024'
description='Owned by a famous Vermont baker, Denise Le'
/>
<PrideAwards
image='/Media/Dolcetti-about-brand_01.png'
title='BAKERY OF THE YEAR'
years='2025-2026'
description='Owned by a famous Vermont baker, Denise Le'
/>
      </div>
    </div>
 
</div>

  )}
export default OurPride;
