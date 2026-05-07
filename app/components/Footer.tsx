import React from 'react'
import { FaSquareInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { BsTiktok } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-pink-50">
      <div className='max-w-[1400px] mx-auto px-6 py-6 md:py-2'>
        
        {/* Main Flex Container */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4'>
          
          {/* 1. Logo Section */}
          <div className='flex-1 flex justify-center md:justify-start'>
            <div className='bg-[#fff5f9] p-2 rounded-2xl shadow-sm'>
              <img src="/Media/logo2.png" alt="Logo" className="h-20 md:h-24 w-auto object-contain" />
            </div>
          </div>

          {/* 2. Copyright Text - Center on Desktop */}
          <div className='flex-1 flex flex-col items-center justify-center text-center'>
            <p className='text-gray-400 text-xs md:text-sm font-medium tracking-wide'>
              © {new Date().getFullYear()} <span className='text-[#f79dc3]'>The Rose Bakers</span>.
            </p>
            <p className='text-gray-400 text-[9px] md:text-[10px] uppercase tracking-[0.2em] mt-1'>
               Handcrafted with love
            </p>
          </div>

          {/* 3. Social Media - Right side on Desktop */}
          <div className='flex-1 flex gap-3 md:gap-4 items-center justify-center md:justify-end'>
            {[
              { icon: <FaSquareInstagram />, label: "Instagram", link: "#" },
              { icon: <FaFacebookF />, label: "Facebook", link: "#" },
              { icon: <BsTiktok />, label: "Tiktok", link: "#" },
              { icon: <FaTwitter />, label: "Twitter", link: "#" },
              { icon: <FaLinkedinIn />, label: "Linkedin", link: "#" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.link} 
                aria-label={social.label}
                className='w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-pink-50/50 text-gray-500 hover:bg-[#f79dc3] hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm'
              >
                <span className='text-base md:text-lg'>{social.icon}</span>
              </a>
            ))}
          </div>

        </div>

       

      </div>
    </footer>
  )
}

export default Footer