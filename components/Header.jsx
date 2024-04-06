"use client"
import { Bars3BottomRightIcon, XCircleIcon } from '@heroicons/react/24/solid';
// import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [message, setMessage] = useState(false);
  return (
    <div>
      <nav className="w-full border bg-gray-900 border-b-1 border-gray-600 fixed top-0 left-0 right-0 z-50">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                {/* <Image src="./newsticker.webp" alt='Logo' width={80} height={40}/> */}
                <img src="./newsticker.webp" alt="logo" style={{width:'80px',height:'40px'}} />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <XCircleIcon className='h-6 w-6 text-gray-300'/>
                  ) : (
                    <Bars3BottomRightIcon className='h-6 w-6 text-gray-300'/>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="text-gray-300  hover:text-white rounded-md px-3 py-2 text-md font-medium text-center hover:bg-gray-800 ">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="text-gray-300  hover:text-white rounded-md px-3 py-2 text-md font-medium text-center hover:bg-gray-800">
                  <Link href="/bharatbolega" onClick={() => setNavbar(!navbar)}>
                    Bharat Bolega
                  </Link>
                </li>
                <li className="text-gray-300  hover:text-white rounded-md px-3 py-2 text-md font-medium text-center hover:bg-gray-800">
                  <Link href="/raisinahill" onClick={() => setNavbar(!navbar)}>
                    Raisina Hill
                  </Link>
                </li>
                <li className="text-gray-300  hover:text-white rounded-md px-3 py-2 text-md font-medium text-center hover:bg-gray-800">
                  <Link href="/gcaffe" onClick={() => setNavbar(!navbar)}>
                    G Caffe
                  </Link>
                </li>
                <li className="text-gray-300  hover:text-white rounded-md px-3 py-2 text-md font-medium text-center hover:bg-gray-800">
                  <Link href="/agency" onClick={() => setNavbar(!navbar)}>
                    Agency
                  </Link>
                </li>
                <li className="text-gray-300  hover:text-white rounded-md px-3 py-2 text-md font-medium text-center hover:bg-gray-800">
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='message border-2 text-gray-300 border-gray-300 px-4 py-2 rounded-full hover:bg-gray-800 hover:text-white' onClick={()=> setMessage(!message)}>
            <button className='' >Get Involved</button>
          </div>

        </div>
      </nav>
        <div className={`bg-gray-900 text-gray-300 h-auto w-96 fixed top-20 right-8 p-4 z-20 overflow-hidden ${message ? 'block':'hidden'}`}>
                    <div>
                      <p>Be part of India News Ticker as a dedicated member, working with journalists and experts.</p>
                      <hr
                        class="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-25 dark:opacity-100" />
                       <p>India is multicultural society. INT attempts to understand the diverse people and cultures it serves, keeping people informed, entertained and connected via creativity and excellence.</p> 
                    </div>
                    {/* <h4>Be part of India News Ticker as a dedicated member, working with journalists and experts.</h4><br/>
                    <h4>India is multicultural society. INT attempts to understand the diverse people and cultures it serves, keeping people informed, entertained and connected via creativity and excellence.</h4> */}
        </div>
    </div>
  )
}

export default Header