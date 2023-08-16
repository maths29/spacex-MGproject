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
    <div className="max-w-6xl mx-auto">
      <table className="table-fixed border dark:border-neutral-500 mt-4 mb-4">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            <th
              scope="col"
              className="border-r px-6 py-4 dark:border-neutral-500"
            >
              Mission
            </th>
            <th
              scope="col"
              className="border-r px-6 py-4 dark:border-neutral-500"
            >
              Description
            </th>
            <th
              scope="col"
              className="border-r px-6 py-4 dark:border-neutral-500"
            >
              Status
            </th>
            <th
              scope="col"
              className="border-r px-6 py-4 dark:border-neutral-500"
            >
              &lsquo;
            </th>
          </tr>
        </thead>
        <tbody>
          {misssionLoading ? (
            <p>Loading...</p>
          ) : (
            missions.map((mission) => (
              <Specificmission key={mission.mission_id} mission={mission} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
