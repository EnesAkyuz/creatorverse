/* src/components/CardList.tsx */
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import Card from './3DCard';
import { CardItem } from '../types';
import './styles/CardList.css';

interface CardListProps {
  onEdit: (id: string) => void;
}

const CardList: React.FC<CardListProps> = ({ onEdit }) => {
  const [items, setItems] = useState<CardItem[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const { data, error } = await supabase
          .from('cards')
          .select('*');
        if (error) {
          throw error;
        }
        setItems(data as CardItem[]);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);

  const handleDelete = async (id: number | string) => {
    try {
      const { error } = await supabase
        .from('cards')
        .delete()
        .eq('id', id)
        .select();

      if (error) {
        throw error;
      }

      setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  const cardListClass = items.length === 1 ? 'single-card' : items.length === 2 ? 'two-cards' : '';

  return (
    <div className={`card-list ${cardListClass}`}>
      {items.map(item => (
        <Card
          key={item.id}
          item={item}
          onEdit={() => onEdit(item.id.toString())}
          onDelete={() => handleDelete(item.id)}
        />
      ))}
    </div>
  );
};

export default CardList;
