import React from 'react';
import '../styles/style.css';
import PropTypes from 'prop-types';

const Rocketslist = ({ rockets }) => {
  const { images, name, description } = rockets;
  return (
    <div className="test">
      <img className="img" src={images} alt="" />
      <div className="info">
        <h1>{name}</h1>
        <p>{description}</p>
        <button className="btn" type="button">reserved Rocket</button>
      </div>

    </div>
  );
};

Rocketslist.propTypes = {
  rockets: PropTypes.shape({
    images: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Rocketslist;
