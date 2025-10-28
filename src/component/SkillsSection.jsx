import React from 'react'
import C from '../assets/icons8-c-programming-480 (1).png'
import Python from '../assets/icons8-python-480 (1).png'
import JS from '../assets/icons8-javascript-480 (1).png'
import MySQL from '../assets/icons8-mysql-480.png'
import Git from '../assets/icons8-git-480.png'
import Github from '../assets/icons8-github-480.png'
import Jira from '../assets/icons8-jira-480.png'
import HTML from '../assets/icons8-html-480.png'
import CSS from '../assets/icons8-css-480.png'
import TensorFlow from '../assets/tenserflow-removebg-preview.png'
import PyTorch from '../assets/icons8-pytorch-480.png'
import scikitlearn from '../assets/images-removebg-preview.png'
import pandas from '../assets/icons8-pandas-480.png'
import numpy from '../assets/icons8-numpy-480.png'
import Matplotlib from '../assets/icons8-matplotlib-480.png'
import seaborn from '../assets/22799945-removebg-preview.png'
import HuggingFace from '../assets/icons8-hugging-face-480.png'
import Keras from '../assets/icons8-keras-480.png'

const SkillsSection = () => {


    // if you want to add new skills, then add inside the array of objects!
    // for Image to work you have to import it like you can see right now at the top
    // image files are currently stored in assets folder (every media files)

    // the below array of object belongs to TECH/TOOL section of Skills
    const skillTech = [
        { text: 'C', img: C },
        { text: 'Python', img: Python },
        { text: 'JavaScript', img: JS },
        { text: 'MySQL', img: MySQL },
        { text: 'Git', img: Git },
        { text: 'Github', img: Github },
        { text: 'Jira', img: Jira },
        { text: 'HTML', img: HTML },
        { text: 'CSS', img: CSS }
    ]


    // the below array of object belongs to LIBRARIES section of Skills
    const skillLibrary = [
        { text: 'TensorFlow', img: TensorFlow },
        { text: 'PyTorch', img: PyTorch },
        { text: 'scikit-learn', img: scikitlearn },
        { text: 'pandas', img: pandas },
        { text: 'numpy', img: numpy },
        { text: 'Matplotlib', img: Matplotlib },
        { text: 'seaborn', img: seaborn },
        { text: 'Hugging Face', img: HuggingFace },
        { text: 'Keras', img: Keras }
    ]


    return (
        <div id='skills'>
            <h1 className='text-center text-2xl sm:text-5xl text-violet-400 pt-20' style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Skills</h1>
            <h1 className='text-center text-sm sm:text-xl text-gray-400' style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Tools & Tech</h1>
            <div className='py-20'>
                <div className='grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-7 p-5 sm:mx-20'>
                    {
                        skillTech?.length > 0 ? (
                            skillTech.map(skills => (
                                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                                    <img width={'150px'} src={skills.img} alt="C" />
                                    <p className='text-xs sm:text-base'>{skills.text}</p>
                                </div>
                            ))

                        ) :
                            <p>Add Skills</p>
                    }
                </div>
            </div>
            <h1 className='text-center text-sm sm:text-xl text-gray-400' style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Libraries</h1>
            <div className='py-20'>
                <div className='grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-7 p-5 sm:mx-20'>
                    {
                        skillLibrary?.length > 0 ? (
                            skillLibrary.map(skills => (
                                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                                    <img width={'150px'} src={skills.img} alt="TensorFlow" />
                                    <p className='text-xs sm:text-base'>{skills.text}</p>
                                </div>
                            ))

                        )
                            :
                            <p>Add Skills</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default SkillsSection