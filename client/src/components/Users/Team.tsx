import React, { useState } from "react";
import { UserGroupIcon, CalendarIcon, PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/16/solid";
import DashboardLayout from "../Dashboard/DashboardLayout";
import TeamCard from "./TeamCard";

// Temporary data for teams
const initialTeams = [
  {
    teamName: "Team Dropbox Design System",
    description: "Research on AI advancements",
    creationDate: "2024-01-15",
  },
  {
    teamName: "Team Slack Team UI Design",
    description: "Research on Quantum Computing.",
    creationDate: "2024-03-22",
  },
  {
    teamName: "Team GitHub Satellite",
    description: "Study on Renewable Energy Sources.",
    creationDate: "2024-05-10",
  },
  {
    teamName: "Team 3D Character Modelling",
    description: "Innovations in Biotechnology.",
    creationDate: "2024-05-10",
  },
  {
    teamName: "Team Webapp Design System",
    description: "Advanced Research in Nanotechnology.",
    creationDate: "2024-05-10",
  },
];

const Team = () => {
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [memberName, setMemberName] = useState("");
  const [members, setMembers] = useState<string[]>([]);
  const [teams, setTeams] = useState(initialTeams);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddMember = () => {
    if (memberName) {
      setMembers([...members, memberName]);
      setMemberName("");
    }
  };

  const handleRemoveMember = (index: number) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (editMode) {
      // Update existing team
      const updatedTeams = [...teams];
      updatedTeams[editIndex] = { teamName, description, creationDate };
      setTeams(updatedTeams);
      setEditMode(false);
      setEditIndex(-1);
    } else {
      // Add new team to the teams list
      const newTeam = { teamName, description, creationDate };
      setTeams([...teams, newTeam]);
    }

    // Reset form fields after submission
    setTeamName("");
    setDescription("");
    setCreationDate("");
    setMembers([]);
  };

  const handleEdit = (team: { teamName: React.SetStateAction<string>; description: React.SetStateAction<string>; creationDate: React.SetStateAction<string>; }) => {
    setTeamName(team.teamName);
    setDescription(team.description);
    setCreationDate(team.creationDate);
    setEditMode(true);
    setEditIndex(teams.findIndex((t) => t.teamName === team.teamName));
  };

  const handleDelete = (team: { teamName: string; }) => {
    const updatedTeams = teams.filter((t) => t.teamName !== team.teamName);
    setTeams(updatedTeams);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md mb-10">
        <h1 className="mb-6 text-3xl font-bold text-center">
          {editMode ? "Edit Team" : "Create New Team"}
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Team Name</label>
            <div className="relative">
              <input
                type="text"
                className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <UserGroupIcon className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Description</label>
            <div className="relative">
              <textarea
                className="w-full p-3 pl-10 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <PencilIcon className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Creation Date</label>
            <div className="relative">
              <input
                type="date"
                className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={creationDate}
                onChange={(e) => setCreationDate(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <CalendarIcon className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Add Member</label>
            <div className="flex items-center space-x-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={memberName}
                  onChange={(e) => setMemberName(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <UserGroupIcon className="h-5 w-5 text-purple-500" />
                </div>
              </div>
              <button
                type="button"
                className="p-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
                onClick={handleAddMember}
              >
                <PlusIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Members</label>
            <ul className="space-y-2">
              {members.map((member, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-100 rounded-md"
                >
                  <span>{member}</span>
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveMember(index)}
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {editMode ? "Save Changes" : "Create Team"}
          </button>
        </form>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold mb-4">Teams</h2>
        {teams.map((team, index) => (
          <TeamCard
            key={index}
            team={team}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Team;
