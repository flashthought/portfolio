import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="h-screen -top-40 -left-10 md:-left-32 md:-top-20" fill='white' />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill='purple' />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill='blue' />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative z-10 flex justify-center my-20">
        <div className="w-full max-w-[89vw] md:max-w-3xl lg:max-w-5xl flex flex-col items-center justify-center">
            <h2 className='text-xs tracking-widest text-center uppercase text-blue-100 max-w-80'>
              Innovative Biomedical Engineering Solutions
            </h2>

            <TextGenerateEffect
                className="text-center text-[40px] md:text-5xl lg:text-6xl w-full lg:max-w-[900px] leading-tight"
                words="Transforming Healthcare through Advanced Technology"
            />

            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                Hi, I&apos;m Samuel Kyei Agyemang, a Biomedical Engineer based in Ghana
            </p>

            <div className="flex justify-center w-full">
              <a href="#about" className="w-full md:w-auto">
                <MagicButton
                  title="Show my work" 
                  icon={<FaLocationArrow />} 
                  position='right'　　 　 　 　
                />
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
