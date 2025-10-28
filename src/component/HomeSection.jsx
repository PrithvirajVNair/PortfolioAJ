import React from 'react'

const HomeSection = () => {
    return (
        <div id='#' className='grid grid-cols-3 h-screen sm:pt-50 sm:px-20 pt-40 px-5'>
            <div className='sm:col-span-2 col-span-3'>
                <p className='text-sm py-2 sm:text-2xl' style={{ fontFamily: '"Michroma", sans-serif' }}>Hello! I'm <span className='text-violet-400'>Albert Justin</span>.</p>
                <p className='text-3xl sm:text-7xl sm:py-2'>Machine Learning <br /> <span className='text-violet-400'>Engineer</span></p>
                <p className='text-gray-400 text-2xl sm:text-6xl py-2'>Based in India.</p>
                <p className='py-2 text-sm sm:text-xl'>I'm Albert, a Machine Learning Engineer turning raw data into intelligent,real-world solutions. Skilled in model development, deployment, and optimization, I build scalable AI systems that make an impact.</p>
                <div className='mt-3'>
                    <a href='#' className='border rounded p-2 absolute hover:bg-violet-400'><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href='#' className='border rounded p-2 absolute ml-15 hover:bg-violet-400'><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    )
}

export default HomeSection