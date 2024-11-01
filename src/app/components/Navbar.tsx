"use client";

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const handleClick = useCallback(() => {
        setOpen(prevOpen => !prevOpen);
    }, []); 

    const closeMenu = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <nav role="navigation">
            <div className='flex justify-between p-2'>
                <div className='w-16'>
                    <Image 
                        src="/logo.png" 
                        alt='Logo Teatra 011' 
                        width={794} 
                        height={794} 
                        className='rounded-full' 
                    />
                </div>
                <div className="flex items-center justify-center">
                    <div 
                        onClick={handleClick} 
                        className={`hover:text-amber-300 transition-colors duration-300 ${open ? "hidden" : ""}`} 
                        aria-expanded={open} 
                        aria-label="Otvorite navigacioni meni"
                    >
                        <svg
                            className="w-12 h-12 cursor-pointer"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-labelledby="nav-toggle"
                        >
                            <title id="nav-toggle">Otvorite navigacioni meni</title>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div id="myNav" className={`h-full ${open ? "w-full" : "w-0"} fixed z-10 right-0 top-0 bg-black bg-opacity-90 overflow-x-hidden transition-width duration-500`}>
                <div 
                    className="absolute top-5 right-11 text-4xl cursor-pointer hover:text-amber-300 transition-colors duration-300" 
                    onClick={handleClick} 
                    aria-label="Zatvorite navigacioni meni"
                >
                    &times;
                </div>
                <div className="relative top-1/4 w-full text-center mt-8">
                    <Link href="/" onClick={closeMenu} className='p-2 no-underline text-4xl text-white block hover:text-amber-300 transition-colors duration-300'>Početna</Link>
                    <Link href="/predstave" onClick={closeMenu} className='p-2 no-underline text-4xl text-white block hover:text-amber-300 transition-colors duration-300'>Predstave</Link>
                    <Link href="/ansambl" onClick={closeMenu} className='p-2 no-underline text-4xl text-white block hover:text-amber-300 transition-colors duration-300'>Ansambl</Link>
                </div>
            </div>
        </nav>
    );
}
