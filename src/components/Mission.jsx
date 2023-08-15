import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { displayMissions } from '../Redux/Missions/missionSlice';

const Mission = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayMissions());
  }, [dispatch]);

  return (
    <div>
      Our Mission
    </div>
  );
};

export default Mission;
