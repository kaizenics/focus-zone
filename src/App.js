import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import './App.scss';

function App() {
  return (
    
    <>
    <Routes>
     <Route path="/" element={<Landing/>}/>
     <Route path="/Login" element={<Login/>}/>
     <Route path="/Signup" element={<Signup/>}/>
     <Route path="/Dashboard" element={<Dashboard/>}/>
     <Route path="/About" element={<About/>}/>
     <Route path="/Settings" element={<Settings/>}/>
     <Route path="/Profile" element={<Profile/>}/>
     </Routes>
    </>
  );
}

export default App;

