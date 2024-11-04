// import { useEffect, useState } from "react";
// import useSound from "use-sound";
// import song_data from '../asset/sond_data'
// const Footer = () => {
//   const [isPlay, setIsPlay] = useState(false);

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [time, setTime] = useState({
//     min: "",
//     sec: ""
//   });
//   const [currTime, setCurrTime] = useState({
//     min: "",
//     sec: ""
//   });

//   const [seconds, setSeconds] = useState();

//   const [qala, setQala] = useState(song_data[0].song)

//   const [play, { pause, duration, sound }] = useSound(qala);

//   useEffect(() => {
//     if (duration) {
//       const sec = duration / 1000;
//       const min = Math.floor(sec / 60);
//       const secRemain = Math.floor(sec % 60);
//       setTime({
//         min: min,
//         sec: secRemain
//       });
//     }
//   }, [isPlaying]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (sound) {
//         setSeconds(sound.seek([]));
//         const min = Math.floor(sound.seek([]) / 60);
//         const sec = Math.floor(sound.seek([]) % 60);
//         setCurrTime({
//           min,
//           sec
//         });
//       }
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [sound]);

//   const playingButton = () => {
//     if (isPlaying) {
//       pause();
//       setIsPlaying(false);
//     } else {
//       play();
//       setIsPlaying(true);
//     }
//   };

//   return (
//     <div className='sticky bottom-0 '>
//       <div className=' h-[5rem] bg-gradient-to-r from-slate-950 to-black w-screen justify-start gap-20 items-center flex  flex-row'>
//         {/* Left Photo - Artist - Song Name */}
//         <div className='flex flex-row items-center justify-start gap-3 mx-20 text-white'>
//           <div className=' rounded-md overflow-hidden h-[4rem] w-[4rem] justify-center items-center flex'>
//             <img src={song_data[0].photo} alt="" />
//           </div>
//           <div>
//             <h1 className='text-sm font-semibold text-slate-200'>{song_data[0].Artist}</h1>
//             <p className=' text-[0.8rem] text-slate-300'>Rubaliya</p>
//           </div>
//         </div>

//         {/* Right Song Play - Pause - Seek */}
//         <div className=' flex flex-col h-full bg-white/20 w-[50vw] justify-center items-center gap-4'>
//           {/* Play Control */}
//           <div className='flex flex-row items-center justify-between w-auto gap-4 h-suto '>
//             {/* loop */}
//             <svg className='' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" color='white' stroke-width="1.5" stroke="currentColor" class="size-6">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
//             </svg>
//             {/* previous */}
//             <svg onClick={()=>{ setQala(song_data[0].song)}}  xmlns="http://www.w3.org/2000/svg" color='white' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
//             </svg>
//             {isPlaying ?
//               //  {/* play */}

//               <svg onClick={() => { setIsPlaying(!isPlaying); playingButton() }} xmlns="http://www.w3.org/2000/svg" color='white' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
//               </svg>


//               :
//               // {/* pause */}
//               <svg onClick={() => { setIsPlaying(!isPlaying); playingButton() }} xmlns="http://www.w3.org/2000/svg" color='white' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
//               </svg>
//             }

//             {/* next */}
//             <svg onClick={()=>{ setQala(song_data[1].song)}} xmlns="http://www.w3.org/2000/svg" color='white' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
//             </svg>


//           </div>
//           {/* Play Bar */}
//           <div className="flex flex-row items-center justify-between gap-3 text-white">

//             <p>
//               {currTime.min}:{currTime.sec}
//             </p>
//             <input
//               type="range"
//               min="0"
//               max={duration / 1000}
//               default="0"
//               value={seconds}
//               className="timeline w-[40vw]"
//               onChange={(e) => {
//                 sound.seek([e.target.value]);
//               }}
//             />
//             <p>
//               {time.min}:{time.sec}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer



import React, { useContext, useRef, useEffect } from 'react'

import myContext from '../context/data/myContext'

import { useParams } from 'react-router-dom'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import song_data from '../asset/sond_data';
import { useNavigate, Link } from 'react-router-dom'

const Player = () => {
  const context = useContext(myContext);
  const { state,
    myColor,
    nameOfMy,
    songName,
    songSRC,
    setSongName,
    setSongSRC,
    trackIndex,
    handleClickPrevious,
    handleClickNext,
    activeIndex,
    setAactiveIndex,
    songId,
    setSongId,
    length,
    setLength,
    songIsPlay,
    setSongIsPlay,


    handleClickPrevious1,
    handleClickNext1,


  } = context

  const { name, id } = useParams();


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


  // const navigate = useNavigate();

  return (
    <div className='fixed z-[100] bottom-0 flex flex-col items-center justify-between '>
      {/* for laptop */}
      <div>
        {/* <h1>{songName}{activeIndex}</h1> */}
        <div className='flex-col items-center justify-between bg-black pr-10 pl-2  w-[100vw] h-auto gap-0 bg-black/90 flex'>
          <div className='flex flex-row items-center justify-between w-full h-auto text-white'>
            <div className='h-[8rem] flex w-[30vw] justify-start pl-2 flex-row items-center bg-black/90'>
              <div onClick={() => { }} className=' lg:flex hidden h-[7rem] w-[7rem] justify-center items-center rounded-md overflow-hidden'>
                {
                  songIsPlay ?

                    <video
                      className='object-cover w-[29rem] rounded-lg h-[70vh] '
                      // style={{ maxWidth: "100%", width: "800px", margin: "0 auto",  objectFit: 'cover'  }}
                      playsInline
                      loop
                      muted
                      autoPlay
                      // controls
                      alt="All the devices"
                      src={song_data[songId - 1]?.playlist[activeIndex]?.video}
                      ref={videoEl}
                    />
                    :
                    <img className='object-cover w-full h-full' src={song_data[songId - 1]?.photo} alt="" />
                }
              </div>
              <div className='flex-col items-start justify-start hidden gap-2 pl-2 lg:flex '>
                <h1 className='text-xl font-bold '>{song_data[songId - 1]?.name}</h1>
                <h1>{song_data[songId - 1]?.playlist[activeIndex]?.playlist_song_name}</h1>
              </div>
            </div>
            <div className='flex flex-col items-center justify-between w-screen px-2 lg:w-auto lg:px-0'>
              <div className='hidden lg:flex flex-row h-auto gap-3 max-w-auto min-w-[16rem] justify-between items-center'>
                <h1 className='text-xl font-thin '>{song_data[songId - 1]?.name}  ({activeIndex + 1} / {length}) ||  </h1>
                <h1>-</h1>
                <h1 className='text-xl font-thin '>{song_data[songId - 1]?.playlist[activeIndex]?.playlist_song_name}</h1>
              </div>
              {/* header={`Now playing: ${songName} - ${activeIndex} - ${songId}`} */}
              <AudioPlayer
                // style={{ width: "300px" }}
                // style={{ borderRadius: "1rem",  }}
                className=' lg:w-[68vw] w-full'
                style={{
                  height: "8rem", width: '78vw', color: 'white', backgroundColor: "rgb(0, 0, 0, 0.9)"
                }}
                // style={{
                //   width: "68vw",
                //   height: "8rem", color: 'white', backgroundColor: "rgb(0, 0, 0, 0.9)"
                // }}
                autoPlay
                // layout="horizontal"
                // src={song_data1[trackIndex].src}
                src={song_data[songId - 1]?.playlist[activeIndex]?.song}
                // onPlay={(e) => { console.log("onPlay"); setSongIsPlay(!songIsPlay) }}
                onPlay={(e) => { console.log("onPlay"); }}
                showSkipControls={true}
                showJumpControls={true}
                // header={`Now playing: ${song_data1[trackIndex].name}`}
                // header={`Playlist -  ${song_data[songId - 1]?.name} - (${activeIndex + 1} / ${length}) || Song - ${song_data[songId - 1]?.playlist[activeIndex]?.playlist_song_name} `}
                // header={`Now playing: ${songName} - ${activeIndex} - ${songId}`}
                // footer="Madw with ❤️ by Subham Patnaik"
                onClickPrevious={handleClickPrevious1}
                onClickNext={handleClickNext1}
                onEnded={handleClickNext1}
              // other props here
              />
            </div>
          </div>

          <div className='items-center justify-center hidden w-screen h-auto font-semibold bg-black/90 text-slate-200'>Made with ❤️ by Subham Patnaik</div>
        </div>
      </div>

      {/* for mobile */}
      {/* <div className='flex flex-col items-center justify-between w-screen h-auto bg-gradient-to-t from-black to-slate-900/20 gap-3-3 '>
        <div className='flex flex-row items-center justify-between w-screen h-auto px-2 text-white '>
            <h1 className='text-xl font-bold '>{song_data[songId - 1]?.name}</h1>
            <h1 className=' text-rose-200'>{song_data[songId - 1]?.playlist[activeIndex]?.playlist_song_name}</h1>
            </div>
        <div className=' h-[5rem] flex-row justify-center items-center flex w-screen bg-gradient-to-r from-slate-900 to-sky-950'>
      
          <div className='flex flex-col items-center justify-center w-auto gap-1 text-white'>

            <div className=' h-[5rem] w-auto'>
              <AudioPlayer
                style={{ width: "100vw", height: "5rem", color: 'white', backgroundColor: "rgb(0, 0, 0, 0)" }}
                autoPlay
                src={song_data[songId - 1]?.playlist[activeIndex]?.song}
                onPlay={(e) => console.log("onPlay")}
                showSkipControls={true}
                showJumpControls={true}

                onClickPrevious={handleClickPrevious1}
                onClickNext={handleClickNext1}
                onEnded={handleClickNext1}
              />
            </div>
          </div>
        </div>

      </div> */}

    </div>
  )
}

export default Player
