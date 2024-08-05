// src/components/3DCard.tsx
import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaFacebook, FaTwitter, FaInstagram, FaTwitch, FaInfoCircle, FaEdit, FaTrash } from 'react-icons/fa';
import { CardItem } from '../types';
import './styles/3DCard.css';

interface CardProps {
  item: CardItem;
  onEdit: (id: number | string) => void;
  onDelete: (id: number | string) => void;
}

const Card: React.FC<CardProps> = ({ item, onEdit, onDelete }) => {
  const { image, title, description, socials, learn, id } = item;
  const ref = useRef<HTMLDivElement>(null);
  const [props, set] = useSpring(() => ({
    transform: 'perspective(300px) rotateY(0deg) rotateX(0deg) scale(1)',
  }));

  const calc = (x: number, y: number, rect: DOMRect) => [
    -(y - (rect.top + rect.height / 2)) / 100,
    (x - (rect.left + rect.width / 2)) / 100,
  ];

  const trans = (x: number, y: number) =>
    `perspective(300px) rotateX(${x}deg) rotateY(${y}deg) scale(1.1)`;

  const hasSocials = socials.facebook || socials.twitter || socials.instagram || socials.twitch;

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const [rotX, rotY] = calc(x, y, rect);
          set({ transform: trans(rotX, rotY) });
        }
      }}
      onMouseLeave={() => set({ transform: 'perspective(300px) rotateY(0deg) rotateX(0deg) scale(1)' })}
      style={props}
    >
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="card-gradient"></div>
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3>{title}</h3>
          {learn && (
            <a href={learn} target="_blank" rel="noopener noreferrer" className="info-icon">
              <FaInfoCircle />
            </a>
          )}
        </div>
        <p>{description}</p>
        <div className={`card-socials ${hasSocials ? 'active' : ''}`}>
          {socials.facebook && (
            <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="secondary">
              <FaFacebook />
            </a>
          )}
          {socials.twitter && (
            <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="secondary">
              <FaTwitter />
            </a>
          )}
          {socials.instagram && (
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="secondary">
              <FaInstagram />
            </a>
          )}
          {socials.twitch && (
            <a href={socials.twitch} target="_blank" rel="noopener noreferrer" className="secondary">
              <FaTwitch />
            </a>
          )}
        </div>
        <div className="card-actions">
          <button onClick={() => onEdit(id)} className="edit-button">
            <FaEdit />
          </button>
          <button onClick={() => onDelete(id)} className="delete-button">
            <FaTrash />
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default Card;
