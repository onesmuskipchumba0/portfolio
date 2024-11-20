import { FaGithub, FaEnvelope, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiGit } from 'react-icons/si';

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-100" id="home">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 px-4 sm:px-6 lg:px-8">
        {/* Image Section */}
        <div className="max-w-sm rounded-lg shadow-2xl overflow-hidden bg-base-200 animate-fade-in">
          <div className="w-[300px] h-[300px] bg-gradient-to-r from-primary to-secondary opacity-90"></div>
        </div>

        {/* Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-primary">Onesmus Bett</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-base-content/80">
            MERN Stack Developer
          </h2>
          <p className="py-6 text-base-content/70 text-lg">
            I specialize in building modern web applications using MongoDB, Express.js, React, and Node.js. 
            With expertise in Tailwind CSS and Git, I create responsive and scalable solutions.
          </p>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap gap-4 my-6">
            <div className="tooltip" data-tip="MongoDB">
              <SiMongodb className="w-8 h-8 text-green-500" />
            </div>
            <div className="tooltip" data-tip="Express.js">
              <SiExpress className="w-8 h-8 text-gray-500" />
            </div>
            <div className="tooltip" data-tip="React">
              <FaReact className="w-8 h-8 text-blue-400" />
            </div>
            <div className="tooltip" data-tip="Node.js">
              <FaNodeJs className="w-8 h-8 text-green-600" />
            </div>
            <div className="tooltip" data-tip="Tailwind CSS">
              <SiTailwindcss className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="tooltip" data-tip="Git">
              <SiGit className="w-8 h-8 text-orange-500" />
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://github.com/onesmuskipchumba0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary gap-2"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>
            <a 
              href="mailto:onesmuskipchumba5@gmail.com"
              className="btn btn-outline btn-primary gap-2"
            >
              <FaEnvelope className="w-5 h-5" />
              Contact Me
            </a>
          </div>

          {/* Quick Stats */}
          <div className="stats shadow mt-8 bg-base-200">
            <div className="stat">
              <div className="stat-title">Projects</div>
              <div className="stat-value text-primary">10+</div>
            </div>
            <div className="stat">
              <div className="stat-title">Experience</div>
              <div className="stat-value text-secondary">2+ years</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 