
import './App.css';
import React from 'react';

import Home from './pages/Home';
import Problem from './pages/Problem';
import Solutions from './pages/Solutions';
import Stats from './pages/Stats';

import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import DonationSuite from './pages/DonationSuite';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Problem' element={<Problem />} />
        <Route path='Stats' element={<Stats />} />
        <Route path='Solutions' element={<Solutions />} />
        <Route path='Donations' elements={<DonationSuite />} />
      </Routes>
    </div>
  );
}

export default App;
