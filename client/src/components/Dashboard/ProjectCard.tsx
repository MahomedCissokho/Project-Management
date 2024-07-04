import { Project } from '../../data/project';
import { UserIcon, CalendarIcon, CurrencyEuroIcon, ShieldCheckIcon } from '@heroicons/react/16/solid';

interface ProjectCardProps {
  project: Project;
}


const ProjectCard  = ({ project } : ProjectCardProps) => {
  return (
    <div className="p-4 transition duration-500 transform bg-white rounded-lg shadow-lg hover:scale-105">
      <h3 className="mb-2 text-2xl font-bold text-gray-800">{project.name}</h3>
      <p className="mb-4 text-gray-600">{project.description}</p>
      <div className="mb-2">
        <div className="flex items-center mb-2">
          <CalendarIcon className="w-5 h-5 mr-2 text-blue-600" />
          <span className="text-gray-800">{project.duration}</span>
        </div>
        <div className="flex items-center mb-2">
          <CurrencyEuroIcon className="w-5 h-5 mr-2 text-green-600" />
          <span className="text-gray-800">{project.budget} €</span>
        </div>
        <div className="flex items-center mb-2">
          <ShieldCheckIcon className="w-5 h-5 mr-2 text-red-600" />
          <span className="text-gray-800">{project.type}</span>
        </div>
        <div className="flex items-center mb-2">
          <UserIcon className="w-5 h-5 mr-2 text-purple-600" />
          <span className="text-gray-800">{project.manager}</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="mr-2 text-gray-600">Progress:</span>
          <div className="w-full bg-gray-300 rounded-lg">
            <div className="py-1 text-xs leading-none text-center text-white bg-blue-600 rounded-lg" style={{ width: `${project.progress}%` }}>
              {project.progress}%
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <span className="mr-2 text-gray-600">Expenses:</span>
          <span className="text-gray-800">{project.expenses} €</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
