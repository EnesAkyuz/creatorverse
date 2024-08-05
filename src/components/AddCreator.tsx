// src/components/AddCreator.tsx
import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaTwitch } from 'react-icons/fa';
import { supabase } from '../supabaseClient';
import './styles/AddCreator.css';

const AddCreator: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    image: '',
    description: '',
    facebook: '',
    twitter: '',
    instagram: '',
    twitch: '',
  });
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    const { name, image, description, facebook, twitter, instagram, twitch } = formState;

    const { data, error } = await supabase
      .from('cards')
      .insert([
        {
          title: name,
          image,
          description,
          socials: {
            facebook,
            twitter,
            instagram,
            twitch,
          },
          learn: '', // If you have a learn link field
        },
      ])
      .select();

    if (error) {
      console.error('Error adding creator:', error.message);
      setMessage(`Error: ${error.message}`);
    } else {
      console.log('Creator added:', data);
      setMessage('Creator added successfully!');
      setFormState({
        name: '',
        image: '',
        description: '',
        facebook: '',
        twitter: '',
        instagram: '',
        twitch: '',
      });
    }
  };

  return (
    <div className="add-creator-container container">
      <h2>Add a New Creator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" placeholder="Enter the creator's name" value={formState.name} onChange={handleChange} required />
        </label>
        <label>
          Image
          <input type="url" name="image" placeholder="Provide a link to an image of your creator. Be sure to include the http://" value={formState.image} onChange={handleChange} required />
        </label>
        <label>
          Description
          <textarea name="description" placeholder="Provide a description of the creator. Who are they? What makes them interesting?" value={formState.description} onChange={handleChange} required></textarea>
        </label>
        <fieldset>
          <legend>Social Media Links</legend>
          <p>Provide at least one of the creator's social media links.</p>
          <label>
            <span><FaFacebook /> Facebook</span>
            <input type="text" name="facebook" placeholder="The creator's Facebook handle (without the @)" value={formState.facebook} onChange={handleChange} />
          </label>
          <label>
            <span><FaTwitter /> Twitter</span>
            <input type="text" name="twitter" placeholder="The creator's Twitter handle (without the @)" value={formState.twitter} onChange={handleChange} />
          </label>
          <label>
            <span><FaInstagram /> Instagram</span>
            <input type="text" name="instagram" placeholder="The creator's Instagram handle (without the @)" value={formState.instagram} onChange={handleChange} />
          </label>
          <label>
            <span><FaTwitch /> Twitch</span>
            <input type="text" name="twitch" placeholder="The creator's Twitch handle (without the @)" value={formState.twitch} onChange={handleChange} />
          </label>
        </fieldset>
        <button type="submit" className="contrast">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddCreator;
