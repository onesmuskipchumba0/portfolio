import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaNodeJs, FaReact, FaCode, FaServer, FaMobile, FaDatabase, FaExternalLinkAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiGit, SiUpwork, SiFiverr } from 'react-icons/si';
import { featuredProjects } from '../data/featuredProjects';

const Home = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/onesmuskipchumba0');
        const data = await response.json();
        setGithubData(data);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description: "Responsive web applications using React.js, delivering seamless user experiences with modern UI/UX principles.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML/CSS"]
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description: "Robust server-side solutions with Node.js and Express, including RESTful APIs and database integration.",
      technologies: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    {
      icon: FaMobile,
      title: "Full Stack Development",
      description: "End-to-end web application development using the MERN stack, from concept to deployment.",
      technologies: ["MERN Stack", "Redux", "Authentication", "Cloud Deployment"]
    },
    {
      icon: FaDatabase,
      title: "Database Design",
      description: "Efficient database architecture and optimization using MongoDB, ensuring scalable data management.",
      technologies: ["MongoDB", "Mongoose", "Data Modeling", "Query Optimization"]
    }
  ];


  return (
    <>
      <motion.div 
        className="hero min-h-screen bg-base-100"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="hero-content flex-col lg:flex-row-reverse gap-12 px-4 sm:px-6 lg:px-8 py-20">
          {/* Avatar Section */}
          <motion.div 
            className="max-w-sm"
            variants={itemVariants}
          >
            {loading ? (
              <div className="w-[300px] h-[300px] rounded-full animate-pulse bg-base-300" />
            ) : (
              <div className="avatar">
                <div className="w-[300px] h-[300px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 relative group">
                  <img 
                    src={githubData?.avatar_url} 
                    alt="Onesmus Bett" 
                    className="rounded-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            )}
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="max-w-2xl"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold leading-tight"
              variants={itemVariants}
            >
              Hi, I'm <span className="text-primary">Onesmus Bett</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold mt-2 text-base-content/80"
              variants={itemVariants}
            >
              MERN Stack Developer
            </motion.h2>
            
            <motion.p 
              className="py-6 text-base-content/70 text-lg"
              variants={itemVariants}
            >
              {githubData?.bio || 
                "I specialize in building full-stack web applications using MongoDB, Express.js, React, and Node.js. With a passion for clean code and user-centric design, I create efficient and scalable solutions."}
            </motion.p>

            {/* Tech Stack Icons */}
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              variants={itemVariants}
            >
              {[
                { icon: FaReact, tip: "React", color: "#61DAFB" },
                { icon: FaNodeJs, tip: "Node.js", color: "#339933" },
                { icon: SiMongodb, tip: "MongoDB", color: "#47A248" },
                { icon: SiExpress, tip: "Express.js", color: "#000000" },
                { icon: SiTailwindcss, tip: "Tailwind CSS", color: "#06B6D4" },
                { icon: SiGit, tip: "Git", color: "#F05032" }
              ].map((tech, index) => (
                <motion.div
                  key={tech.tip}
                  className="tooltip tooltip-primary"
                  data-tip={tech.tip}
                  whileHover={{ scale: 1.2 }}
                  variants={itemVariants}
                >
                  <tech.icon 
                    className="text-3xl transition-transform duration-300" 
                    style={{ color: tech.color }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <a
                href="https://github.com/onesmuskipchumba0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary gap-2 group"
              >
                <FaGithub className="text-xl group-hover:rotate-12 transition-transform" />
                GitHub
              </a>
              <a
                href="https://www.fiverr.com/onesmus509"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-primary gap-2 group"
              >
                <SiFiverr className="text-xl group-hover:scale-110 transition-transform" />
                Fiverr
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0197ca6f21c4684883?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-primary gap-2 group"
              >
                <SiUpwork className="text-xl group-hover:scale-110 transition-transform" />
                Upwork
              </a>
              <a
                href="mailto:onesmuskipchumba5@gmail.com"
                className="btn btn-outline btn-primary gap-2 group"
              >
                <FaEnvelope className="text-xl group-hover:scale-110 transition-transform" />
                Contact
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="stats shadow mt-8 bg-base-200"
              variants={itemVariants}
            >
              <div className="stat">
                <div className="stat-title">Repositories</div>
                <div className="stat-value text-primary">{githubData?.public_repos || '0'}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Experience</div>
                <div className="stat-value text-secondary">2+ years</div>
              </div>
              <div className="stat">
                <div className="stat-title">Projects</div>
                <div className="stat-value text-accent">10+</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.section 
        className="py-20 bg-base-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-primary">Services</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Professional web development services for clients worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card-body">
                  <service.icon className="text-4xl text-primary mb-4" />
                  <h3 className="card-title text-xl mb-2">{service.title}</h3>
                  <p className="text-base-content/70 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span key={tech} className="badge badge-primary badge-outline">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <motion.section 
        className="py-20 bg-base-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Showcase of my major full-stack applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                      <span 
                        key={i} 
                        className="badge badge-primary badge-outline transform hover:scale-105 transition-transform"
                      >
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
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <a
              href="/projects"
              className="btn btn-primary btn-wide gap-2 group"
            >
              <FaGithub className="group-hover:rotate-12 transition-transform" />
              View All Projects
            </a>
          </div>
        </div>
      </motion.section>

      {/* Freelance Platforms Section */}
      <motion.section 
        className="py-20 bg-base-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work With <span className="text-primary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              Hire me through your preferred platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Upwork Card */}
            <motion.div
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="card-body">
                <SiUpwork className="text-4xl text-[#14a800] mb-4" />
                <h3 className="card-title text-xl mb-2">Hire on Upwork</h3>
                <p className="text-base-content/70 mb-4">
                  Top-rated freelancer providing professional web development services
                </p>
                <div className="card-actions justify-end">
                  <a
                    href="https://www.upwork.com/freelancers/~0197ca6f21c4684883?mp_source=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Fiverr Card */}
            <motion.div
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="card-body">
                <SiFiverr className="text-4xl text-[#1dbf73] mb-4" />
                <h3 className="card-title text-xl mb-2">Hire on Fiverr</h3>
                <p className="text-base-content/70 mb-4">
                  Level 2 seller specializing in web application development
                </p>
                <div className="card-actions justify-end">
                  <a
                    href="https://www.fiverr.com/onesmus509"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Gigs
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home; 