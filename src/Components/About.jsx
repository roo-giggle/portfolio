import React from 'react'

function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-pink-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-400'> About</p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam praesentium numquam ipsum cumque cupiditate laudantium nihil quo at nesciunt assumenda repudiandae, tempora minima voluptate rem illum consectetur. Sit, facilis!
            </p>

            <br/>
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem architecto minima saepe voluptatum ratione aliquam laboriosam repudiandae recusandae, dignissimos velit neque earum possimus doloribus distinctio harum eaque dicta. Porro, reiciendis?
            </p>
        </div>
    </div>
  )
}

export default About