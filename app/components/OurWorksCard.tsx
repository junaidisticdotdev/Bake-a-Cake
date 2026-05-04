'use client';
import React from 'react'

interface OurTeamCardType {
    image: string,
    name: string,
    experty: string
};

const OurWorksCard = ({ image, name, experty }: OurTeamCardType) => {
    // WhatsApp integration for the button (as we discussed)
    const phoneNumber = "923084978902"; // Replace with actual number
    const message = `Assalam-o-Alaikum! I want to talk to ${name} regarding their expertise in ${experty}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className='w-full group flex flex-col items-start text-left transition duration-400 overflow-hidden'>

            {/* 1. Image Container (Clean & Simple) */}
            <div className='w-full aspect-square overflow-hidden bg-gray-100 border-4 rounded-2xl border-[#e0f7ff]'>
                <img 
                    src={image} 
                    alt={name} 
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' 
                />
            </div>

            {/* 2. Name (Serif & Bold) */}
            <h3 className='text-xl sm:text-xxl font-serif font-bold text-slate-800 leading-tight mt-2'>
                {name}
            </h3>

            {/* 3. Expertise (Italic & Muted) */}
            <p className='text-gray-500 font-serif italic text-base sm:text-lg leading-relaxed mb-4'>
                {experty}
            </p>

            {/* 4. WhatsApp Order/Contact Button (Darker Pink) */}
            <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm font-bold tracking-widest text-[#d679a1] hover:text-[#b56088] uppercase transition-colors duration-300 flex items-center gap-2 border-b-2 border-transparent hover:border-[#b56088]"
            >
                Order Now 
                <span>→</span>
            </a>

        </div>
    )
}

export default OurWorksCard