import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Registration from './Registration';
import Login from './login';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
