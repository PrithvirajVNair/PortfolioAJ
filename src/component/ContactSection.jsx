import React from 'react'

const ContactSection = () => {
    return (
        <div id='contact' className='h-screen flex flex-col justify-center items-center'>
            <h1 className='text-center text-5xl text-violet-400 pt-20' style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Contact</h1>
            <h1 className='text-center text-xl text-gray-400' style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Socials</h1>
            <div className='mt-5'>
                    <a href='#' className='border rounded p-2 hover:bg-violet-400'><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href='#' className='border rounded p-2 ml-5 hover:bg-violet-400'><i class="fa-brands fa-github"></i></a>
            </div>
        </div>
    )
}

export default ContactSection