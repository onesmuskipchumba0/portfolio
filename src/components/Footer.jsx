import { FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-base-200 pt-16">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Onesmus Bett</h3>
            <p className="text-base-content/70 mb-4">
              A passionate MERN stack developer focused on creating innovative web solutions
              and delivering exceptional user experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/onesmuskipchumba0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm btn-ghost"
                title="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0197ca6f21c4684883?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm btn-ghost"
                title="Upwork"
              >
                <SiUpwork className="text-xl" />
              </a>
              <a
                href="https://www.fiverr.com/onesmus509"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-sm btn-ghost"
                title="Fiverr"
              >
                <SiFiverr className="text-xl" />
              </a>
              <a
                href="mailto:onesmuskipchumba5@gmail.com"
                className="btn btn-circle btn-sm btn-ghost"
                title="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-base-content/70 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-base-content/70 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-base-content/70 hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-base-content/70 hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base-content/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-base-content/70">
                <span className="font-semibold">Email:</span>{' '}
                <a 
                  href="mailto:onesmuskipchumba5@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  onesmuskipchumba5@gmail.com
                </a>
              </li>
              <li className="text-base-content/70">
                <span className="font-semibold">Location:</span> Kenya
              </li>
              <li className="text-base-content/70">
                <span className="font-semibold">Freelance:</span>{' '}
                <span className="text-success">Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-base-content/70 text-sm">
              © {new Date().getFullYear()} Onesmus Bett. All rights reserved.
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="btn btn-circle btn-primary btn-sm"
              title="Back to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 