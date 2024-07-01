import React from 'react';
import ProjectList from './ProjectList';
import DashboardLayout from './DashboardLayout';

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout >
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-bold">Projects</h2>
          <p className="text-3xl">5</p>
        </div>
        <div className="p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-bold">Active Tasks</h2>
          <p className="text-3xl">132</p>
        </div>
        <div className="p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-bold">Teams</h2>
          <p className="text-3xl">12</p>
        </div>
        <div className="p-4 bg-white rounded shadow-md">
          <h2 className="text-xl font-bold">Productivity</h2>
          <p className="text-3xl">76%</p>
        </div>
      </div>
      <h2 className="mb-4 text-2xl font-bold">Active Projects</h2>
      <ProjectList />
    </DashboardLayout>
  );
};

export default Dashboard;
