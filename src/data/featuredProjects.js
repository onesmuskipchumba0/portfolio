// Import all images from each directory
const studentsAdminImages = Object.values(import.meta.glob('../assets/images/studentsAdmin/*.{png,jpg,jpeg,svg}', { eager: true, query: '?url', import: 'default' }));
const cineverseImages = Object.values(import.meta.glob('../assets/images/cineverse/*.{png,jpg,jpeg,svg}', { eager: true, query: '?url', import: 'default' }));
const newsAppImages = Object.values(import.meta.glob('../assets/images/newsApp/*.{png,jpg,jpeg,svg}', { eager: true, query: '?url', import: 'default' }));
const mkulimaExpoImages = Object.values(import.meta.glob('../assets/images/mkulimaExpo/*.{png,jpg,jpeg,svg}', { eager: true, query: '?url', import: 'default' }));
export const featuredProjects = [
    {
      id: 1,
      name: "EduAdmin - Students Admin Dashboard",
      description: "A comprehensive dashboard for managing student data, attendance, and performance. Built with MERN stack and features real-time updates, data visualization, and responsive design.",
      images: studentsAdminImages,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/onesmuskipchumba0/StudentsAdminDashboard",
      demo: "https://students-admin-dashboard.vercel.app",
    },
    {
        id: 2,
        name: "Cineverse",
        description: "A modern movie streaming platform with features like user authentication, favorites list, and movie recommendations. Integrates with external movie APIs for real-time data.",
        images: cineverseImages,
        technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
        github: "https://github.com/onesmuskipchumba0/Cineverse",
        demo: "https://cineverse-streaming.vercel.app",
      },
      {
        id: 3,
        name: "NewsHub - News Web App",
        description: "A responsive news application that aggregates news from various sources. Features category filtering, search functionality, and bookmark capabilities.",
        images: newsAppImages,
        technologies: ["React", "Node.js", "Express", "News API", "Tailwind CSS"],
        github: "https://github.com/onesmuskipchumba0/news-web-app",
        demo: "https://news-web-app.vercel.app",
      },
      {
        id:4,
        name: "Mkulima Expo",
        description: "A responsiveweb application that connects farmers with potential buyers for their produce. Features real-time product listing, chat and calls, and marketplace capabilities.",
        images: mkulimaExpoImages,
        technologies: ["React", "Node.js", "Express", "Supabase", "Tailwind CSS"],
        github: "https://github.com/onesmuskipchumba0/mkulima-expo",
        demo: "https://mkulima-expo.vercel.app",
      }
    // ... other featured projects
  ];