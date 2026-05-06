'use client';
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { name: "HOME", href: "/" },
        { name: "ABOUT", href: "/about" },
        { name: "SERVICES", href: "/services" },
        { name: "GALLERY", href: "/gallery" },
    ];

    return (
        // Header ko relative aur z-index dein taake ye normal flow mein rahe
        <div className="relative z-50 bg-white">
            <header className='w-full h-20 sm:h-24 flex justify-between items-center px-4 md:px-10  shadow-sm'>
                <img src="/Media/logo2.png" alt="Logo" className='h-32 lg:h-40 cursor-pointer' />

                {/* Desktop Menu */}
                <ul className='hidden md:flex items-center gap-8 text-md font-medium'>
                    {navLinks.map((link) => (
                        <li key={link.name} className='cursor-pointer hover:text-[#f79dc3] duration-300 transition-all font-serif tracking-wide'>
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                    <li>
                        <a href={`https://wa.me/923084978902?text=${encodeURIComponent("Assalam-o-Alaikum! I want to order a Cute Cake.")}`}
                            target="_blank" rel="noopener noreferrer">
                            <button className="px-3 py-2 bg-[#f79dc3] hover:bg-[#e08bb1] text-white rounded-xl font-semibold cursor-pointer transition-all duration-300 shadow-md active:scale-95 uppercase tracking-wide text-sm font-serif">
                                Order Now
                            </button>
                        </a>
                    </li>
                </ul>

                {/* Mobile Icon */}
                <GiHamburgerMenu 
                    className='block md:hidden text-3xl cursor-pointer'
                    onClick={() => setIsOpen(true)} 
                />

                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Overlay: z-[100] taake ye sab content ke upar aaye */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={closeMenu}
                                className="fixed inset-0 bg-black/40 backdrop-blur-md z-[100]"
                            />

                            {/* Sidebar: z-[110] taake ye overlay se bhi upar ho */}
                            <motion.div 
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="fixed top-0 right-0 h-full w-[75%] sm:w-[60%] bg-white shadow-2xl p-6 z-[110] overflow-y-auto"
                            >
                                <div className='flex justify-end mb-10'>
                                    <IoMdClose 
                                        className='text-3xl cursor-pointer text-slate-800'
                                        onClick={closeMenu} 
                                    />
                                </div>

                                <ul className='flex flex-col gap-8 text-xxl font-medium px-4'>
                                    {navLinks.map((link) => (
                                        <motion.li 
                                            key={link.name}
                                            whileTap={{ scale: 0.95 }}
                                            className='hover:text-[#f79dc3] font-serif tracking-wide border-b border-gray-100 pb-3'
                                        >
                                            <Link href={link.href} onClick={closeMenu}>
                                                {link.name}
                                            </Link>
                                        </motion.li>
                                    ))}
                                    
                                    <li className='mt-6'>
                                        <a href={`https://wa.me/923084978902?text=${encodeURIComponent("Assalam-o-Alaikum!")}`}
                                            target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                                            <button className="w-full py-2 px-2 bg-[#f79dc3] text-white rounded-xl text-md font-semibold shadow-lg font-serif uppercase tracking-wide active:scale-95 transition-all">
                                                Order Now
                                            </button>
                                        </a>
                                    </li>
                                </ul>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </header>
        </div>
    );
};

export default Header;