import  { useState } from 'react';
import ProjectList from './ProjectList';
import DashboardLayout from './DashboardLayout';
import { CheckCircleIcon, UsersIcon, ChartPieIcon, ClipboardDocumentListIcon, UserCircleIcon } from '@heroicons/react/16/solid';
//import photo from '../../assets/pp.jpg';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { UserButton} from "@clerk/clerk-react";


const Dashboard = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  }

  return (
    <DashboardLayout>
      

      <h1 className="mb-6 text-3xl font-bold text-pink-600">Statistics</h1>

      <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-4 transition duration-500 transform bg-white rounded-lg shadow-lg hover:scale-105">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
              <ClipboardDocumentListIcon className="w-6 h-6 text-white" />
            </div>
            <div className="ml-3">
              <h2 className="text-lg font-bold text-gray-700/90">Active</h2>
              <p className="text-3xl font-semibold text-gray-800">5</p>
            </div>
          </div>
        </div>
        <div className="p-4 transition duration-500 transform bg-white rounded-lg shadow-lg hover:scale-105">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-full">
              <CheckCircleIcon className="w-6 h-6 text-white" />
            </div>
            <div className="ml-3">
              <h2 className="text-lg font-bold text-gray-700/90">Successful </h2>
              <p className="text-3xl font-semibold text-gray-800">132</p>
            </div>
          </div>`
        </div>
        <div className="p-4 transition duration-500 transform bg-white rounded-lg shadow-lg hover:scale-105">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full">
              <UsersIcon className="w-6 h-6 text-white" />
            </div>
            <div className="ml-3">
              <h2 className="text-lg font-bold text-gray-700/90">Teams</h2>
              <p className="text-3xl font-semibold text-gray-800">5</p>
            </div>
          </div>
        </div>
        <div className="p-4 transition duration-500 transform bg-white rounded-lg shadow-lg hover:scale-105">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-600 rounded-full">
              <ChartPieIcon className="w-6 h-6 text-white" />
            </div>
            <div className="ml-3">
              <h2 className="text-lg font-bold text-gray-700">Productivity</h2>
              <p className="text-3xl font-semibold text-gray-800">76%</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold text-pink-600">Active Projects</h2>
      <ProjectList />
    </DashboardLayout>
  );
};

export default Dashboard;
