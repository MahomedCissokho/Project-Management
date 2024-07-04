export interface Project {
  id: number;
  name: string;
  description: string;
  duration: string;
  budget: number;
  type: string;
  manager: string;
  progress: number;
  expenses: number;
}
export const projects: Project[] = [
  {
    id: 1,
    name: 'Dropbox Design System',
    description: 'Research on AI advancements.',
    duration: '6 months',
    budget: 34000,
    type: 'Confidential',
    manager: 'Mandicou Ba',
    progress: 15,
    expenses: 15000, // Exemple de données de dépenses pour ce projet
  },
  {
    id: 2,
    name: 'Slack Team UI Design',
    description: 'Research on Quantum Computing.',
    duration: '12 months',
    budget: 47000,
    type: 'Confidential',
    manager: 'Alassane Ba',
    progress: 35,
    expenses: 22000,
  },
  {
    id: 3,
    name: 'GitHub Satellite',
    description: 'Study on Renewable Energy Sources.',
    duration: '4 months',
    budget: 120000,
    type: 'Confidential',
    manager: 'Ibrahima Fall',
    progress: 75,
    expenses: 40000,
  },
  {
    id: 4,
    name: '3D Character Modelling',
    description: 'Innovations in Biotechnology.',
    duration: '9 months',
    budget: 89000,
    type: 'Confidential',
    manager: 'Idy Diop',
    progress: 63,
    expenses: 30000,
  },
  {
    id: 5,
    name: 'Webapp Design System',
    description: 'Advanced Research in Nanotechnology.',
    duration: '8 months',
    budget: 89000,
    type: 'Confidential',
    manager: 'Mandicou Ba',
    progress: 100,
    expenses: 28000,
  },
];
