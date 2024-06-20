import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignUp from './Components/LoginSignup/LoginSignUp';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {
  let heroData = [
    {text1:"진료의 혁신을", text2:"가져다주다"},
    {text1:"앞서 나가는", text2:"진료"},
    {text1:"집에서", text2:"간단하게"}
  ]
  const [heroCount,setHeroCount] = useState(2);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>
          <Background heroCount={heroCount}/>
          <Navbar/>
          <Hero
            heroData={heroData[heroCount]}
            heroCount={heroCount}
            setHeroCount={setHeroCount}
          />
          </div>}>
        </Route>
        <Route path="/loginSignUp" element={<LoginSignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;