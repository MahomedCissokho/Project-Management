
const CreateProject = () => {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Create New Project</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Project Name</label>
          <input type="text" className="w-full p-2 mt-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea className="w-full p-2 mt-2 border rounded-md"></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Team</label>
          <input type="text" className="w-full p-2 mt-2 border rounded-md" />
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
