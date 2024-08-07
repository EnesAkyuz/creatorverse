/* src/components/HeroSection.tsx */
import React from 'react';
import './styles/HeroSection.css';

interface HeroSectionProps {
  setShowCreators: (show: boolean) => void;
  onAdd: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setShowCreators, onAdd }) => {
  return (
    <div className="hero">
      <h1>CREATORVERSE</h1>
      <div>
        <button className="secondary" onClick={() => setShowCreators(true)}>
          VIEW ALL CREATORS
        </button>
        <button className="secondary" onClick={onAdd}>
          ADD A CREATOR
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
