import React from 'react';
import './App.css';
import StackCard from './Components/StackCard';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navi from "./navbar/Navi";


function App() {
  return (
    <div className="App">
       {/* navbar */}
       <div className='NAVI'>
        <Navi />
      </div>
      <Routes>
        <Route path="/" element={<StackCard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
