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
import math from "./data/mathsData";
import chemistry from "./data/chemistryData";
import physic from "./data/physics";
import biology from "./data/biology";
import Enroll from './enroll';
import ChemistryData from './innersyllabus/chemistry';
import PhysicData from './innersyllabus/physic';

import BiologyData from './innersyllabus/biology';


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
          <Route path="/syllabus/math" element={<MathData data={math}/>} /> 
          <Route path="/syllabus/chemistry" element={<ChemistryData chemisData={chemistry}/>} /> 
          <Route path="/syllabus/physic" element={<PhysicData physicData={physic}/>} /> 
          <Route path="/syllabus/biology" element={<BiologyData biology={biology}/>} /> 
        </Routes>
      <Footer/>
      </div>
      </>
  );
}

export default App;
