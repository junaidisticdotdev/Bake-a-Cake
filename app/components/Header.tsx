'use client';
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import  Link from 'next/link';  

const Header = () => { 
    const [isOpen , setIsOpen] = useState(false);
  return ( 
    <div>
      {/*  header  */}

<header className='w-full h-24 flex justify-between items-center px-10 '>
    <img src="/Media/logo1.png" alt="Logo" className='h-12 cursor-pointer' />

    {/* links open on tablet and pc */}
    <ul className='flex whitespace-nowrap items-center justify-center gap-10 tracking-tighter tracking-[0.2em] text-lg font-medium hidden md:flex'>
        <li className='cursor-pointer hover:text-[#f79dc3] duration-300 transition-all font-serif tracking-wide font-medium '> <Link href="/">HOME</Link></li>
        <li className='cursor-pointer hover:text-[#f79dc3] duration-300 transition-all font-serif tracking-wide font-medium'>  <Link href="/about"> ABOUT </Link> </li>
        <li className='cursor-pointer hover:text-[#f79dc3] duration-300 transition-all font-serif tracking-wide font-medium'> <Link href="/services"> SERVICES </Link></li>
        <li className='cursor-pointer hover:text-[#f79dc3] duration-300 transition-all font-serif tracking-wide font-medium'><Link href="/gallery"> GALLERY </Link></li>
        <li>
          <a href={`https://wa.me/923084978902?text=${encodeURIComponent("Assalam-o-Alaikum! I want to order a Cute Cake from your bakery.")}`}
    target="_blank" 
    rel="noopener noreferrer" >
           <button className="px-6 py-3 bg-[#f79dc3] hover:bg-[#e08bb1] text-white rounded-full font-bold transition-all duration-300 shadow-md active:scale-95 uppercase tracking-wide text-sm cursor-pointer rounded-xl font-serif">
              Order Now
            </button> </a> </li>
    </ul>

<GiHamburgerMenu className='block md:hidden text-3xl cursor-pointer'
onClick={() => setIsOpen(true)} />

    {/* hamburger icon which will be shown on phone only */}
   <div className={`fixed top-0 right-0 h-full w-full z-50 bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>

{/* close icon menu hatany ke liye */}

<div className='flex justify-end p-10'>
<IoMdClose className='top-0 mx-5 text-3xl cursor-pointer '
onClick={() => setIsOpen(false)} />
</div>

{/* links on mobile view */}
 <ul className='flex flex-col whitespace-nowrap items-start justify-center gap-10 tracking-tighter text-[30px] mx-10 my-4 font-medium'>
        <li className='hover:text-[#f79dc3] font-serif tracking-wide' >HOME</li>
        <li className='hover:text-[#f79dc3] font-serif tracking-wide' >ABOUT</li>
        <li className='hover:text-[#f79dc3] font-serif tracking-wide' >SERVICES</li>
        <li className='hover:text-[#f79dc3] font-serif tracking-wide' >GALLERY</li>
        <li className='hover:text-[#f79dc3] font-serif tracking-wide' >CONTACT</li>
    </ul>
    </div>

    </header>    </div>
  )
}

export default Header
