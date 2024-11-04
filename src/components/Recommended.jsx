import React, { useContext, useEffect, useState, useRef } from 'react'
import recommended from '../asset/sond_data'

import { useNavigate } from 'react-router-dom'

import ReactPlayer from "react-player";
import MyState from '../context/data/myState';
import myContext from '../context/data/myContext'

const Recommended = () => {
  const navigate = useNavigate();

  const context = useContext(myContext);
  const { state,
    activeIndex,
    setActveIndex,
    myColor,
    nameOfMy,
    songName,
    songSRC,
    setSongName,
    setSongSRC,
    trackIndex,
    handleClickPrevious,
    handleClickNext,
    songId,
    setSongId,
    length,
    setLength,
    setSongIsPlay,
    songIsPlay,



  } = context

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);



  return (
    <div>
      {/* Laptop */}
      <div className='items-start flex-col hidden lg:flex mb-[8rem] w-screen pt-4 text-white mt-[10rem] justify-start lg:w-full no-scrollbar h-auto min-h-screen'>
        <h1 className='pb-4 ml-4 text-2xl font-semibold font-custom2 no-scrollbar'>Recommended for today</h1>
        <div className=' justify-center items-center flex w-screen lg:w-[90vw] overflow-hidden h-auto '>
          {/* <div className='flex flex-row w-auto h-auto gap-10 px-10 overflow-x-scroll no-scrollbar '> */}
          <div className='grid w-full h-auto grid-rows-1 gap-10 px-10 overflow-x-scroll md:grid-col-4 lg:grid-cols-5 no-scrollbar '>
            {

              recommended.map((i, idx) => {
                const { name, havePlaylist, Artist, song, playlist, playlist_name, id } = i
                return (
                  <div>
                    <div key={i}>
                      <div onClick={() => { havePlaylist ? navigate(`/Detail/${name}/${id}`) : navigate('/kk'); setSongIsPlay(false) }} className=' cursor-pointer h-[18.5rem] hover:bg-sky-800 transition-all duration-200 bg-slate-950 flex-col overflow-hidden w-[14rem] rounded-md justify-center items-center bg-gradient-to-t from-white/10 flex to-red-500/10'>
                        <div className='w-full overflow-hidden h-[14rem]'>
                          <img className='object-cover w-full h-full ' src={recommended[idx]?.photo} alt="" />
                        </div>
                        {/* <div className=' flex bg-gradient-to-t from-black to-transparent via-transparent flex-col items-start justify-end w-[15rem] h-[15rem] p-2 bg-black-0 '> */}
                        <div className='flex flex-row items-center justify-between w-full h-[4.5rem]'>
                          <div className='flex flex-col items-start justify-end w-4/6 p-2 text-sm bg-gradient-to-t from-sky-950/55 to-slate-950 h-[4.5rem] '>
                            <h1 className=' font-semibold text-[0.8rem] pt-1'>{recommended[idx]?.name}</h1>
                            <h1 className=' text-[0.7rem] text-slate-200'>{recommended[idx]?.Artist}</h1>
                            <h1 className=' text-[0.7rem] text-rose-200'>{recommended[idx]?.playlist_name}</h1>
                          </div>
                          <div className='flex items-center justify-center w-2/6 h-full transition-all duration-300 bg-gradient-to-t from-sky-950/55 to-slate-950 '>
                            <div className=' h-[3rem] flex justify-center items-center w-[3rem] bg-white rounded-full'>
                              <svg xmlns="http://www.w3.org/2000/svg" color='black' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                              </svg>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className=' lg:hidden pb-[10rem] min-h-[80vh] w-screen bg-white/0 justify-start items-start pt-[7rem] flex flex-col'>
        <div className='grid w-full h-auto grid-cols-1 grid-rows-1 gap-10 px-10 overflow-x-scroll frid no-scrollbar '>
          {

            recommended.map((i, idx) => {
              const { name, havePlaylist, Artist, song, playlist, playlist_name, id } = i
              return (
                <div>
                  <div key={i}>
                    <div onClick={() => { havePlaylist ? navigate(`/Detail/${name}/${id}`) : navigate('/kk') }} className=' cursor-pointer h-[22.5rem] hover:bg-sky-800 transition-all mx-auto duration-200 bg-slate-950 flex-col overflow-hidden w-[18rem] rounded-md justify-center items-center bg-gradient-to-t from-white/10 flex to-red-500/10'>
                      <div className='w-full overflow-hidden h-[18rem]'>
                        <img className='object-cover w-full h-full ' src={recommended[idx]?.photo} alt="" />
                        <div className='hidden items-center justify-center w-[25rem] h-[70vh] overflow-hidden'>
                          {/* <video
                                        className='object-cover w-full h-full '
                                        // style={{ maxWidth: "100%", width: "800px", margin: "0 auto",  objectFit: 'cover'  }}
                                        playsInline
                                        loop
                                        muted
                                        autoPlay
                                        // controls
                                        alt="All the devices"
                                        src={song_data[id - 1]?.playlist[activeIndex]?.video}
                                        ref={videoEl}
                                    /> */}
                        </div>

                      </div>
                      {/* <div className=' flex bg-gradient-to-t from-black to-transparent via-transparent flex-col items-start justify-end w-[15rem] h-[15rem] p-2 bg-black-0 '> */}
                      <div className='flex flex-row items-center justify-between w-full h-[4.5rem]'>
                        <div className='flex flex-col items-start justify-end w-4/6 p-2 text-sm bg-gradient-to-t from-sky-950/55 to-slate-950 h-[4.5rem] '>
                          <h1 className=' font-semibold text-[0.8rem] pt-1'>{recommended[idx]?.name}</h1>
                          <h1 className=' text-[1rem] text-slate-200'>{recommended[idx]?.Artist}</h1>
                          <h1 className=' text-[0.7rem] text-rose-200'>{recommended[idx]?.playlist_name}{i.id}</h1>
                        </div>
                        <div className='flex items-center justify-center w-2/6 h-full transition-all duration-300 bg-gradient-to-t from-sky-950/55 to-slate-950 '>
                          <div className=' h-[3rem] flex justify-center items-center w-[3rem] bg-white rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" color='black' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Recommended
