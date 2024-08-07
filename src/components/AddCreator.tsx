import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaTwitch } from 'react-icons/fa';
import { supabase } from '../supabaseClient';
import { useParams, useNavigate } from 'react-router-dom';
import './styles/AddCreator.css';

const AddCreator: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id) {
      setIsEditing(true);
      const fetchCreator = async () => {
        const { data, error } = await supabase
          .from('cards')
          .select()
          .eq('id', id)
          .single();

        if (error) {
          console.error('Error fetching creator:', error.message);
          setMessage(`Error: ${error.message}`);
        } else {
          setFormState({
            name: data.title,
            image: data.image,
            description: data.description,
            facebook: data.socials.facebook,
            twitter: data.socials.twitter,
            instagram: data.socials.instagram,
            twitch: data.socials.twitch,
          });
        }
      };

      fetchCreator();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    const { name, image, description, facebook, twitter, instagram, twitch } = formState;

    const formattedFacebook = facebook ? `https://www.facebook.com/${facebook}` : '';
    const formattedTwitter = twitter ? `https://www.x.com/${twitter}` : ''; // Changed to x.com
    const formattedInstagram = instagram ? `https://www.instagram.com/${instagram}` : '';
    const formattedTwitch = twitch ? `https://www.twitch.tv/${twitch}` : '';

    let result;
    if (isEditing) {
      result = await supabase
        .from('cards')
        .update({
          title: name,
          image,
          description,
          socials: {
            facebook: formattedFacebook,
            twitter: formattedTwitter,
            instagram: formattedInstagram,
            twitch: formattedTwitch,
          },
        })
        .eq('id', id)
        .select();
    } else {
      result = await supabase
        .from('cards')
        .insert([
          {
            title: name,
            image,
            description,
            socials: {
              facebook: formattedFacebook,
              twitter: formattedTwitter,
              instagram: formattedInstagram,
              twitch: formattedTwitch,
            },
            learn: '', // If you have a learn link field
          },
        ])
        .select();
    }

    const { data, error } = result;

    if (error) {
      console.error('Error adding/updating creator:', error.message);
      setMessage(`Error: ${error.message}`);
    } else {
      console.log('Creator added/updated:', data);
      setMessage('Creator added/updated successfully!');
      setFormState({
        name: '',
        image: '',
        description: '',
        facebook: '',
        twitter: '',
        instagram: '',
        twitch: '',
      });
      navigate('/');
    }
  };

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from('cards')
      .delete()
      .eq('id', id)
      .select();

    if (error) {
      console.error('Error deleting creator:', error.message);
      setMessage(`Error: ${error.message}`);
    } else {
      console.log('Creator deleted:', data);
      setMessage('Creator deleted successfully!');
      navigate('/');
    }
  };

  return (
    <div className="add-creator-container container">
      <h2 className="title">{isEditing ? 'Edit Creator' : 'Add a New Creator'}</h2>
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
            <span><FaTwitter /> X</span>
            <input type="text" name="twitter" placeholder="The creator's X handle (without the @)" value={formState.twitter} onChange={handleChange} />
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
        <button type="submit" className="contrast">{isEditing ? 'Update' : 'Submit'}</button>
        {isEditing && <button type="button" className="contrast" onClick={handleDelete}>Delete</button>}
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddCreator;