import React, { useState } from "react";
import DashboardLayout from "../Dashboard/DashboardLayout";

const Assign: React.FC = () => {
  const [assignData, setAssignData] = useState({
    projectName: "",
    taskName: "",
    member: "",
  });

  // Exemple de tâches et membres. Vous pouvez remplacer par des données dynamiques si nécessaire.
  const tasks = [
    { id: 1, name: "Dropbox Design System" },
    { id: 2, name: "Slack Team UI Design" },
    { id: 3, name: "GitHub Satellite" },
    { id: 4, name: "3D Character Modelling" },
    { id: 5, name: "Webapp Design System" },
  ];

  const members = [
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
    "Emily Davis",
    "Robert Brown",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAssignData({ ...assignData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(assignData);
    // Ici, vous pouvez ajouter la logique pour envoyer les données du formulaire à votre serveur ou API
  };

  return (
    <DashboardLayout>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Assigner une Tâche
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-700"
            >
              Sélectionner projet:
            </label>
            <select
              id="projectName"
              name="projectName"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={assignData.projectName}
              onChange={handleChange}
            >
              <option value="">Sélectionner un projet</option>
              {tasks.map((task) => (
                <option key={task.id} value={task.name}>
                  {task.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="taskName"
              className="block text-sm font-medium text-gray-700"
            >
              Nom de la tâche:
            </label>
            <select
              id="taskName"
              name="taskName"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={assignData.taskName}
              onChange={handleChange}
            >
              <option value="">Sélectionner une tâche</option>
              {tasks.map((task) => (
                <option key={task.id} value={task.name}>
                  {task.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="member"
              className="block text-sm font-medium text-gray-700"
            >
              Sélectionner un membre:
            </label>
            <select
              id="member"
              name="member"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={assignData.member}
              onChange={handleChange}
            >
              <option value="">Sélectionner un membre</option>
              {members.map((member, index) => (
                <option key={index} value={member}>
                  {member}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Assigner Tâche
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Assign;
