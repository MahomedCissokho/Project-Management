// src/data/teams.ts

export interface Team {
    id: number;
    name: string;
    members: string[];
    project: string;
  }
  
  export const teams: Team[] = [
    {
      id: 1,
      name: 'Team Alpha',
      members: ['Aicha Victor', 'Ibrahima Fall', 'Idy Diop'],
      project: 'Smart Home Automation',
    },
    {
      id: 2,
      name: 'Team Beta',
      members: ['Bassirou Toure', 'Mandicou Ba', 'Moussa Sagna'],
      project: 'Predictive Maintenance',
    },
    {
      id: 3,
      name: 'Team Gamma',
      members: ['Aicha Victor', 'Moussa Sagna'],
      project: 'Remote Patient Monitoring',
    },
    {
      id: 4,
      name: 'Team Delta',
      members: ['Ibrahima Fall', 'Idy Diop'],
      project: 'Environmental Monitoring',
    },
    {
      id: 5,
      name: 'Team Epsilon',
      members: ['Bassirou Toure', 'Mandicou Ba'],
      project: 'AI-Powered Chatbots',
    },
    {
      id: 6,
      name: 'Team Zeta',
      members: ['Aicha Victor', 'Ibrahima Fall'],
      project: 'Smart Hospital Management',
    },
    {
      id: 7,
      name: 'Team Eta',
      members: ['Idy Diop', 'Moussa Sagna'],
      project: 'Industrial IoT Monitoring',
    },
    {
      id: 8,
      name: 'Team Theta',
      members: ['Bassirou Toure', 'Mandicou Ba'],
      project: 'Healthcare Data Analytics',
    },
    {
      id: 9,
      name: 'Team Iota',
      members: ['Aicha Victor', 'Moussa Sagna'],
      project: 'Wearable Health Trackers',
    },
    {
      id: 10,
      name: 'Team Kappa',
      members: ['Ibrahima Fall', 'Idy Diop'],
      project: 'Fraud Detection Systems',
    },
    {
      id: 11,
      name: 'Team Lambda',
      members: ['Bassirou Toure', 'Mandicou Ba'],
      project: 'Connected Agriculture',
    },
    {
      id: 12,
      name: 'Team Mu',
      members: ['Aicha Victor', 'Ibrahima Fall'],
      project: 'Natural Language Processing',
    },
    {
      id: 13,
      name: 'Team Nu',
      members: ['Idy Diop', 'Moussa Sagna'],
      project: 'Disease Outbreak Prediction',
    },
    {
      id: 14,
      name: 'Team Xi',
      members: ['Bassirou Toure', 'Mandicou Ba'],
      project: 'Wearable Diagnostic Devices',
    },
    {
      id: 15,
      name: 'Team Omicron',
      members: ['Aicha Victor', 'Moussa Sagna'],
      project: 'Smart City Infrastructure',
    },
    {
      id: 16,
      name: 'Team Pi',
      members: ['Ibrahima Fall', 'Idy Diop'],
      project: 'Recommendation Systems',
    },
  ];
  