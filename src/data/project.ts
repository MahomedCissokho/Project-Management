export interface Project {
    id: number;
    name: string;
    description: string;
    hours: number;
    priority: string;
    members: number;
    progress: number;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      name: 'Dropbox Design System',
      description: 'Research on AI advancements.',
      hours: 34,
      priority: 'Medium',
      members: 6,
      progress: 15,
    },
    {
      id: 2,
      name: 'Slack Team UI Design',
      description: 'Research on Quantum Computing.',
      hours: 47,
      priority: 'High',
      members: 8,
      progress: 35,
    },
    {
      id: 3,
      name: 'GitHub Satellite',
      description: 'Study on Renewable Energy Sources.',
      hours: 120,
      priority: 'Low',
      members: 10,
      progress: 75,
    },
    {
      id: 4,
      name: '3D Character Modelling',
      description: 'Innovations in Biotechnology.',
      hours: 89,
      priority: 'Medium',
      members: 5,
      progress: 63,
    },
    {
      id: 5,
      name: 'Webapp Design System',
      description: 'Advanced Research in Nanotechnology.',
      hours: 89,
      priority: 'Track',
      members: 7,
      progress: 100,
    },
  ];
  