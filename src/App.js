import React from 'react';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import History from './Components/History';
import WordDetails from './Components/WordDetails';
import Navbar from './Components/Navbar';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History/>} />
        <Route path='/word/:word' element = {<WordDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
