import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRegFolder, FaStar, FaCodeBranch } from 'react-icons/fa';
// Import your local images
import studentsAdminImg from '../assets/images/students-admin.png';
import cineverseImg from '../assets/images/cineverse.png';
import newsAppImg from '../assets/images/news-app.png';

const Projects = () => {
  const [repos, setRepos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const featuredProjects = [
    {
      id: 1,
      name: "EduAdmin - Students Admin Dashboard",
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
        name: "NewsHub - News Web App",
        description: "A responsive news application that aggregates news from various sources. Features category filtering, search functionality, and bookmark capabilities.",
        image: newsAppImg,
        technologies: ["React", "Node.js", "Express", "News API", "Tailwind CSS"],
        github: "https://github.com/onesmuskipchumba0/news-web-app",
        demo: "https://news-web-app.vercel.app",
      }
    // ... other featured projects
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/onesmuskipchumba0/repos?sort=created&direction=desc');
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data = await response.json();
        const filteredRepos = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(filteredRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const renderFeaturedProject = (project, index) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative bg-base-200 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      {/* Project Image with Overlay */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-300/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 p-6 space-y-3">
            <h3 className="text-2xl font-bold text-white">{project.name}</h3>
            <p className="text-white/90">{project.description}</p>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span key={i} className="badge badge-primary badge-outline transform hover:scale-105 transition-transform">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm group/btn"
          >
            <FaGithub className="group-hover/btn:rotate-12 transition-transform" />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-primary btn-sm group/btn"
          >
            <FaExternalLinkAlt className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );

  const renderGithubProject = (repo) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="card-body">
        <div className="flex items-center gap-2">
          <FaRegFolder className="text-primary text-xl transform group-hover:rotate-12 transition-transform" />
          <h3 className="card-title text-lg">{repo.name.replace(/-/g, ' ')}</h3>
        </div>

        <p className="text-base-content/70 text-sm h-12 overflow-hidden">
          {repo.description || 'No description available'}
        </p>

        <div className="flex flex-wrap gap-2 my-2">
          {repo.topics?.map((topic, i) => (
            <span key={i} className="badge badge-sm badge-primary badge-outline">
              {topic}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-4 text-sm text-base-content/70">
            <span className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1">
              <FaCodeBranch />
              {repo.forks_count}
            </span>
          </div>

          <div className="flex gap-2">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm group/btn"
            >
              <FaGithub className="text-lg group-hover/btn:rotate-12 transition-transform" />
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm group/btn"
              >
                <FaExternalLinkAlt className="text-lg group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-base-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Projects */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Showcase of my major full-stack applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, index) => renderFeaturedProject(project, index))}
        </div>

        {/* GitHub Projects */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Other Projects</h3>
          <p className="text-base-content/70">
            Additional projects from my GitHub portfolio
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : error ? (
          <div className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos?.map(repo => (
              <motion.div
                key={repo.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="card-body">
                  {/* Project Title */}
                  <div className="flex items-center gap-2">
                    <FaRegFolder className="text-primary text-xl transform group-hover:rotate-12 transition-transform" />
                    <h3 className="card-title text-lg">
                      {repo.name.replace(/-/g, ' ')}
                    </h3>
                  </div>

                  {/* Project Description */}
                  <p className="text-base-content/70 text-sm min-h-[3rem]">
                    {repo.description || 'No description available'}
                  </p>

                  {/* Technologies/Topics */}
                  <div className="flex flex-wrap gap-2 my-2">
                    {repo.language && (
                      <span className="badge badge-primary">
                        {repo.language}
                      </span>
                    )}
                    {repo.topics?.map((topic, i) => (
                      <span 
                        key={i} 
                        className="badge badge-outline badge-primary badge-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Stats and Links */}
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex gap-4 text-sm text-base-content/70">
                      <span className="flex items-center gap-1" title="Stars">
                        <FaStar className="text-yellow-500" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1" title="Forks">
                        <FaCodeBranch />
                        {repo.forks_count}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost btn-sm group/btn"
                        title="View Source"
                      >
                        <FaGithub className="text-lg group-hover/btn:rotate-12 transition-transform" />
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-ghost btn-sm group/btn"
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt className="text-lg group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Last Updated */}
                  <div className="text-xs text-base-content/50 mt-4">
                    Last updated: {new Date(repo.updated_at).toLocaleDateString()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Projects; 