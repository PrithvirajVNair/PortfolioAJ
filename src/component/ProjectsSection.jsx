import React from 'react'
import ProjectImg from '../assets/prj.jpg'

const ProjectsSection = () => {
    return (
        <div id='project' className='min-h-screen bg-black'>
            <h1 className='text-center text-5xl text-violet-400 pt-20' style={{ fontFamily: '"Bebas Neue", sans-serif' }}>My Works</h1>
            <div className='grid grid-cols-10 py-20'>
                <div></div>
                <div className='col-span-4'>
                    <img className='rounded-2xl' src={ProjectImg} alt="" />
                </div>
                <div className='col-span-4 p-5'>
                    <h1 className='text-4xl font-bold'>01</h1>
                    <h1 className='text-4xl font-bold py-5'>Title</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia asperiores ullam minus laboriosam totam iusto qui. Ex, eveniet ea. Magni quibusdam blanditiis, id odit nam expedita in ipsa voluptas qui.</p>
                    <div className='mt-5'>
                        <a href='#'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div></div>
            </div>
            <div className='grid grid-cols-10 py-20'>
                <div></div>
                <div className='col-span-4 p-5'>
                    <h1 className='text-4xl font-bold'>02</h1>
                    <h1 className='text-4xl font-bold py-5'>Title</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia asperiores ullam minus laboriosam totam iusto qui. Ex, eveniet ea. Magni quibusdam blanditiis, id odit nam expedita in ipsa voluptas qui.</p>
                    <div className='mt-5'>
                        <a href='#'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div className='col-span-4'>
                    <img className='rounded-2xl' src={ProjectImg} alt="" />
                </div>
                <div></div>
            </div>
            <div className='grid grid-cols-10 py-20'>
                <div></div>
                <div className='col-span-4'>
                    <img className='rounded-2xl' src={ProjectImg} alt="" />
                </div>
                <div className='col-span-4 p-5'>
                    <h1 className='text-4xl font-bold'>03</h1>
                    <h1 className='text-4xl font-bold py-5'>Title</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia asperiores ullam minus laboriosam totam iusto qui. Ex, eveniet ea. Magni quibusdam blanditiis, id odit nam expedita in ipsa voluptas qui.</p>
                    <div className='mt-5'>
                        <a href='#'><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default ProjectsSection