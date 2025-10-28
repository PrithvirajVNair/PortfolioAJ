import React from 'react'
import AboutIMG from '../assets/about2.png'

const AboutSection = () => {
    return (
        <div id='about' className='min-h-screen'>
            <h1 className='text-center text-2xl sm:text-5xl text-violet-400 pt-20' style={{ fontFamily: '"Bebas Neue", sans-serif' }}>About Me</h1>
            <div className='grid grid-cols-5'>
                <div className='col-span-5 sm:col-span-2 flex justify-center items-center'>
                    <img className='' src={AboutIMG} alt="ABOUT" />
                </div>
                <div className=' col-span-5 sm:col-span-3 sm:p-20 p-5 sm:leading-10 text-sm sm:text-xl'>
                    <p>
                        I’m Albert Justin, a Machine Learning Engineer dedicated to building intelligent, scalable
                        solutions that address real-world challenges. My focus is on harnessing AI to create meaningful
                        impact for society and driving innovation in the tech world. With expertise in model
                        development, deployment, and optimization, I work to transform complex data into actionable
                        insights.
                    </p>
                    <p className='mt-10'>
                        Beyond AI, I’m deeply interested in robotics and chip technologies, exploring how these fields
                        can integrate with machine learning to advance automation, efficiency, and
                        human–technology collaboration.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection