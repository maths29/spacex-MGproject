import React from 'react';
import '../styles/style.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelRocket } from '../Redux/Rockets/rocketSlice';

const Rocketslist = ({ rockets }) => (
  <div className="test">
    <img className="img" src={rockets.images} alt="" />
    <div className="info">
      <h1>{rockets.name}</h1>

      <p>{rockets.description}</p>
      <button className="btn" type="button">reserved</button>
    </div>
  </div>
);
Rocketslist.propTypes = {
  rockets: PropTypes.shape().isRequired,
};
export default Rocketslist;
