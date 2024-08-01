// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CardDetail from './pages/CardDetail';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card/:id" element={<CardDetail />} />
      </Routes>
    </div>
  );
};

export default App;

