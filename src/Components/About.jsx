import React from 'react'

function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-pink-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-400'> About</p>
            </div>
            <p className='text-xl mt-20'>
               I have been honing my skills in front-end development and Servicenow for two years now. My expertise lies in utilizing technologies such as React, Bootstrap, Servicenow ITSM, and portal to create top-notch solutions. 
             
            </p>

            <br/>
            <p className='text-xl'>
            Apart from coding, I find solace in writing poems, including web3 poetry. I am also an avid reader and derive inspiration from the works of philosophical giants such as Dostoevsky, Kafka, and Camus. Additionally, I enjoy exploring the rich cultural diversity reflected in postcolonial poems.
            </p>
        </div>
    </div>
  )
}

export default About