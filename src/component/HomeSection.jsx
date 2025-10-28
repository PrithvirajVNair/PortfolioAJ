import React from 'react'

const HomeSection = () => {
    return (
        <div id='#' className='grid grid-cols-3 h-screen pt-50 px-20'>
            <div className='col-span-2'>
                <p className='text-2xl py-2' style={{ fontFamily: '"Michroma", sans-serif' }}>Hello! I'm <spam className='text-violet-400'>Albert Justin</spam>.</p>
                <p className='text-7xl py-2'>Machine Learning <br /> <spam className='text-violet-400'>Engineer</spam></p>
                <p className='text-gray-400 text-6xl py-2'>Based in India.</p>
                <p className='py-2 text-xl'>I'm Albert, a Machine Learning Engineer turning raw data into intelligent,real-world solutions. Skilled in model development, deployment, and optimization, I build scalable AI systems that make an impact.</p>
                <div className='mt-3'>
                    <a href='#' className='border rounded p-2 absolute hover:bg-violet-400'><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href='#' className='border rounded p-2 absolute ml-15 hover:bg-violet-400'><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    )
}

export default HomeSection