import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import ProjectList from './components/Dashboard/ProjectList'; // Exemple pour les projets
import DashboardLayout from './components/Dashboard/DashboardLayout';
import DashboardExpenses from './components/Expenses/DashboardExpenses';
import FinancialList from './components/Expenses/Financial-list';
import CreateProject from './components/Project/CreateProject';
import TaskForm from './components/Task/TaskForm';
import Assign from './components/Task/Assign';
import TaskIndex from './components/Task/TaskIndex';
import CreateUser from './components/Users/CreateUser';
import Team from './components/Users/Team';
import UserList from './components/Users/UserList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ExpensesList" element={<FinancialList />} />

        <Route
          path="/projects"
          element={
            <DashboardLayout>
              <ProjectList />
            </DashboardLayout>
          }
        />
        <Route path="/dashboadExpenses" element={<DashboardExpenses/>} /> 
        <Route path="/tasksAssign" element={<Assign/>} />
        <Route path="/tasks" element={<TaskForm/>} />
        <Route path="/taskIndex" element={<TaskIndex/>} />

        <Route path="/CreateUser" element={<CreateUser/>} />
        <Route path="/Userslist" element={<UserList/>} />


        <Route
          path="/teams"
          element={
               <Team/>
          }
        />
         <Route
          path="/createProject"
          element={
              <CreateProject />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
