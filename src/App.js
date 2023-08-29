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
import MathData from './innersyllabus/math';
import data from "./data/mathsData";
import chemistry from "./data/chemistryData";
import Enroll from './enroll';
import ChemistryData from './innersyllabus/chemistry';

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
          <Route path="/math" element={<MathData data={data}/>} /> 
          <Route path="/chemistry" element={<ChemistryData chemisData={chemistry}/>} /> 

        </Routes>
      <Footer/>
      </div>
      </>
  );
}

export default App;
