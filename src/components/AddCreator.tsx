// src/components/AddCreator.tsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaTwitch} from 'react-icons/fa';
import './styles/AddCreator.css';

const AddCreator: React.FC = () => {
  return (
    <div className="add-creator-container container">
      <h2>Add a New Creator</h2>
      <form>
        <label>
          Name
          <input type="text" name="name" placeholder="Enter the creator's name" required />
        </label>
        <label>
          Image
          <input type="url" name="image" placeholder="Provide a link to an image of your creator. Be sure to include the http://" required />
        </label>
        <label>
          Description
          <textarea name="description" placeholder="Provide a description of the creator. Who are they? What makes them interesting?" required></textarea>
        </label>
        <fieldset>
          <legend>Social Media Links</legend>
          <p>Provide at least one of the creator's social media links.</p>
          <label>
            <span><FaFacebook /> Facebook</span>
            <input type="text" name="facebook" placeholder="The creator's Facebook handle (without the @)" />
          </label>
          <label>
            <span><FaTwitter /> Twitter</span>
            <input type="text" name="twitter" placeholder="The creator's Twitter handle (without the @)" />
          </label>
          <label>
            <span><FaInstagram /> Instagram</span>
            <input type="text" name="instagram" placeholder="The creator's Instagram handle (without the @)" />
          </label>
          <label>
            <span><FaTwitch /> Twitch</span>
            <input type="text" name="twitch" placeholder="The creator's Twitch handle (without the @)" />
          </label>
        </fieldset>
        <button type="submit" className="contrast">Submit</button>
      </form>
    </div>
  );
};

export default AddCreator;

