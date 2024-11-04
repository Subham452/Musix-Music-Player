import React, { useContext, useState, useEffect } from 'react'
import Layout from './Layout'
import myContext from '../context/data/myContext';
import song_data from '../asset/sond_data'
import Recommended from './Recommended';
const Home = () => {
  const context = useContext(myContext);
  const { name, nameOfMy, myColor } = context

  const [colorIndex, setColorIndex] = useState(0);
  const color = [
    {
      color: "from-green-500/55",
    },
    {
      color: "from-slate-500/55",
    },
    {
      color: "from-red-500/55",
    },
    {
      color: "from-yellow-500/55",
    },
    {
      color: "from-sky-500/55",
    },
    {
      color: "from-pink-500/55",
    },
    {
      color: "from-orange-500/55",
    },
    {
      color: "from-blue-500/55",
    },
    // {
    //   color:"from-green-500/55",
    // },
  ]

  // useEffect(() => {
  //   return () => {
  setInterval(() => {
    if (colorIndex !== color?.length - 1) {
      setColorIndex(colorIndex + 1)
    }
    else {
      setColorIndex(0)
    }
  }, 100500);
  //   };
  // }, []);
  return (
    <Layout>
      <div>
        <div className=' no-scrollbar h-[100vh] overflow-y-scroll overflow-hidden w-[100vw] lg:w-[93vw] bg-slate-700'>
          <div className='h-auto transition-all  duration-300 no-scrollbar min-h-screen lg:p-2 overflow-y-scroll w-screen lg:w-[93vw] bg-slate-900 flex flex-col justify-between items-center'>
            {/* <div className='rounded-md  flex flex-col justify-start items-center p-2 h-96 w-[90vw] bg-gradient-to-b from-green-500/55 to-slate-900'> */}
            <div className={`rounded-md w-screen flex flex-col justify-start items-center lg:p-2 min:h-96 h-auto lg:w-[90vw] bg-gradient-to-b transition-all duration-300 from-slate-900 lg:${color[colorIndex]?.color} to-slate-900`}>
              {/* Home bar menu */}
              <div className='fixed mt-[4rem] no-scrollbar flex flex-row items-stretch justify-start w-full h-auto ml-[12vw] '>
                <div className=' h-[3.6rem] flex flex-row justify-start gap-4 items-center w-auto px-3 bg-slate-100/20 rounded-md'>
                  <div className='items-center justify-center w-auto h-auto px-4 py-1 text-black bg-white rounded-full'>All</div>
                  <div className='items-center justify-center w-auto h-auto px-4 py-1 text-black bg-white rounded-full'>Music</div>
                  <div className='items-center justify-center w-auto h-auto px-4 py-1 text-black bg-white rounded-full'>Podcast</div>
                </div>
              </div>


              {/* recommeded */}
              <Recommended />
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Home
