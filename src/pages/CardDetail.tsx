// src/components/CardDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { CardItem } from '../types';
import './styles/CardDetail.css';

const CardDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [card, setCard] = useState<CardItem | null>(null);

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
        setCard(data as CardItem);
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
    <div className="card-detail">
      <h2>{card.title}</h2>
      <img src={card.image} alt={card.title} className="card-image" />
      <p>{card.description}</p>
      <div className="card-socials">
        {card.socials.facebook && <a href={card.socials.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>}
        {card.socials.twitter && <a href={card.socials.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
        {card.socials.instagram && <a href={card.socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
        {card.socials.twitch && <a href={card.socials.twitch} target="_blank" rel="noopener noreferrer">Twitch</a>}
      </div>
    </div>
  );
};

export default CardDetail;
