// src/App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Vite-React TypeScript App</h1>  
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </div>
  );
};

export default App;
