import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayMissions } from '../Redux/Missions/missionSlice';
import Specificmission from './Specificmission';

const Mission = () => {
  const { missions } = useSelector((state) => state.missions);
  const [misssionLoading, setMissionLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayMissions());
    setTimeout(() => {
      setMissionLoading(false);
    }, 2000);
  }, [dispatch]);

  return (
    <div>
      {misssionLoading ? (
        <p>Loading...</p>
      ) : (
        missions.map((mission) => <Specificmission key={mission.mission_id} mission={mission} />)
      )}
    </div>
  );
};

export default Mission;
