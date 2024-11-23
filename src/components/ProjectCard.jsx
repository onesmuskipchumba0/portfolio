import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaClock } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { 
    title, 
    description, 
    technologies, 
    githubLink, 
    liveLink,
    stars,
    forks,
    updatedAt
  } = project;

  return (
    <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="card-body">
        {/* Project Title */}
        <h2 className="card-title capitalize">
          {title.replace(/-/g, ' ')}
        </h2>

        {/* Project Description */}
        <p className="text-sm">{description}</p>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2 my-2">
          {technologies.map((tech, index) => (
            tech && (
              <span 
                key={index} 
                className="badge badge-primary badge-sm"
              >
                {tech}
              </span>
            )
          ))}
        </div>

        {/* Project Stats */}
        <div className="flex gap-4 text-sm text-base-content/70">
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-500" />
            {stars}
          </span>
          <span className="flex items-center gap-1">
            <FaCodeBranch />
            {forks}
          </span>
          <span className="flex items-center gap-1">
            <FaClock />
            {updatedAt}
          </span>
        </div>

        {/* Project Links */}
        <div className="card-actions justify-end mt-4">
          <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-ghost"
          >
            <FaGithub className="mr-2" /> Code
          </a>
          {liveLink && (
            <a 
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
            >
              <FaExternalLinkAlt className="mr-2" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 