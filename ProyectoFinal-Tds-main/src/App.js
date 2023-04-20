import React from 'react';
import {Routes, Route } from 'react-router-dom';

//css
import './App.css';

//importing pages

import Home from '../src/pages/Home/home';
import About from '../src/pages/Abbout/Abbout';
import Proyects from '../src/pages//Projects/proyects';
import Services from '../src/pages/Services/Services';

import {Card,Button}  from 'react-bootstrap'

// use this piece of  code to import a page 
//import ome from './pages/home'


function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="proyects" element={<Proyects/>} />
        <Route path="services" element={<Services/>} />
    </Routes>
</div>
   
  );
}

export default App;