import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

function Footer  () {
  const links = [
    {
        id: 1,
        child: (
            <>
                <FaLinkedin size={30} />
            </>
        ),
        href: 'https://www.linkedin.com/in/roopal-sharma-78bb3b16b'
     
    },
    {
        id: 2,
        child: (
            <>
                <FaGithub size={30} />
            </>
        ),
        href: 'https://github.com/roo-giggle'
       

    },
    {
        id: 3,
        child: (
            <>
                <HiOutlineMail size={30} />
            </>
        ),
        href: 'mailto:roopalsharma701@gmail.com'
     

    },
    {
        id: 4,
        child: (
            <>
                <BsFillPersonLinesFill size={30} />
            </>
        ),
        href: '/Roopal_sharma_resumee.pdf',
        download: true,
    }
];
  return (
    <div>
     
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex justify-center">© 2023 
          All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 justify-evenly">

  
              {links.map(({id, child, href, download}) => (
                  <li 
                  key={id}
                 >
                      <a
                          href={href}
                          className=' flex justify-center items-center first-letter:mr-4 hover:underline md:mr-6' 
                          download={download}
                          target="_blank"
                          rel="noreferrer"
                          >
                              
                              {child}   
                      </a>
                      
                  </li>
              ))}




          </ul>
</div>
</footer>
</div>
  )
}
    
 


export default Footer