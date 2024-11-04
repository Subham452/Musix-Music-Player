import React, { useContext, useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import song_data from '../../asset/sond_data';
import Leftbar from '../../components/Leftbart'
import MyState from '../../context/data/myState';
import myContext from '../../context/data/myContext'
import "react-h5-audio-player/lib/styles.css";



const Detail = () => {
    const { name, id } = useParams();
    const [playIcon, setPlayIcon] = useState(false);
    const [playIconActive, setPlayIconActive] = useState(false);

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
            {/* for laptop */}
            <div className='lg:flex hidden flex-col no-scrollbar items-center justify-center w-full h-auto overflow-hidden text-white mb-[8rem] bg-slate-950'>
                Detail {name} {id}
                <div className='flex items-center no-scrollbar justify-between w-[screen] h-auto flow-row'>
                    <Leftbar />
                    <div className={`flex flex-row pr-10 no-scrollbar  items-start  justify-between  w-[93vw] h-auto  bg-gradient-to-b to-slate-950 via-slate-700/30 ${song_data[id - 1]?.bg_color} `}>
                        <div className={`flex mt-[2.5rem] flex-col items-center justify-start w-[50vw] min-h-screen overscroll-y-scroll`}>
                            <div className='flex flex-col no-scrollbar overflow-y-scroll items-center justify-start w-[50vw] h-auto min-h-screen '>
                                <div className=' w-full h-[18rem] to-sky-500/0 bg-gradient-to-r from-sky-800/0 flex justify-start items-center pl-[1.2rem] '>
                                    <div className=' shadow-black/30 shadow-xl h-[16rem] w-[16rem] rounded-md overflow-hidden justify-center items-center flex'>
                                        <img className='object-cover w-full h-full ' src={song_data[id - 1].photo} alt="" />
                                    </div>
                                    <div className='flex flex-col items-start justify-end w-[30vw] h-full gap-0 pb-3 pl-6'>
                                        <h1 className='font-semibold '>Album</h1>
                                        <h1 className='text-4xl font-bold '>{song_data[id - 1].name}</h1>
                                        <h1 className='text-xl font-semibold text-slate-300 '>{song_data[id - 1].Artist}</h1>
                                    </div>
                                </div>
                                {/* Song - Playlist */}
                                <div className='flex items-center justify-center w-full h-auto px-2 mt-10 no-scrollbar min-h-96'>
                                    <div className='flex flex-col items-start justify-start w-full h-auto gap-2 p-2 rounded-lg no-scrollbar min-h-96 '>
                                        {

                                            song_data.map((song) => (
                                                <div key={song.id}>
                                                    {/* <h2>{song.name} - {song.Artist}</h2> */}
                                                    {/* {song.havePlaylist && song.playlist && ( */}
                                                    {song.name === name && (
                                                        <div className='flex flex-col items-center justify-center gap-2 font-custom2 no-scrollbar'>
                                                            {song?.playlist.map((track, index) => (
                                                                <div onClick={() => { setSongId(id); setActveIndex(index); setLength(song_data[id - 1]?.playlist?.length); setSongName(track.playlist_song_name); setSongSRC(track.song) }} onMouseEnter={() => { setPlayIcon(true); setPlayIconActive(index) }} onMouseLeave={() => { setPlayIcon(false) }} className=' h-[3rem] pr-10 gap-6 flex-row flex w-[50vw] bg-gradient-to-r justify-between items-center rounded-md pl-2 hover:to-white/10 transition-all duration-300 to-transparent from-white/10' key={index}>
                                                                    <div className='flex flex-row items-center justify-between gap-6 '>
                                                                        {/* index */}
                                                                        <h1>{index + 1}</h1>
                                                                        {/* Song Name */}
                                                                        <h1>{track.playlist_song_name}</h1>
                                                                    </div>
                                                                    {/* play */}
                                                                    <div className={` justify-center items-center ${activeIndex === index ? "opacity-100" : " opacity-0"}  flex h-[2.5rem] w-[2.5rem] bg-slate-900/20 rounded-full shadow-lg `}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" color={`${song.playIconColor}`} stroke="currentColor" class="size-11">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                                                        </svg>

                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>))

                                        }
                                    </div>
                                </div>
                            </div>
                            {/* Audio Player */}
                            <h1>{songName}</h1>
                        </div>

                        {/* Video Play */}
                        <div className='fixed right-4'>
                            <div className=' h-[70vh] mt-[3.5rem]  flex justify-center items-center object-cover rounded-lg overflow-hidden w-[29vw] ml-10 bg-white/0 '>

                                <div className='absolute rounded-b-lg flex flex-col justify-end pb-3 items-start pl-2 w-[29rem] h-[70vh] bg-gradient-to-t from-slate-950 to-transparent'>
                                    <h1 className='text-5xl font-bold font-custom2'>{song_data[id - 1].playlist[activeIndex].playlist_song_name}</h1>
                                    <h1 className='mt-2 font-semibold text-slate-300'>{song_data[id - 1].name}</h1>
                                    <h1 className='text-sm font-semibold text-rose-300 '>{song_data[id - 1].Artist}</h1>
                                </div>
                                <div className='flex items-center justify-center w-[29rem] h-[70vh] overflow-hidden'>
                                    <video
                                        className='object-cover w-[29rem] rounded-lg h-[70vh] '
                                        // style={{ maxWidth: "100%", width: "800px", margin: "0 auto",  objectFit: 'cover'  }}
                                        playsInline
                                        loop
                                        muted
                                        autoPlay
                                        // controls
                                        alt="All the devices"
                                        src={song_data[id - 1]?.playlist[activeIndex]?.video}
                                        ref={videoEl}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* for mobile */}
            <div className={`flex lg:hidden  items-start pt-20 justify-start w-screen h-screen bg-gradient-to-b ${song_data[id - 1]?.bg_color} to-slate-950 via-slate-900`}>
                {/*  */}
                <div className='fixed flex items-center justify-center w-screen h-auto'>
                    <div className='  mx-auto h-[20rem] rounded-lg w-[90vw] bg-black'>
                        <div className='absolute text-white rounded-b-lg flex flex-col justify-end items-start pl-2 pb-2 w-[90vw] h-[20rem] bg-gradient-to-t from-slate-950 to-transparent'>
                            <h1 className='text-4xl font-bold font-custom2'>{song_data[id - 1].playlist[activeIndex].playlist_song_name}</h1>
                            <h1 className='mt-2 font-semibold text-slate-300'>{song_data[id - 1].name}</h1>
                            <h1 className='text-sm font-semibold text-rose-300 '>{song_data[id - 1].Artist}</h1>
                        </div>
                        <div className='flex items-center justify-center w-[90vw] h-[20rem] overflow-hidden'>
                            <video
                                className='object-cover w-full h-full rounded-lg '
                                // style={{ maxWidth: "100%", width: "800px", margin: "0 auto",  objectFit: 'cover'  }}
                                playsInline
                                loop
                                muted
                                autoPlay
                                // controls
                                alt="All the devices"
                                src={song_data[id - 1]?.playlist[activeIndex]?.video}
                                ref={videoEl}
                            />
                        </div>
                    </div>
                </div>

                {/* Music */}

                <div className='flex z-[100] w-screen mt-[21rem] items-start justify-start h-screen overflow-hidden overflow-y-scroll bg-white/0'>
                    <div className=' h-[7rem] flex  bg-gradient-to-t from-transparent to-slate-900 w-screen  absolute'>

                    </div>
                    <div className={`flex flex-col items-center justify-start w-full ${song_data[id - 1]?.playlist?.length <= 5
                        ? (song_data[id - 1]?.playlist?.length <= 5 ? "-mt-[30vh]" : "-mt-[50vh]")
                        : "mt-[6rem]"
                        } h-auto gap-20 overflow-y-scroll ${song_data[id - 1]?.playlist?.length <= 10 ? "pb-[50vh]" : "pb-[1rem]"} bg-white/0 `}>
                        {

                            song_data.map((song) => (
                                <div key={song.id} className='items-start justify-start h-auto '>
                                    {song.name === name && (
                                        <div className='flex flex-col items-start justify-start w-full h-auto gap-2 bg-red-100/0 font-custom2 no-scrollbar'>
                                            {song?.playlist.map((track, index) => (
                                                <div onClick={() => { setSongId(id); setActveIndex(index); setLength(song_data[id - 1]?.playlist?.length); setSongName(track.playlist_song_name); setSongSRC(track.song) }} onMouseEnter={() => { setPlayIcon(true); setPlayIconActive(index) }} onMouseLeave={() => { setPlayIcon(false) }} className=' h-[3rem] pr-10 gap-6 flex-row flex text-white w-[90vw] bg-gradient-to-r justify-between items-center rounded-md pl-2 hover:to-white/10 transition-all duration-300 to-transparent from-white/10' key={index}>
                                                    <div className='flex flex-row items-center justify-between gap-6 '>
                                                        {/* index */}
                                                        <h1>{index + 1}</h1>
                                                        {/* Song Name */}
                                                        <h1>{track.playlist_song_name}</h1>
                                                    </div>
                                                    {/* play */}
                                                    <div className={` justify-center items-center ${activeIndex === index ? "opacity-100" : " opacity-0"}  flex h-[2.5rem] w-[2.5rem] bg-slate-900/20 rounded-full shadow-lg `}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" color={`${song.playIconColor}`} stroke="currentColor" class="size-11">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                                        </svg>

                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>))

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
