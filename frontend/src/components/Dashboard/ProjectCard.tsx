import React from 'react';
import { Project } from '../../data/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h3 className="text-xl font-bold">{project.name}</h3>
      <p className="text-gray-600">Lead : {project.projectLead}</p>
      
      <p className="text-gray-600">{project.description}</p>
      <p className="mt-2">Duration: {project.duration}</p>
      <p className="mt-2">Priority: {project.priority}</p>
      <p className="mt-2">Members: {project.members}</p>
      <div className="mt-2">Progress: {project.progress}%</div>
      <div className="relative pt-1">
        <div className="flex items-center justify-between mb-2">
          <div className="text-right">
            <span className="inline-block text-xs font-semibold text-pink-600">
              {project.progress}%
            </span>
          </div>
        </div>
        <div className="flex h-2 mb-4 overflow-hidden text-xs bg-pink-200 rounded">
          <div
            style={{ width: `${project.progress}%` }}
            className="flex flex-col justify-center text-center text-white bg-blue-500 shadow-none whitespace-nowrap"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
