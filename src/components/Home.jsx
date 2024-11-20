import { useState, useEffect } from 'react';
import { FaGithub, FaEnvelope, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiGit } from 'react-icons/si';

const Home = () => {
  const [avatarUrl, setAvatarUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubAvatar = async () => {
      try {
        const response = await fetch('https://api.github.com/users/onesmuskipchumba0');
        const data = await response.json();
        setAvatarUrl(data.avatar_url);
      } catch (error) {
        console.error('Error fetching GitHub avatar:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubAvatar();
  }, []);

  return (
    <div className="hero min-h-screen bg-base-100" id="home">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 px-4 sm:px-6 lg:px-8">
        {/* Avatar Section */}
        <div className="max-w-sm">
          {loading ? (
            <div className="w-[300px] h-[300px] rounded-full animate-pulse bg-base-300" />
          ) : (
            <div className="avatar">
              <div className="w-[300px] h-[300px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                <img 
                  src={avatarUrl} 
                  alt="Onesmus Bett" 
                  className="rounded-full"
                />
              </div>
            </div>
          )}
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
            I specialize in building full-stack web applications using MongoDB, Express.js, 
            React, and Node.js. With a passion for clean code and user-centric design, 
            I create efficient and scalable solutions.
          </p>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="tooltip" data-tip="React">
              <FaReact className="text-3xl text-[#61DAFB]" />
            </div>
            <div className="tooltip" data-tip="Node.js">
              <FaNodeJs className="text-3xl text-[#339933]" />
            </div>
            <div className="tooltip" data-tip="MongoDB">
              <SiMongodb className="text-3xl text-[#47A248]" />
            </div>
            <div className="tooltip" data-tip="Express.js">
              <SiExpress className="text-3xl" />
            </div>
            <div className="tooltip" data-tip="Tailwind CSS">
              <SiTailwindcss className="text-3xl text-[#06B6D4]" />
            </div>
            <div className="tooltip" data-tip="Git">
              <SiGit className="text-3xl text-[#F05032]" />
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
              <FaGithub className="text-xl" />
              GitHub
            </a>
            <a
              href="mailto:onesmuskipchumba5@gmail.com"
              className="btn btn-outline btn-primary gap-2"
            >
              <FaEnvelope className="text-xl" />
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