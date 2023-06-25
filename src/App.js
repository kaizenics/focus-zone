import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About';
import './App.scss';

function App() {
  return (
    
    <>
    <Routes>
     <Route path="/" element={<Landing/>}/>
     <Route path="/Login" element={<Login/>}/>
     <Route path="/Signup" element={<Signup/>}/>
     <Route path="/Home" element={<Home/>}/>
     <Route path="/About" element={<About/>}/>
     </Routes>
    </>
  );
}

export default App;

