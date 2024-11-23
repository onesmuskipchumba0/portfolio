import { motion } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin, FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const About = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/onesmuskipchumba0');
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data');
        }
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

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-base-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            {githubData?.bio || 'A passionate MERN Stack Developer dedicated to creating efficient and scalable web solutions'}
          </p>
        </div>

        {/* Profile and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Column */}
          <div className="space-y-6">
            {loading ? (
              <div className="w-full aspect-square rounded-lg bg-base-300 animate-pulse"></div>
            ) : (
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={githubData?.avatar_url} 
                    alt="Onesmus Bett" 
                    className="w-full h-auto"
                  />
                </div>
                
                {/* GitHub Stats */}
                <div className="bg-base-100 p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold mb-2">GitHub Stats</h3>
                  <ul className="space-y-2 text-base-content/70">
                    <li>Repositories: {githubData?.public_repos}</li>
                    <li>Followers: {githubData?.followers}</li>
                    <li>Following: {githubData?.following}</li>
                  </ul>
                </div>

                {/* Social Links */}
                <div className="flex flex-col gap-2">
                  <a 
                    href={githubData?.html_url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline w-full"
                  >
                    <FaGithub className="mr-2" /> GitHub Profile
                  </a>
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline w-full"
                  >
                    <FaLinkedin className="mr-2" /> LinkedIn Profile
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Info Columns */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold mb-4">
              Full Stack Developer & Web Enthusiast
            </h3>
            <p className="text-base-content/70 leading-relaxed">
              I'm a dedicated MERN Stack developer with a strong passion for building web applications 
              that solve real-world problems. My journey in web development started with a curiosity 
              to understand how things work on the internet, which led me to dive deep into modern 
              web technologies.
            </p>

            {/* Personal Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-base-content/70">{githubData?.name || 'Onesmus Bett'}</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-base-content/70">onesmuskipchumba5@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">Location:</p>
                <p className="text-base-content/70">{githubData?.location || 'Kenya'}</p>
              </div>
              <div>
                <p className="font-medium">Available for:</p>
                <p className="text-base-content/70">Freelance & Full-time</p>
              </div>
            </div>

            {/* Download CV Button */}
            <button 
              onClick={() => window.open('./resumedocx.pdf', '_blank', 'noopener,noreferrer')}
              className="btn btn-primary gap-2"
            >
              <FaDownload /> View CV
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Frontend Card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <FaCode className="w-8 h-8 text-primary mb-2" />
              <h3 className="card-title">Frontend</h3>
              <ul className="text-base-content/70">
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>JavaScript (ES6+)</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>

          {/* Backend Card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <FaServer className="w-8 h-8 text-primary mb-2" />
              <h3 className="card-title">Backend</h3>
              <ul className="text-base-content/70">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>RESTful APIs</li>
                <li>Authentication</li>
              </ul>
            </div>
          </div>

          {/* Database Card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <FaDatabase className="w-8 h-8 text-primary mb-2" />
              <h3 className="card-title">Database</h3>
              <ul className="text-base-content/70">
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Data Modeling</li>
                <li>Query Optimization</li>
              </ul>
            </div>
          </div>

          {/* Tools Card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <FaTools className="w-8 h-8 text-primary mb-2" />
              <h3 className="card-title">Tools</h3>
              <ul className="text-base-content/70">
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Postman</li>
                <li>npm/yarn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About; 