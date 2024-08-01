// src/components/CardList.tsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Link } from 'react-router-dom';
import Card from './3DCard';
import './CardList.css';

const CardList: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const { data, error } = await supabase
          .from('cards')
          .select('*');
        if (error) {
          throw error;
        }
        setItems(data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="card-list">
      {items.map(item => (
        <Link to={`/card/${item.id}`} key={item.id}>
          <Card
            image={item.image}
            title={item.title}
            description={item.description}
            socials={item.socials}
            learn={item.learn}
          />
        </Link>
      ))}
    </div>
  );
};

export default CardList;
