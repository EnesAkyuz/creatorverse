/* src/pages/HomePage.tsx */
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import CreatorsSection from '../components/CreatorsSection';
import AddCreator from '../components/AddCreator';
import './styles/HomePage.css';

const HomePage: React.FC = () => {
  const [showCreators, setShowCreators] = useState(true);
  const [currentId, setCurrentId] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    setCurrentId(id);
    setShowCreators(false);
  };

  const handleAdd = () => {
    setCurrentId(null);
    setShowCreators(false);
  };

  return (
    <div className="homepage-container">
      <HeroSection setShowCreators={setShowCreators} onAdd={handleAdd} />
      <div className="content-container">
        {showCreators ? (
          <CreatorsSection onEdit={handleEdit} />
        ) : (
          <AddCreator id={currentId} />
        )}
      </div>
    </div>
  );
};

export default HomePage;

