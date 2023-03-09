
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import React from 'react'
// import { useState, useEffect } from 'react';
// import axios from 'react';
import { Route, Routes } from 'react-router-dom';
import Beers from './pages/Beers';
import BeerDetails from './pages/BeerDetails';


function App() {



  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<><NavBar /> <Beers /></>} />
          <Route path="/beers/:beerId" element={<><NavBar /> <BeerDetails /></>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
