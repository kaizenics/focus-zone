import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';

function App() {
  return (
    
    <>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Login" element={<Login/>}/>
     <Route path="/Signup" element={<Signup/>}/>
     <Route path="/About" element={<About/>}/>
     </Routes>
    </>
  );
}

export default App;

