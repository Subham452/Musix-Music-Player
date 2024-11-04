import React, { useState } from 'react';
import MyContext from './myContext';
import song_data from '../../asset/sond_data'; // Correct the import path

const MyState = (props) => {
    const state = {
        name: 'monika'
    };

    const myColor = 'red';
    const nameOfMy = 'monika';

    // Player Data
    const [songName, setSongName] = useState('');
    const [songSRC, setSongSRC] = useState('');
    const [trackIndex, setTrackIndex] = useState(0);
    
    const [activeIndex, setActveIndex] = useState(0);
    const [songId, setSongId] = useState(1);

    const [songIsPlay, setSongIsPlay] = useState(false);

    // useParems id unable to use in player.jsx so we store id value of Detail page in songId 
    
    const song_data1 = [
        {
            name: "Memories",
            src: "https://www.bensound.com/bensound-music/bensound-memories.mp3"
        },
        {
            name: "Creative Minds",
            src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"
        },
        {
            name: "Acoustic Breeze",
            src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3"
        },
    ];

    // Playlist Lenghth
    const [length, setLength] = useState(song_data[songId]?.playlist?.length)
    // setLength(song_data[index-1]?.playlist?.length); 

    const handleClickPrevious = () => {
        setTrackIndex(currentTrack => 
            currentTrack === 0 ? song_data1?.length - 1 : currentTrack - 1
        );
    };

    const handleClickNext = () => {
        setTrackIndex(currentTrack => 
            currentTrack < song_data1?.length - 1 ? currentTrack + 1 : 0
        );
    };

    const handleClickNext1 = () => {
      if(activeIndex === length-1){
        // setActveIndex(activeIndex+1)
        setActveIndex(0)
      }
      else{
        if(activeIndex >= length-1 ){
          setActveIndex(0)
        }
        else{
          setActveIndex(activeIndex+1)
        }
      }
    }

    const handleClickPrevious1 = () => {
      if(activeIndex === 0){
        setActveIndex(length-1)//6
      }
      else{
        if(activeIndex !== 0){
          setActveIndex(activeIndex-1)
        }
        else{
          setActveIndex(length-1)
        }
      }
    }

    return (
        <MyContext.Provider value={{
            state,
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
            setActveIndex,
            songId,
            setSongId,
            length,
            setLength,
            songIsPlay,
            setSongIsPlay,

            handleClickNext1,
            handleClickPrevious1,

        }}>
            {props.children}
        </MyContext.Provider>
    );
};

export default MyState;
