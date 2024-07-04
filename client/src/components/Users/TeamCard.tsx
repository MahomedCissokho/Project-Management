import React, { useState } from 'react';
import { UserGroupIcon, CalendarIcon, PencilIcon, TrashIcon } from "@heroicons/react/16/solid";

const TeamCard = ({ team, onEdit, onDelete }: { team: any, onEdit: any, onDelete: any }) => {
  const [highlighted, setHighlighted] = useState(false);

  const handleMouseEnter = () => {
    setHighlighted(true);
  };

  const handleMouseLeave = () => {
    setHighlighted(false);
  };

  return (
    <div
      className={`bg-white p-4 rounded-md shadow-md space-y-2 cursor-pointer 
        ${highlighted ? 'ring-2 ring-blue-200' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center space-x-2">
        <UserGroupIcon className="h-6 w-6 text-blue-500" />
        <h2 className="text-xl font-bold">{team.teamName}</h2>
      </div>
      <p className="text-gray-700">{team.description}</p>
      <div className="flex items-center space-x-2 text-gray-500">
        <CalendarIcon className="h-5 w-5" />
        <span>{team.creationDate}</span>
      </div>
      {highlighted && (
        <div className="flex items-center space-x-2 mt-2">
          <button
            onClick={() => onEdit(team)}
            className="text-blue-500 hover:text-blue-700"
          >
            <PencilIcon className="h-5 w-5" />
          </button>
      
        </div>
      )}
    </div>
  );
};

export default TeamCard;
