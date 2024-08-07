import React from 'react';
import CardList from './CardList';
import './styles/CreatorsSection.css';

interface CreatorsSectionProps {
  onEdit: (id: string) => void;
}

const CreatorsSection: React.FC<CreatorsSectionProps> = ({ onEdit }) => {
  return (
    <div className="creators-container">
      <h2>Meet Our Creators</h2>
      <CardList onEdit={onEdit} />
    </div>
  );
};

export default CreatorsSection;
