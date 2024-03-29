import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './views/Homepage'; // adjust the path if needed

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/cancel=true" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;