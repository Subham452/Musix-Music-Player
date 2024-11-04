import React, { useContext, useRef, useEffect } from 'react'

import myContext from '../context/data/myContext'

import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()

  const context = useContext(myContext);
  const {
    songIsPlay,
    setSongIsPlay,


  } = context
  
  return (
    <div className='fixed top-0 z-[100] w-screen h-auto overflow-hidden '>
      {/* For Laptop */}
      <div className=' text-white bg-gradient-to-r from-slate-900  to-sky-950 h-[4rem] w-screen justify-between  items-center lg:flex hidden flex-row lg:px-20'>
        <Link to='/' onClick={()=>{ setSongIsPlay(true);}}><h1 className='pl-20 font-semibold lg:text-2xl font-custom3' OnClick={() => { navigate() }}>Musix</h1></Link>
        <div className='h-full lg:w-[60vw] justify-between items-center flex flex-row gap-3'>
          <div className='flex-row items-center justify-between hidden gap-3 md:flex lg:flex '>
            <input placeholder='What do you want to play?' className=' placeholder:text-white/55 placeholder:font-custom2 placeholder:pl-2 pl-2 h-[3rem] w-[40vw] bg-white/10 rounded-full' type="text" />
            <div className=' h-[3rem] w-[3rem] justify-center items-center flex-row flex rounded-lg bg-white/10'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
     
            </div>
          </div>
          <div className=' h-[2.4rem] w-[2.4rem] justify-center items-center flex flex-row rounded-full bg-white text-black'>
            A
          </div>
        </div>
      </div>

      {/* For Mobile */}
      <div className=' h-[4rem] text-white bg-gradient-to-r from-slate-900  to-sky-950  w-screen justify-between items-center flex lg:hidden flex-row px-[1rem] '>
        <Link to='/'><h1 className='ml-[1rem] text-lg font-semibold font-custom3' OnClick={() => { navigate() }}>Musix</h1></Link>
        <div className=' flex flex-row justify-between items-center gap-[1rem]'>
          <div className=' h-[3rem] w-[3rem] justify-center items-center flex-row flex rounded-lg bg-white/5'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>

          <div className=' h-[2.4rem] w-[2.4rem] justify-center items-center flex flex-row rounded-full bg-white/5 text-white font-semibold'>
            A
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header
