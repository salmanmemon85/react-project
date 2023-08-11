import React, { useState } from 'react';
import './App.css';
import Home from './home';
import Header from './component/header';
import Footer from './component/footer';
import {  Route, Routes, } from 'react-router-dom';
import About from './about';
import Syllabus from './sylabus';
import Testimonial from './testimonial';


function App() {
  return (
    <>
      <Header/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
      <Footer/>
      </>
  );
}

export default App;
