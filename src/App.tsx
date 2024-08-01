// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardList from './components/CardList';
const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CardList />} />
      </Routes>
    </div>
  );
};

export default App;


