import React from 'react'

import htmldemo from '../Info/html.png';
import cssdemo from '../Info/css.png';
import jsdemo from '../Info/javascript.png';
import reactdemo from '../Info/react.png';
import snow from '../Info/snow.png';
import mongodemo from '../Info/mongo.png';
import gitdemo from '../Info/github.png';
import bootstrapdemo from '../Info/bootsatrap.png';


const Experience = () => {
    const techs = [
        {
            id:1,
            src: htmldemo,
            title: 'HTML',
            style: 'shadow-orange-500'

        },
        {
            id:2,
            src: cssdemo,
            title: 'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src: jsdemo,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src: reactdemo,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id:5,
            src: snow,
            title: 'ServiceNow',
            style: 'shadow-white'
        },
        {
            id:6,
            src: mongodemo,
            title: 'MongoDB',
            style: 'shadow-green-400'
        },
        {
            id:7,
            src: gitdemo,
            title: 'GitHub',
            style:'shadow-gray-400'
        },
        {
            id:8,
            src: bootstrapdemo,
            title: 'Bootstrap',
            style:'shadow-gray-600'
        }
    ];
  return (
    <div name='experience' className=' bg-gradient-to-b from-pink-800 to-black w-full h-screen'>
        <div className=' max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className=' text-4xl font-bold border-b-4 border-pink-500 p-2 inline'>Experience</p>
                <p className=' py-6'> These are all the technology I've worked with</p>
            </div>
            <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                techs.map(({id,src, title,style})=>(
                 <div key={id}
                 className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                      <img src={src} alt="" className=' w-20 mx-auto' />
              <p className=' mt-4'>{title}</p>
                </div>
               ))}
               
            </div>
        </div>
    </div>
  )
}

export default Experience