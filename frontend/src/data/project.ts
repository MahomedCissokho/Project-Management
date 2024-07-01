export interface Project {
  id: number;
  name: string;
  description: string;
  duration: number; // Durée en mois
  budget: number; // Budget en euros
  priority: string;
  members: number;
  progress: number;
  projectLead: string; // Chef de projet
  type: string; // Type de projet (ex: confidentiel, public, etc.)
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Dropbox Design System',
    description: 'Research on AI advancements.',
    duration: 6, // Durée en mois
    budget: 20000,
    priority: 'Medium',
    members: 6,
    progress: 15,
    projectLead: 'Mandicou Ba',
    type: 'Confidential',
  },
  {
    id: 2,
    name: 'Slack Team UI Design',
    description: 'Research on Quantum Computing.',
    duration: 12, // Durée en mois
    budget: 35000,
    priority: 'High',
    members: 8,
    progress: 35,
    projectLead: 'Alassane Ba',
    type: 'Public',
  },
  {
    id: 3,
    name: 'GitHub Satellite',
    description: 'Study on Renewable Energy Sources.',
    duration: 24, // Durée en mois
    budget: 50000,
    priority: 'Low',
    members: 10,
    progress: 75,
    projectLead: 'Ibrahima Fall',
    type: 'Confidential',
  },
  {
    id: 4,
    name: '3D Character Modelling',
    description: 'Innovations in Biotechnology.',
    duration: 4, // Durée en mois
    budget: 15000,
    priority: 'Medium',
    members: 5,
    progress: 63,
    projectLead: 'Idy Diop',
    type: 'Confidential',
  },
  {
    id: 5,
    name: 'Webapp Design System',
    description: 'Advanced Research in Nanotechnology.',
    duration: 18, // Durée en mois
    budget: 45000,
    priority: 'Track',
    members: 7,
    progress: 100,
    projectLead: 'Mandicou Ba',
    type: 'Public',
  },
];
