// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddCreator from './components/AddCreator';
import CardDetail from './pages/CardDetail';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddCreator />} />
        <Route path="/edit/:id" element={<AddCreator />} />
        <Route path="/card/:id" element={<CardDetail />} />
      </Routes>
    </div>
  );
};

export default App;

