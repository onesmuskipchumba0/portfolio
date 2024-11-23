import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/onesmuskipchumba0',
      color: 'hover:text-gray-100'
    },
    {
      name: 'Upwork',
      icon: SiUpwork,
      url: 'https://www.upwork.com/freelancers/~0197ca6f21c4684883?mp_source=share',
      color: 'hover:text-[#14a800]'
    },
    {
      name: 'Fiverr',
      icon: SiFiverr,
      url: 'https://www.fiverr.com/onesmus509',
      color: 'hover:text-[#1dbf73]'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:onesmuskipchumba5@gmail.com',
      color: 'hover:text-primary'
    }
  ];

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Frontend Development', href: '#services' },
        { name: 'Backend Development', href: '#services' },
        { name: 'Full Stack Development', href: '#services' },
        { name: 'Database Design', href: '#services' }
      ]
    },
    {
      title: 'Hire Me',
      links: [
        { name: 'Upwork', href: 'https://www.upwork.com/freelancers/~0197ca6f21c4684883?mp_source=share' },
        { name: 'Fiverr', href: 'https://www.fiverr.com/onesmus509' },
        { name: 'Direct Contact', href: 'mailto:onesmuskipchumba5@gmail.com' }
      ]
    }
  ];

  return (
    <motion.footer 
      className="bg-base-300 text-base-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Onesmus Bett</h2>
            <p className="text-base-content/70">
              Full Stack Developer specializing in MERN stack development. Building efficient and scalable web applications.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl transition-colors duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-base-content/70 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-content/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-base-content/70">
              © {currentYear} Onesmus Bett. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-base-content/70">
              <a href="/privacy" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 