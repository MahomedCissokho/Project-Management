import React from 'react';
import { projects } from '../../data/project';
import ProjectCard from './ProjectCard';

const ProjectList: React.FC = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
