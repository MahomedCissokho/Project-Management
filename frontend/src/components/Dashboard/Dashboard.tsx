import  { useState } from 'react';
import ProjectList from './ProjectList';
import DashboardLayout from './DashboardLayout';
import { CheckCircleIcon, UsersIcon, ChartPieIcon, ClipboardDocumentListIcon } from '@heroicons/react/16/solid';
import logo from '../../assets/logo.png';
import { UserButton } from '@clerk/clerk-react';

const Dashboard = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  }

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between gap-5 mb-6">
        <img src={logo} alt="Logo" className="w-16 h-16 rounded-full" />
        <div className="relative flex items-center ">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-pink-600"
          />
          <div className="absolute right-0 pr-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

          </div>
        </div>
        <div className="relative rounded-full cursor-pointer" onClick={toggleOptions}>
            <UserButton/>
        </div>
      </div>

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
              <p className="text-3xl font-semibold text-gray-800">12</p>
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
