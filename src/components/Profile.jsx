import { useSelector } from 'react-redux';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  const missionsJoined = missions.filter((mission) => mission.reserved);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex gap-5">
        <div>
          <h1 className="font-bold">Missions</h1>
          <table className="table-fixed border dark:border-neutral-500 mt-4 mb-4">
            <tbody>
              {missionsJoined.map((mission) => (
                <tr key={mission.mission_id}>
                  <td className="w-3/6 whitespace-wrap border-b border-r px-6 py-4 dark:border-neutral-500">
                    {mission.mission_name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};
export default Profile;
