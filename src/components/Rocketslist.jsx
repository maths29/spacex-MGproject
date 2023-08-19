import React from 'react';
import '../styles/style.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket, cancelRocket } from '../Redux/Rockets/rocketSlice';

const Rocketslist = ({ rockets }) => {
  const dispatch = useDispatch();
  const rocketBooking = () => {
    if (rockets && rockets.reserved) {
      dispatch(cancelRocket(rockets.id));
    } else {
      dispatch(bookRocket(rockets.id));
    }
  };
  const switchApp = (reserved) => (reserved ? 'Cancel Reservation' : 'Book Rocket');
  const badgeSwitch = (reserved) => (reserved ? 'Reserved' : '');
  return (
    <div className="test">
      <img className="img" src={rockets.images} alt="" />
      <div className="info">
        <h1>{rockets.name}</h1>
        <span className="btnn">{badgeSwitch(rockets?.reserved)}</span>
        <p>{rockets.description}</p>
        <button className="btn" type="button" onClick={rocketBooking}>{switchApp(rockets?.reserved)}</button>
      </div>
    </div>
  );
};
Rocketslist.propTypes = {
  rockets: PropTypes.shape().isRequired,
};
export default Rocketslist;
