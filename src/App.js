import React, { useState } from 'react';
import './App.css';
import Home from './home';
import Header from './component/header';
import Footer from './component/footer';
import {  Route, Routes, } from 'react-router-dom';
import About from './about';

function App() {
  return (
    <>
      <Header/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>
      <Footer/>
      </>
  );
}

export default App;
