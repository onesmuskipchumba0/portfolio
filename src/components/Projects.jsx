import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaRegFolder } from 'react-icons/fa';

// Import your local images
import studentsAdminImg from '../assets/images/students-admin.png';
import cineverseImg from '../assets/images/cineverse.png';
import newsAppImg from '../assets/images/news-app.png';

const Projects = () => {
  const [repos, setRepos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Updated featuredProjects with local images
  const featuredProjects = [
    {
      id: 1,
      name: "StudentsAdminDashboard",
      description: "A comprehensive dashboard for managing student data, attendance, and performance. Built with MERN stack and features real-time updates, data visualization, and responsive design.",
      image: studentsAdminImg,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/onesmuskipchumba0/StudentsAdminDashboard",
      demo: "https://students-admin-dashboard.vercel.app",
    },
    {
      id: 2,
      name: "Cineverse",
      description: "A modern movie streaming platform with features like user authentication, favorites list, and movie recommendations. Integrates with external movie APIs for real-time data.",
      image: cineverseImg,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/onesmuskipchumba0/Cineverse",
      demo: "https://cineverse-streaming.vercel.app",
    },
    {
      id: 3,
      name: "news-web-app",
      description: "A responsive news application that aggregates news from various sources. Features category filtering, search functionality, and bookmark capabilities.",
      image: newsAppImg,
      technologies: ["React", "Node.js", "Express", "News API", "Tailwind CSS"],
      github: "https://github.com/onesmuskipchumba0/news-web-app",
      demo: "https://news-web-app.vercel.app",
    }
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/onesmuskipchumba0/repos?sort=created&direction=desc');
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data = await response.json();
        const filteredRepos = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(filteredRepos);
      } catch (err) {
        console.error('Error fetching repos:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Render featured projects section
  const renderFeaturedProjects = () => (
    <div className="space-y-20 mb-20">
      {featuredProjects.map((project, index) => (
        <div 
          key={project.id}
          className={`flex flex-col ${
            index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } gap-8 items-center`}
        >
          {/* Project Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-xl shadow-2xl w-full object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 rounded-xl"></div>
            </div>
          </div>

          {/* Project Info */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold">{project.name}</h3>
            <p className="text-base-content/70">
              {project.description}
            </p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="badge badge-primary badge-outline"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary gap-2"
              >
                <FaGithub /> Source Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-primary gap-2"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Render other projects section
  const renderOtherProjects = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center min-h-[200px]">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      );
    }

    if (error) {
      return (
        <div className="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      );
    }

    if (!repos || repos.length === 0) {
      return (
        <div className="text-center text-base-content/70">
          No repositories found.
        </div>
      );
    }

    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.slice(0, 6).map((repo) => (
            <div key={repo.id} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body">
                <div className="flex items-center gap-2 mb-2">
                  <FaRegFolder className="text-primary text-xl" />
                  <h3 className="card-title text-lg font-bold truncate">
                    {repo.name}
                  </h3>
                </div>

                <p className="text-base-content/70 text-sm h-12 overflow-hidden">
                  {repo.description || 'No description available'}
                </p>

                <div className="mt-4 flex justify-between items-center">
                  <div className="badge badge-primary">{repo.language || 'N/A'}</div>
                  <div className="flex gap-4">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-sm"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost btn-sm"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* See More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/onesmuskipchumba0?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-wide gap-2"
          >
            <FaGithub className="text-lg" />
            See More Projects
          </a>
        </div>
      </>
    );
  };

  return (
    <section id="projects" className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Projects Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Showcase of my major full-stack applications
          </p>
        </div>

        {renderFeaturedProjects()}

        {/* Other Projects Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Other Projects</h3>
          <p className="text-base-content/70">
            Check out some of my other work on GitHub
          </p>
        </div>

        {renderOtherProjects()}
      </div>
    </section>
  );
};

export default Projects; 