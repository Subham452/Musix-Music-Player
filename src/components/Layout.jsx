import React from 'react'
import Header from './Header'
import Footer from './Player'
import Leftbart from './Leftbart'

const Layout = ({children}) => {
  return (
    <div className=' contents no-scrollbar'>
        {/* <Header /> */}
        <div className='flex flex-row items-center justify-between no-scrollbar font-custom2 '>
          <Leftbart />
          {children}
        </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
