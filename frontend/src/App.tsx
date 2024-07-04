import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import ProjectList from './components/Dashboard/ProjectList';
import CreateProject from './components/Dashboard/CreateProject'; 
import DashboardLayout from './components/Dashboard/DashboardLayout';
import Teams from './components/Dashboard/Teams';

import SignIn from './components/SignIn';
import Users from './components/Dashboard/Users';
import AddUser from './components/Dashboard/AddUser';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn/>} />
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
          path="/users/teams"
          element={
            <DashboardLayout>
              <Teams/>
            </DashboardLayout>
          }
        />
        <Route
          path="/projects/new"
          element={
            <DashboardLayout>
              <CreateProject />
            </DashboardLayout>
          }
        />
        <Route
          path="/users/list"
          element={
            <DashboardLayout>
              <Users/>
            </DashboardLayout>
          }
        />
        <Route
          path="/users/new"
          element={
            <DashboardLayout>
              <AddUser/>
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
