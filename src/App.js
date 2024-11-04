import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyState from './context/data/myState';
import Home from '../src/components/Home';
import Detail from './pages/Music_Detail/Detail';
import Header from './components/Header'
import Footer from './components/Player'
// import Footer from './components/Player1'
const App = () => {
  return (
    <div className='w-screen h-auto overflow-hidden '>
      <MyState>
        <Router>
          <Header />
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Detail/:name/:id' element={<Detail />} />
          </Routes>
        </Router>
        <Footer/>
      </MyState>
    </div>
  );
};

export default App;