import React, { useState } from 'react';
import './App.css';
import Home from './home';
import Header from './header';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header/>
        <Home/>
      <Footer/>
    </div>
  );
}

export default App;
