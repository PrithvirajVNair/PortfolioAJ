import React from 'react'

const ExperienceSection = () => {
  return (
    <div className='min-h-screen bg-black'>
        <h1 className='text-center text-2xl sm:text-5xl text-violet-400 pt-20' style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Experience</h1>
        <div className='py-20'>
            {/* experience 1 */}
            <div className='grid grid-cols-8'>
                <div></div>
                <div className='col-span-6 border w-full p-5 rounded-2xl'>
                    <div className='flex justify-between mb-10'>
                        <h2 className='text-sm sm:text-2xl font-bold'><i>icon</i> EXPERIENCE 1</h2>
                        <p className='text-sm sm:text-base text-gray-400'>xxx-xxx</p>
                    </div>
                    <p className='text-sm sm:text-base text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium officiis facilis beatae ducimus quisquam alias odio in saepe placeat, cumque ab neque reiciendis, cum ad odit praesentium, sunt reprehenderit maxime!</p>
                </div>
                <div></div>
            </div>
            {/* experience 2 */}
            <div className='grid grid-cols-8 my-10'>
                <div></div>
                <div className='col-span-6 border w-full p-5 rounded-2xl bg-violet-900/25'>
                    <div className='flex justify-between mb-10'>
                        <h2 className='text-sm sm:text-2xl font-bold'><i>icon</i> EXPERIENCE 1</h2>
                        <p className='text-sm sm:text-base text-gray-400'>xxx-xxx</p>
                    </div>
                    <p className='text-sm sm:text-base text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium officiis facilis beatae ducimus quisquam alias odio in saepe placeat, cumque ab neque reiciendis, cum ad odit praesentium, sunt reprehenderit maxime!</p>
                </div>
                <div></div>
            </div>
            {/* experience 3 */}
            <div className='grid grid-cols-8'>
                <div></div>
                <div className='col-span-6 border w-full p-5 rounded-2xl'>
                    <div className='flex justify-between mb-10'>
                        <h2 className='text-sm sm:text-2xl font-bold'><i>icon</i> EXPERIENCE 1</h2>
                        <p className='text-sm sm:text-base text-gray-400'>xxx-xxx</p>
                    </div>
                    <p className='text-sm sm:text-base text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium officiis facilis beatae ducimus quisquam alias odio in saepe placeat, cumque ab neque reiciendis, cum ad odit praesentium, sunt reprehenderit maxime!</p>
                </div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default ExperienceSection