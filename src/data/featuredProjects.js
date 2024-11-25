// Import your local images
import studentsAdminImg from '../assets/images/students-admin.png';
import cineverseImg from '../assets/images/cineverse.png';
import newsAppImg from '../assets/images/news-app.png';
export const featuredProjects = [
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