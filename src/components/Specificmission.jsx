import PropTypes from 'prop-types';

const Specificmission = ({ mission }) => (
  <div>
    <h2>
      Mission Id:
      {mission.mission_id}
    </h2>
    <h3>
      Mission Name:
      {mission.mission_name}
    </h3>
    <h4>
      Description:
      {mission.description}
    </h4>
  </div>
);

Specificmission.propTypes = {
  mission: PropTypes.shape().isRequired,
};

export default Specificmission;
