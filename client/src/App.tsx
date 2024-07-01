import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';
import ProjectList from './components/Dashboard/ProjectList'; // Exemple pour les projets
import DashboardLayout from './components/Dashboard/DashboardLayout';
import DashboardExpenses from './components/Expenses/DashboardExpenses';
import FinancialList from './components/Expenses/Financial-list';

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

        <Route
          path="/teams"
          element={
            <DashboardLayout>
              <div>Teams Component</div> {/* Créez et importez votre composant Teams ici */}
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;