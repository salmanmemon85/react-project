import React, { useState } from 'react';
import './App.css';
import Home from './home';
import Header from './component/header';
import Footer from './component/footer';
import {  Route, Routes, } from 'react-router-dom';
import About from './about';
import Syllabus from './sylabus';
import Testimonial from './testimonial';
import Contact from './contact';
import Login from './login';

import Enroll from './enroll';


function App() {
 
  return (
    <>
    <div className=''>
      <Header/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/enroll" element={<Enroll />} /> 
        </Routes>
      <Footer/>
      </div>
      </>
  );
}

export default App;
