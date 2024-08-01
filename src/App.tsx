// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CardDetail from './components/CardDetail';
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

