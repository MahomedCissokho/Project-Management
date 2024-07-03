import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import ProjectList from './components/Dashboard/ProjectList';
import CreateProject from './components/Dashboard/CreateProject'; // Exemple pour créer un projet
import DashboardLayout from './components/Dashboard/DashboardLayout';
import Teams from './components/Dashboard/Teams';
import SignUp from './components/Auth/Register';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/projects"
          element={
            <DashboardLayout>
              <ProjectList />
            </DashboardLayout>
          }
        />
        <Route
          path="/projects/teams"
          element={
            <DashboardLayout>
              <Teams/>
            </DashboardLayout>
          }
        />
        <Route
          path="/projects/create"
          element={
            <DashboardLayout>
              <CreateProject />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
