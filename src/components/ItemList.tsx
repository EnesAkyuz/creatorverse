// src/components/ItemList.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

const ItemList: React.FC = () => {
  return (
    <div>
      <h2>Item List</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {items.map(item => (
          <Link to={`/item/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
            <div
              style={{
                border: '1px solid #ccc',
                padding: '1rem',
                borderRadius: '8px',
                textAlign: 'center',
                width: '100px'
              }}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
