// src/components/3DCard.tsx
import React from 'react';
import { animated } from 'react-spring';
import { use3dEffect } from 'use-3d-effect';
import { FaFacebook, FaTwitter, FaInstagram, FaTwitch } from 'react-icons/fa';

interface CardProps {
  image: string;
  title: string;
  description: string;
  socials?: { facebook?: string; twitter?: string; instagram?: string; twitch?: string };
  learn: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, socials, learn }) => {
  const ref = React.useRef(null);
  const { style, ...mouseHandlers } = use3dEffect(ref);

  return (
    <animated.div
      ref={ref}
      style={{
        ...style,
        width: '300px',
        height: '400px',
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        ...mouseHandlers,
      }}
    >
      <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1rem',
      }}>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {socials?.facebook && <a href={socials.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook color="white" /></a>}
          {socials?.twitter && <a href={socials.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter color="white" /></a>}
          {socials?.instagram && <a href={socials.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram color="white" /></a>}
          {socials?.twitch && <a href={socials.twitch} target="_blank" rel="noopener noreferrer"><FaTwitch color="white" /></a>}
        </div>
        <a href={learn} style={{ color: 'white', textDecoration: 'underline' }}>Learn more</a>
      </div>
    </animated.div>
  );
};

export default Card;


