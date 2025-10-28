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
  return (
    <div id='skills'>
        <h1 className='text-center text-2xl sm:text-5xl text-violet-400 pt-20' style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Skills</h1>
        <h1 className='text-center text-sm sm:text-xl text-gray-400' style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Tools & Tech</h1>
        <div className='py-20'>
            <div className='grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-7 p-5 sm:mx-20'>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={C} alt="C"/>
                    <p className='text-xs sm:text-base'>C</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={Python} alt="Python"/>
                    <p className='text-xs sm:text-base'>Python</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={JS} alt="JS"/>
                    <p className='text-xs sm:text-base'>JavaScript</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={MySQL} alt="MySQL"/>
                    <p className='text-xs sm:text-base'>MySQL</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={Git} alt="Git"/>
                    <p className='text-xs sm:text-base'>Git</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={Github} alt="Github"/>
                    <p className='text-xs sm:text-base'>Github</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={Jira} alt="Jira"/>
                    <p className='text-xs sm:text-base'>Jira</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={HTML} alt="HTML"/>
                    <p className='text-xs sm:text-base'>HTML</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={CSS} alt="CSS"/>
                    <p className='text-xs sm:text-base'>CSS</p>
                </div>
            </div>
        </div>
        <h1 className='text-center text-sm sm:text-xl text-gray-400' style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Libraries</h1>
        <div className='py-20'>
            <div className='grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-7 p-5 sm:mx-20'>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={TensorFlow} alt="TensorFlow"/>
                    <p className='text-xs sm:text-base'>TensorFlow</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={PyTorch} alt="PyTorch"/>
                    <p className='text-xs sm:text-base'>PyTorch</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={scikitlearn} alt="scikitlearn"/>
                    <p className='text-xs sm:text-base'>scikit-learn</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={pandas} alt="pandas"/>
                    <p className='text-xs sm:text-base'>pandas</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={numpy} alt="numpy"/>
                    <p className='text-xs sm:text-base'>numpy</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={Matplotlib} alt="Matplotlib"/>
                    <p className='text-xs sm:text-base'>Matplotlib</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={seaborn} alt="seaborn"/>
                    <p className='text-xs sm:text-base'>seaborn</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img  width={'150px'} src={HuggingFace} alt="HuggingFace"/>
                    <p className='text-xs sm:text-base'>Hugging Face</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={Keras} alt="Keras"/>
                    <p className='text-xs sm:text-base'>Keras</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsSection