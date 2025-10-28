import React from 'react'
import { useState } from 'react';

const Header = () => {

    const navBar = [
        { link: '#', text: 'Home' },
        { link: '#about', text: 'About Me' },
        { link: '#skills', text: 'Skills' },
        { link: '#project', text: 'My Works' },
        { link: '#contact', text: 'Contact Me' }
    ]

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <div className='fixed w-full' style={{ zIndex: '999' }}>
                <div className='grid grid-cols-3 p-5 bg-[#11071F]/10 text-white relative backdrop-blur-xl'>
                    <div>
                        <a className='text-2xl font-bold underline underline-offset-2' href='#' style={{ fontFamily: ' "Michroma", sans-serif' }}>A<span className='text-violet-500 underline underline-offset-2'>J</span><span className='text-gray-500 underline underline-offset-2'>.</span></a>
                    </div>
                    <div>
                        <ul className='hidden sm:flex gap-7 absolute left-1/2 -translate-x-1/2 font-semibold' style={{ fontFamily: ' "Michroma", sans-serif' }}>
                            {
                                navBar.map((items, index) => (
                                    <li key={items.text} className='hover:text-violet-200 hover:underline underline-offset-2'>
                                        <a href={items.link}>{items.text}</a>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                    <div>
                        <div className='hidden sm:block absolute right-10'>
                            <a href='#' className='text-xl border border-purple-950 rounded p-2 hover:bg-violet-400' style={{ fontFamily: ' "Michroma", sans-serif' }}>Resume</a>
                        </div>
                        <div className='sm:hidden absolute right-10'>
                            <button onClick={toggleMenu} className='absolute' ><i class={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i></button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-5'>
                    <div></div>
                    <ul className={`sm:hidden ${menuOpen && 'border border-violet-400'} backdrop-blur-2xl text-center rounded-2xl col-span-3 leading-8`}>
                        {
                            menuOpen && (
                                navBar.map((items, index) => (
                                    <li key={items.text} className='hover:text-violet-200 hover:underline underline-offset-2'>
                                        <a href={items.link}>{items.text}</a>
                                    </li>
                                ))
                            )
                        }
                    </ul>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default Header