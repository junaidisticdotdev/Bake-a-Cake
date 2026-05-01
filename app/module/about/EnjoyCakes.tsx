import React from 'react'

const EnjoyCakes = () => {
  return (
    <div className='w-full min-h-screen border-4 relative overflow-hidden'>

        {/* colored div */}
      <div className='absolute w-full h-[70vh] bg-[#e0f7ff] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>

      {/* left and right sections */}
      <div className='flex w-full min-h-screen relative items-center'>

        {/* left section image */}
        <div className='hidden lg:flex w-full lg:w-1/2 items-center justify-end'>
          <img src='/Media/softcake-about.jpg.jpeg' alt='Pink Soft Cake' className='w-full max-w-[550px] h-auto object-cover rounded-xl shadow-xl border-[#f79dc3] border-4' />
        </div>

        {/* right section text */}
        <div className='w-full lg:w-1/2 flex items-center justify-start'>

{/* heading */}
          <div className='max-w-xl px-6 lg:px-12 space-y-3'>
            <p className='italic font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide text-center'>People Sincerely</p>
            <p className='italic font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide text-center'>Enjoy Our Cakes!</p>
          </div>

{/* what client says */}
        </div>
<p>Owned by a famous Vermont baker, Denise Livine, our place is proud to be one of San Diego, California's fine cake and pastry cakes. Our cakes bakery adds only the freshest ingredients to make our baked goods taste fresh.</p>
        
      </div>

    </div>
  )
}

export default EnjoyCakes
