
import React from 'react';
import { teams } from '../../data/teams';

const Teams: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h1 className="mb-4 text-3xl font-bold text-pink-600">Teams</h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <div key={team.id} className="p-4 transition-shadow duration-300 bg-gray-100 rounded shadow hover:shadow-lg">
            <h2 className="mb-2 text-xl font-semibold text-blue-700">{team.name}</h2>
            <p className="mb-1 text-gray-800"><strong>Project:</strong> {team.project}</p>
            <p className="mb-1 text-gray-700"><strong>Members:</strong></p>
            <ul className="ml-4 list-disc">
              {team.members.map((member, index) => (
                <li key={index} className="text-gray-600">{member}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
