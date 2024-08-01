// src/components/CardList.tsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import Card from './3DCard';

const CardList: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      const { data, error } = await supabase
        .from('cards')
        .select('*');
      if (error) console.error('Error fetching cards', error);
      else setItems(data);
    };

    fetchCards();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        {items.map(item => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            socials={item.socials}
            learn={item.learn}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
