// src/components/HeroSection.tsx
import React from 'react';
import './HeroSection.css';

interface HeroSectionProps {
  setShowCreators: (show: boolean) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setShowCreators }) => {
  return (
    <div className="hero">
      <h1>CREATORVERSE</h1>
      <div>
        <button className="secondary" onClick={() => setShowCreators(true)}>
          VIEW ALL CREATORS
        </button>
        <button className="secondary" onClick={() => setShowCreators(false)}>
          ADD A CREATOR
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
