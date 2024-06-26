import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignUp from './Components/LoginSignup/LoginSignUp';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import RealMain from './Components/RealMain/RealMain';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>
          <RealMain/>
          <Navbar/>
          </div>}>
        </Route>
        <Route path="/loginSignUp" element={<LoginSignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;