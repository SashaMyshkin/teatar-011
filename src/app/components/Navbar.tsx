"use client"
// components/NavBar.js
import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function NavBar() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open); // toggle width
    };


    return (

        <nav>
            <div >
                <span onClick={handleClick}>
                    <svg
                        className="w-12 h-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </span>
            </div>
            <div id="myNav" className={`h-full ${open ? "w-full" : "w-0"} fixed z-10 left-0 top-0 bg-black bg-opacity-90 overflow-x-hidden transition-width duration-500`}>
                <span className="absolute top-5 right-11 text-4xl" onClick={handleClick}>&times;</span>
                <div className="relative top-1/4 w-full text-center mt-8">
                    <a href="#" className='p-2 no-underline text-4xl text-white block transition duration-300'>Početna</a>
                    <a href="#" className='p-2 no-underline text-4xl text-white block transition duration-300'>Predstave</a>
                    <a href="#" className='p-2 no-underline text-4xl text-white block transition duration-300'>Ansambl</a>
                </div>
            </div>
        </nav>

    );
}
