// src/components/HomePage.tsx
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection.tsx';
import CreatorsSection from '../components/CreatorsSection.tsx';
import AddCreator from '../components/AddCreator.tsx';
import './styles/HomePage.css';

const HomePage: React.FC = () => {
  const [showCreators, setShowCreators] = useState(true);

  return (
    <div className="homepage-container">
      <HeroSection setShowCreators={setShowCreators} />
      <div className="content-container">
        {showCreators ? <CreatorsSection /> : <AddCreator />}
      </div>
    </div>
  );
};

export default HomePage;

