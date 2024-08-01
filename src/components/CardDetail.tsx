// src/components/CardDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const CardDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [card, setCard] = useState<any>(null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const { data, error } = await supabase
          .from('cards')
          .select('*')
          .eq('id', id)
          .single();
        if (error) {
          throw error;
        }
        setCard(data);
      } catch (error) {
        console.error('Error fetching card:', error);
      }
    };

    fetchCard();
  }, [id]);

  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{card.title}</h2>
      <img src={card.image} alt={card.title} />
      <p>{card.description}</p>
      {/* Display other card details as needed */}
    </div>
  );
};

export default CardDetail;
