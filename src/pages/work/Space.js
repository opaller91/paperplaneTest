import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useProjectsData } from '../../hooks/useProjectsData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectAllProjects } from '../../features/work-projects/projectSliceSelectors';
import { setAllProjects } from '../../features/work-projects/projectSliceActions';
import { useQueryClient } from 'react-query';
import { uploadFileService, removeFileService } from '../../services/storageAPI';
import { v4 as uuidv4 } from 'uuid';

function Space() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const invalidateProjectsQuery = () => queryClient.invalidateQueries('projects');
  const { data: projectsData, updateProjectFieldById, addNewProject, deleteProjectFieldById } = useProjectsData();
  const projects = useSelector(selectAllProjects);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const imageHeaderInputRef = useRef(null);
  const carouselImagesInputRef = useRef(null);
  const videosInputRef = useRef(null);

  const [projectForm, setProjectForm] = useState({
    name: '',
    year: '',
    location: '',
    area: '',
    type: 'Architecture',
    photographer: '',
    link: '',
    description_part_1: '',
    description_part_2: '',
    description_part_3: '',
    image_header: '',
    carousel_images: [],
    videos: [],
  });

  useEffect(() => {
    if (projectsData) {
      dispatch(setAllProjects(projectsData))
    }
  }, [dispatch, projectsData]);

  const createLinkFromName = (name) => {
    if (!name || typeof name !== 'string') {
      throw new Error('Invalid project name');
    }
  
    const slug = name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  
    const uniqueId = uuidv4().split('-')[0];
  
    return `${slug}-${uniqueId}`;
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
  
    if (files) {
      if (name === 'image_header') {
        setProjectForm((prev) => ({ ...prev, [name]: files[0] }));
      } else if (name === 'carousel_images' || name === 'videos') {
        setProjectForm((prev) => ({ ...prev, [name]: Array.from(files) }));
      }
    } else {
      if (name === 'name') {
        const generatedLink = createLinkFromName(value);
        setProjectForm((prev) => ({
          ...prev,
          [name]: value,
          link: generatedLink
        }));
      } else {
        setProjectForm((prev) => ({ ...prev, [name]: value }));
      }
    }
  };

  const handleDeleteProject = async (id, project) => {
    try {
      const filesToDelete = [];

      if (project.image_header) {
        filesToDelete.push({ url: project.image_header});
      }

      if (project.carousel_images && project.carousel_images.length) {
        project.carousel_images.forEach((image) => {
          filesToDelete.push({ url: image});
        });
      }

      if (project.videos && project.videos.length) {
        project.videos.forEach((video) => {
          filesToDelete.push({ url: video});
        });
      }
      console.log("filesToDelete", filesToDelete)
      await deleteProjectFieldById(id, filesToDelete);
      invalidateProjectsQuery()
      toast.success('Project and associated files deleted successfully!');
    } catch (error) {
      console.error('Error deleting project or files:', error.message);
      toast.error('Failed to delete project!');
    }
  };
  

  const handleEditProject = (project) => {
    setIsEditMode(true);
    setSelectedProjectId(project.id);
    setProjectForm({
      ...project,
      carousel_images: project.carousel_images,
      videos: project.videos,
      image_header: project.image_header,
    });
  };

  const handleCancelEdit = () => {
    resetForm();
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const filesToDelete = [];
  
      if (isEditMode) {
        const existingProject = projects.find((p) => p.id === selectedProjectId);
  
        if (existingProject) {
          // Only delete the old `image_header` if a new one is uploaded
          if (projectForm.image_header && projectForm.image_header !== existingProject.image_header) {
            filesToDelete.push({ url: existingProject.image_header });
          }
  
          // Only delete old `carousel_images` if new ones are uploaded
          if (projectForm.carousel_images.length > 0) {
            existingProject.carousel_images.forEach((image) => {
              filesToDelete.push({ url: image });
            });
          }
  
          // Only delete old `videos` if new ones are uploaded
          if (projectForm.videos.length > 0) {
            existingProject.videos.forEach((video) => {
              filesToDelete.push({ url: video });
            });
          }
        }
      }
  
      await Promise.all(filesToDelete.map((file) => removeFileService(file.url)));
  
      // Upload new files
      const imageHeaderUrl =
        projectForm.image_header instanceof File
          ? await uploadFileService(projectForm.image_header, 'projects')
          : projectForm.image_header;
  
      const carouselImagesUrls =
        projectForm.carousel_images[0] instanceof File
          ? await Promise.all(
              projectForm.carousel_images.map((file) =>
                uploadFileService(file, 'projects')
              )
            )
          : projectForm.carousel_images;
  
      const videoUrls =
        projectForm.videos[0] instanceof File
          ? await Promise.all(
              projectForm.videos.map((file) => uploadFileService(file, 'projects'))
            )
          : projectForm.videos;
  
      // Final project data object
      const projectData = {
        ...projectForm,
        image_header: imageHeaderUrl || projectForm.image_header,
        carousel_images: carouselImagesUrls || projectForm.carousel_images,
        videos: videoUrls || projectForm.videos,
      };
  
      // Save or update the project
      if (isEditMode) {
        await updateProjectFieldById(selectedProjectId, projectData);
        toast.success('Project updated successfully!');
      } else {
        await addNewProject(projectData);
        toast.success('Project added successfully!');
      }
  
      invalidateProjectsQuery();
      resetForm();
    } catch (error) {
      console.error('Error saving project!', error);
      toast.error('Failed to save project!');
    }
  };
  
  
  
  const resetForm = () => {
    setIsEditMode(false);
    setSelectedProjectId(null);
    setProjectForm({
      name: '',
      year: '',
      location: '',
      area: '',
      type: 'Architecture',
      photographer: '',
      link: '',
      description_part_1: '',
      description_part_2: '',
      description_part_3: '',
      image_header: '',
      carousel_images: [],
      videos: [],
    });
    if (imageHeaderInputRef.current) {
      imageHeaderInputRef.current.value = null;
    }
    if (carouselImagesInputRef.current) {
      carouselImagesInputRef.current.value = null;
    }
    if (videosInputRef.current) {
      videosInputRef.current.value = null;
    }
  };
  
  

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-montserrat">
      <ToastContainer/>
      {/* Main content */}
      <div className="flex-grow p-14 mt-14">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        {/* Grid Layout for Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] overflow-y-auto">
        {projects &&
          projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out project-block"
            >
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => handleEditProject(project)}
                  type="submit"
                  className="p-2 bg-green-600 rounded-lg hover:bg-green-300 hover:text-green-700 transition duration-200"
                >
                  Edit Project
                </button>
                <button
                  onClick={() => handleDeleteProject(project.id, project)}
                  type="submit"
                  className="p-2 bg-red-500 rounded-lg hover:bg-red-300 hover:text-red-700 transition duration-200"
                >
                  Delete Project
                </button>
              </div>
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-400 text-sm">{project.description_part_1}</p>
              <p className="text-gray-400 text-sm">{project.description_part_2}</p>
              <p className="text-gray-400 text-sm">{project.description_part_3}</p>
              <p className="text-sm">{project.year}</p>
              <p className="text-sm">{project.location}</p>
              <p className="text-sm">{project.area}</p>
              <p className="text-sm">{project.type}</p>
              <p className="text-sm">{project.photographer}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                {project.link}
              </a>
              {project.image_header && (
                <img
                  src={project.image_header}
                  alt={project.name}
                  className="w-full h-40 object-cover mt-4 rounded-lg"
                />
              )}
              {project.images && project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.name} detail ${index + 1}`}
                  className="w-full h-40 object-cover mt-2 rounded-lg"
                />
              ))}
              {project.videos && project.videos.map((video, index) => (
                <video
                  key={index}
                  controls
                  className="w-full h-40 object-cover mt-2 rounded-lg"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))}
            </div>
          ))}
        </div>

        {/* Form to Add New Project */}
        <div className='flex w-3/5 justify-between'>
          <h2 className="text-2xl font-bold my-5">
              {isEditMode ? 'Edit Project' : 'Add New Project'}
          </h2>
          {isEditMode && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className=" my-9 p-2.5 bg-gray-500 rounded-lg hover:bg-gray-600 transition duration-200"
            >
              Cancel
            </button>
          )}
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-3/5">
          <input
            type="text"
            name="name"
            placeholder="Project Name"
            value={projectForm.name}
            onChange={handleInputChange}
            className="p-2 text-black rounded-lg"
            required
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={projectForm.year}
            onChange={handleInputChange}
            className="p-2 text-black rounded-lg"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={projectForm.location}
            onChange={handleInputChange}
            className="p-2 text-black rounded-lg"
            required
          />
          <input
            type="text"
            name="area"
            placeholder="Area"
            value={projectForm.area}
            onChange={handleInputChange}
            className="p-2 text-black rounded-lg"
            required
          />

          {/* Dropdown for Type */}
          <select
            value={projectForm.type}
            name="type"
            onChange={handleInputChange}
            className="p-2 text-black rounded-lg"
            required
          >
            <option value="Architecture">Architecture</option>
            <option value="Interior">Interior</option>
            <option value="Object">Object</option>
          </select>

          <input
            type="text"
            name="photographer"
            placeholder="Photographer"
            value={projectForm.photographer}
            onChange={handleInputChange}
            className="p-2 text-black rounded-lg"
          />
          <textarea
            placeholder="Description Section 1"
            name="description_part_1"
            value={projectForm.description_part_1}
            onChange={handleInputChange}
            className="p-2 text-black rounded-lg"
            required
          />
          <textarea
            placeholder="Description Section 2"
            name="description_part_2"
            value={projectForm.description_part_2}
            onChange={handleInputChange}
            className="p-2 text-black rounded-lg"
            required
          />
          <textarea
            placeholder="Description Section 3"
            name="description_part_3"
            value={projectForm.description_part_3}
            onChange={handleInputChange}
            className="p-2 text-black rounded-lg"
            required
          />
          <input
            type="file"
            name="image_header"
            onChange={handleInputChange}
            ref={imageHeaderInputRef}
            className="p-2 text-white rounded-lg"
          />
          <input
            type="file"
            name="carousel_images"
            ref={carouselImagesInputRef}
            multiple
            onChange={handleInputChange}
            className="p-2 text-white rounded-lg"
          />
          <input
            type="file"
            name="videos"
            ref={videosInputRef}
            multiple
            onChange={handleInputChange}
            className="p-2 text-white rounded-lg"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            {isEditMode ? 'Update Project' : 'Add Project'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Space;