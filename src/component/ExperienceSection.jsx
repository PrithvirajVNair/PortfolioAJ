import React from 'react'

const ExperienceSection = () => {


    //edit the following array of objects to add or remove Experience
    const experiennce = [
        {
            icon: 'icon',
            title: 'EXPERIENCE 1',
            fromYear: 'xxx',
            toYear: 'xxx',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium officiis facilis beatae ducimus quisquam alias odio in saepe placeat, cumque ab neque reiciendis, cum ad odit praesentium, sunt reprehenderit maxime!'
        },
        {
            icon: 'icon',
            title: 'EXPERIENCE 2',
            fromYear: 'xxx',
            toYear: 'xxx',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium officiis facilis beatae ducimus quisquam alias odio in saepe placeat, cumque ab neque reiciendis, cum ad odit praesentium, sunt reprehenderit maxime!'
        },
        {
            icon: 'icon',
            title: 'EXPERIENCE 3',
            fromYear: 'xxx',
            toYear: 'xxx',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium officiis facilis beatae ducimus quisquam alias odio in saepe placeat, cumque ab neque reiciendis, cum ad odit praesentium, sunt reprehenderit maxime!'
        }
    ]

    return (
        <div className='min-h-screen bg-black'>
            <h1 className='text-center text-2xl sm:text-5xl text-violet-400 pt-20' style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Experience</h1>
            <div className='py-20'>
                {/* experience 1 */}
                <div className='grid grid-cols-8'>
                    {
                        experiennce?.length > 0 ? (
                            experiennce?.map((exp,index) => (
                                <>
                                    <div></div>
                                    <div className={`col-span-6 border w-full p-5 rounded-2xl my-3 ${index%2!=0 && 'bg-violet-900/15'}`}>
                                        <div className='flex justify-between mb-10'>
                                            <h2 className='text-sm sm:text-2xl font-bold'><i>{exp.icon}</i> {exp.title}</h2>
                                            <p className='text-sm sm:text-base text-gray-400'>{exp.fromYear}-{exp.toYear}</p>
                                        </div>
                                        <p className='text-sm sm:text-base text-gray-400'>{exp.description}</p>
                                    </div>
                                    <div></div>
                                </>
                            ))
                        )
                            :
                            <p>Add Experience</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection