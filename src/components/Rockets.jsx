import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayRockets } from '../Redux/Rockets/rocketSlice';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayRockets());
  }, [dispatch]);
  return (
    <div>
      {rockets.map((roc) => (
        <h1 key={roc.id}>
          id:
          {roc.id}
          name:
          {roc.name}
          type:
          {roc.type}
          images:
          {roc.flickr_images}
        </h1>

      ))}
    </div>
  );
};
export default Rockets;
