// src/components/CardList.tsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import Card from './3DCard';
import { CardItem } from '../types';
import './styles/CardList.css';

const CardList: React.FC = () => {
  const [items, setItems] = useState<CardItem[]>([]);
  const navigate = useNavigate();

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

  const handleEdit = (id: number | string) => {
    navigate(`/edit/${id}`);
  };

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

  return (
    <div className="card-list">
      {items.map(item => (
        <Card
          key={item.id}
          item={item}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default CardList;
