// src/components/HomePage.tsx
import React, { useState } from 'react';
import HeroSection from './HeroSection';
import CreatorsSection from './CreatorsSection';
import AddCreator from './AddCreator';
import './HomePage.css';

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

