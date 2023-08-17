import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinButton, leaveButton } from '../Redux/Missions/missionSlice';

const Specificmission = ({ mission }) => {
  const isOddRow = mission.itemNumber % 2 === 1;
  const isCommercialServices = mission.mission_name === 'Commercial Resupply Services';

  const dispatch = useDispatch();

  const handleJoinMission = () => {
    if (mission && mission.reserved) {
      dispatch(leaveButton(mission.mission_id));
    } else {
      dispatch(joinButton(mission.mission_id));
    }
  };

  const getButtonContent = (reserved) => (reserved ? 'Leave Mission' : 'Join Mission');

  return (
    <tr className={isOddRow ? 'bg-neutral-100' : ''}>
      <td className="w-1/6 font-bold whitespace-wrap border-b border-r px-6 py-4 dark:border-neutral-500">
        {mission.mission_name}
      </td>
      <td className="w-3/6 whitespace-wrap border-b border-r px-6 py-4 dark:border-neutral-500">
        {mission.description}
      </td>
      <td className="w-1/6 whitespace-wrap border-b border-r px-6 py-4 dark:border-neutral-500">
        {isCommercialServices ? null : (
          <div className="bg-[#6d757d] text-white px-4 rounded-md">
            Not A Member
          </div>
        )}
      </td>
      <td className="w-1/6 whitespace-wrap border-b border-r px-6 py-4 dark:border-neutral-500">
        {isCommercialServices ? null : (
          <button
            className={`border border-slate-700 rounded-md px-4 py-4 ${mission?.reserved ? 'leave-button' : 'join-button'
            }`}
            type="button"
            onClick={handleJoinMission}
          >
            {getButtonContent(mission?.reserved)}
          </button>
        )}
      </td>
    </tr>
  );
};

Specificmission.propTypes = {
  mission: PropTypes.shape().isRequired,
};

export default Specificmission;
