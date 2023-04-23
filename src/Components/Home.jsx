import React from 'react'
import HeroImage from '../Info/heroImg.jpg'
import { MdOutlineKeyboardDoubleArrowRight  } from 'react-icons/md'
import {Link} from 'react-scroll';

function Home() {
    return (
        <div name="home" className='flex h-screen w-full bg-gradient-to-b from-black via-black to-pink-800 '>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-5xl font-bold text-white'>
                       I am a Front-end developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I have two 2 years of experience with Front-end and servicenow.
                        Currently, I am working with technologies such as React, Bootstrap,
                         Servicenow(ITSM and portal both)
                    </p>
                    <div>
                        <Link to ="portfolio" smooth duration={500}  className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                        from-pink-500 to-cyan-500 cursor-grab'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardDoubleArrowRight size={25} className='ml-1'/>
                            </span>
                         
                        </Link>
                        </div>
                </div>
                <div>
                    <img src={HeroImage} alt='profile' className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>
            </div>
        </div>
    )
}

export default Home