// src/components/3DCard.tsx
import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaFacebook, FaTwitter, FaInstagram, FaTwitch, FaInfoCircle } from 'react-icons/fa';
import './styles/3DCard.css';

interface CardProps {
  image: string;
  title: string;
  description: string;
  socials: { facebook?: string; twitter?: string; instagram?: string; twitch?: string };
  learn: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, socials, learn }) => {
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
      className="card container"
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
      </div>
    </animated.div>
  );
};

export default Card;
