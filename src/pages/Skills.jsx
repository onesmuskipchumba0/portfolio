import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaDatabase, FaTools, FaMobile, FaDocker, FaCloud } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiDjango, SiMongodb, SiPostgresql, SiMysql, SiGit, SiFirebase } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      className="py-20 bg-base-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="card-body">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="text-2xl" style={{ color: category.color }} />
                  <h3 className="card-title">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-3 group"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <skill.icon 
                        className="text-xl transition-transform duration-300 group-hover:scale-110" 
                        style={{ color: skill.color }}
                      />
                      <span className="text-base-content/80 group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <p className="text-base-content/70">
            Continuously learning and exploring new technologies to stay current with industry trends.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills; 