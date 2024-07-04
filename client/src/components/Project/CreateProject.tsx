import React, { useState } from "react";
import DashboardLayout from "../Dashboard/DashboardLayout";
import {
  CalendarIcon,
  CurrencyDollarIcon,
  UserGroupIcon
} from "@heroicons/react/16/solid";

const CreateProject = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState("Started");
  const [scope, setScope] = useState("Public");
  const [projectManager, setProjectManager] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");

  // Example data for project manager dropdown
  const projectManagers = [
    "Idy Diop",
    "Mandicou Ba",
    "Alassane Ba",
  ];

  // Example data for team dropdown
  const teams = [
    { name: " Team Dropbox Design System" },
    { name: "Team Slack Team UI Design" },
    { name: "Team GitHub Satellite"},
    { name: "Team 3D Character Modelling" },
    { name: "Team Webapp Design System"},
  ];

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      projectName,
      description,
      startDate,
      endDate,
      budget,
      status,
      scope,
      projectManager,
      selectedTeam,
    });
    // Reset form fields after submission if needed
    // setProjectName("");
    // setDescription("");
    // setStartDate("");
    // setEndDate("");
    // setBudget("");
    // setStatus("Started");
    // setScope("Public");
    // setProjectManager("");
    // setSelectedTeam("");
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="mb-6 text-3xl font-bold text-center">Create New Project</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Project Name</label>
            <div className="relative">
              <input
                type="text"
                className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <UserGroupIcon className="h-5 w-5 text-gray-400" />
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
                <UserGroupIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block text-gray-700">Start Date</label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-gray-700">End Date</label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Budget</label>
            <div className="relative">
              <input
                type="text"
                className="w-full p-3 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Status</label>
            <select
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="Started">Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Canceled">Canceled</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Scope</label>
            <select
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={scope}
              onChange={(e) => setScope(e.target.value)}
              required
            >
              <option value="Confidential">Confidential</option>
              <option value="Public">Public</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Project Manager</label>
            <select
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={projectManager}
              onChange={(e) => setProjectManager(e.target.value)}
              required
            >
              <option value="">Select Project Manager</option>
              {projectManagers.map((manager, index) => (
                <option key={index} value={manager}>
                  {manager}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Team</label>
            <select
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              required
            >
              <option value="">Select Team</option>
              {teams.map((team, index) => (
                <option key={index} value={team.name}>
                  <div className="flex items-center">
                    <span className="ml-2">{team.name}</span>
                  </div>
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Create Project
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateProject;
