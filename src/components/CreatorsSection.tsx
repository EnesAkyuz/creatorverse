// src/components/CreatorsSection.tsx
import React from 'react';
import CardList from './CardList';
import './styles/CreatorsSection.css';

const CreatorsSection: React.FC = () => {
  return (
    <div className="creators-container">
      <h2>Meet Our Creators</h2>
      <CardList />
    </div>
  );
};

export default CreatorsSection;
