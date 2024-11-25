import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaDatabase, FaTools, FaMobile, FaDocker, FaCloud } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiDjango, SiMongodb, SiPostgresql, SiMysql, SiGit, SiFirebase } from 'react-icons/si';
export const skillCategories = [
    {
      title: "Frontend Development",
      icon: FaReact,
      color: "#61DAFB",
      skills: [
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "React.js", icon: FaReact, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ]
    },
    {
      title: "Mobile Development",
      icon: FaMobile,
      color: "#61DAFB",
      skills: [
        { name: "React Native", icon: FaReact, color: "#61DAFB" },
        // Add more mobile development skills as needed
      ]
    },
    {
      title: "Backend Development",
      icon: FaNodeJs,
      color: "#339933",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "Django", icon: SiDjango, color: "#092E20" },
      ]
    },
    {
      title: "Database",
      icon: FaDatabase,
      color: "#47A248",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: FaTools,
      color: "#F05032",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "AWS Cloud", icon: FaCloud, color: "#FF9900" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      ]
    }
  ];