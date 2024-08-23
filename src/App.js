import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import SignPage from './Sign';  
import HomePage from './HomePage';
import StudentDashboard from './StudentDashboard';

function App() {
  return (
    <Routes>
      <Route path="/sign" element={<SignPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<StudentDashboard />} />
    </Routes> 
  );
}

export default App;
