// src/App.tsx
import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';  // Import useParams here
import HomePage from './pages/HomePage';
import AddCreator from './components/AddCreator';
import CardDetail from './pages/CardDetail';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddCreator id={null} />} />
        <Route path="/edit/:id" element={<AddCreatorWrapper />} />
        <Route path="/card/:id" element={<CardDetail />} />
      </Routes>
    </div>
  );
};

// Wrapper to extract id from route params and pass it to AddCreator
const AddCreatorWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the id from the route params
  return <AddCreator id={id || null} />;
};

export default App;
