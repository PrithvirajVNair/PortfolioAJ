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
        <h1 className='text-center text-5xl text-violet-400 pt-20' style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Skills</h1>
        <h1 className='text-center text-xl text-gray-400' style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Tools & Tech</h1>
        <div className='py-20'>
            <div className='grid grid-cols-5 gap-7 p-5 mx-20'>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={C} alt="C"/>
                    <p>C</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={Python} alt="Python"/>
                    <p>Python</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={JS} alt="JS"/>
                    <p>JavaScript</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={MySQL} alt="MySQL"/>
                    <p>MySQL</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={Git} alt="Git"/>
                    <p>Git</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={Github} alt="Github"/>
                    <p>Github</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={Jira} alt="Jira"/>
                    <p>Jira</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={HTML} alt="HTML"/>
                    <p>HTML</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={CSS} alt="CSS"/>
                    <p>CSS</p>
                </div>
            </div>
        </div>
        <h1 className='text-center text-xl text-gray-400' style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Libraries</h1>
        <div className='py-20'>
            <div className='grid grid-cols-5 gap-7 p-5 mx-20'>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={TensorFlow} alt="TensorFlow"/>
                    <p>TensorFlow</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={PyTorch} alt="PyTorch"/>
                    <p>PyTorch</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={scikitlearn} alt="scikitlearn"/>
                    <p>scikit-learn</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={pandas} alt="pandas"/>
                    <p>pandas</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={numpy} alt="numpy"/>
                    <p>numpy</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={Matplotlib} alt="Matplotlib"/>
                    <p>Matplotlib</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={seaborn} alt="seaborn"/>
                    <p>seaborn</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={HuggingFace} alt="HuggingFace"/>
                    <p>Hugging Face</p>
                </div>
                <div className='rounded-3xl w-full flex flex-col justify-center items-center p-5 backdrop-blur-3xl bg-violet-500/5 hover:shadow-[0_0_20px_1px_#a78bfa]'>
                    <img width={'150px'} src={Keras} alt="Keras"/>
                    <p>Keras</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsSection