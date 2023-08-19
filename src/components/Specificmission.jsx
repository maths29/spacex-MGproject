import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinButton, leaveButton } from '../Redux/Missions/missionSlice';

const Specificmission = ({ mission }) => {
  const isOddRow = mission.itemNumber % 2 === 1;

  const dispatch = useDispatch();

  const handleJoinMission = () => {
    if (mission && mission.reserved) {
      dispatch(leaveButton(mission.mission_id));
    } else {
      dispatch(joinButton(mission.mission_id));
    }
  };

  const badgeSwitch = (reserved) => (reserved ? 'Active Member' : 'Not a Member');
  const badgeStyle = (reserved) => (reserved ? 'bg-[#218bff]' : 'bg-[#6d757d]');
  const buttonSwitch = (reserved) => (reserved ? 'Leave Mission' : 'Join Mission');
  const buttonStyle = (reserved) => (reserved ? 'border-red-700 text-red-700' : 'border-slate-700');

  return (
    <tr className={isOddRow ? 'bg-neutral-100' : ''}>
      <td className="w-1/6 font-bold whitespace-wrap border-b border-r px-6 py-4 dark:border-neutral-500">
        {mission.mission_name}
      </td>
      <td className="w-3/6 whitespace-wrap border-b border-r px-6 py-4 dark:border-neutral-500">
        {mission.description}
      </td>
      <td className="w-1/6 whitespace-wrap border-b border-r px-6 py-4 dark:border-neutral-500">
        <div className={`text-white px-4 rounded-md ${badgeStyle(mission?.reserved)}`}>
          {badgeSwitch(mission?.reserved)}
        </div>
      </td>
      <td className="w-1/6 whitespace-wrap border-b border-r px-6 py-4 dark:border-neutral-500">
        <button
          className={`border rounded-md px-4 py-4 ${buttonStyle(mission?.reserved)}`}
          type="button"
          onClick={handleJoinMission}
        >
          {buttonSwitch(mission?.reserved)}
        </button>
      </td>
    </tr>
  );
};

Specificmission.propTypes = {
  mission: PropTypes.shape().isRequired,
};

export default Specificmission;
