import React, { useState } from "react";
import DashboardLayout from "../Dashboard/DashboardLayout";
import { CalendarIcon, ClipboardDocumentCheckIcon, DocumentTextIcon, IdentificationIcon, PuzzlePieceIcon } from "@heroicons/react/16/solid"; // Importer les icônes nécessaires

const TaskForm: React.FC = () => {
  const [task, setTask] = useState({
    projectName: "",
    taskName: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(task);
    // Ici, vous pouvez ajouter la logique pour envoyer les données du formulaire à votre serveur ou API
  };

  return (
    <DashboardLayout>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Ajouter une Tâche</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
              <IdentificationIcon className="h-5 w-5 inline-block -mt-1 mr-2 text-gray-500" />
              Sélectionner projet:
            </label>
            <select
              id="projectName"
              name="projectName"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={task.projectName}
              onChange={handleChange}
            >
              <option value="">Selectionner un projet</option>
              <option value="projet1">Dropbox Design System</option>
              <option value="projet2">Slack Team UI Design</option>
              <option value="projet3">GitHub Satellite</option>
              <option value="projet4">3D Character Modelling</option>
              <option value="projet5">Webapp Design System</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="taskName" className="block text-sm font-medium text-gray-700">
              <PuzzlePieceIcon className="h-5 w-5 inline-block -mt-1 mr-2 text-gray-500" />
              Nom de la tâche:
            </label>
            <input
              type="text"
              id="taskName"
              name="taskName"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={task.taskName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              <DocumentTextIcon className="h-5 w-5 inline-block -mt-1 mr-2 text-gray-500" />
              Description de la tâche:
            </label>
            <input
              type="text"
              id="description"
              name="description"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={task.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
              <CalendarIcon className="h-5 w-5 inline-block -mt-1 mr-2 text-gray-500" />
              Date de début:
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={task.startDate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
              <CalendarIcon className="h-5 w-5 inline-block -mt-1 mr-2 text-gray-500" />
              Date de fin:
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={task.endDate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              <ClipboardDocumentCheckIcon className="h-5 w-5 inline-block -mt-1 mr-2 text-gray-500" />
              Statut de la Tache:
            </label>
            <select
              id="status"
              name="status"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={task.status}
              onChange={handleChange}
            >
              <option value="">Selectionner le statut</option>
              <option value="en cours">En cours</option>
              <option value="completé">Complété</option>
              <option value="en attente">En attente</option>
              {/* Ajoutez d'autres options de statut si nécessaire */}
            </select>
          </div>
          <button
            type="submit"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Ajouter Tâche
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default TaskForm;
