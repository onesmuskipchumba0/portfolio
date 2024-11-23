import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    backend: ["Node.js", "Express", "Python", "Django"],
    database: ["MongoDB", "PostgreSQL", "MySQL"],
    tools: ["Git", "Docker", "AWS", "Firebase"]
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-24"
    >
      <h1 className="text-4xl font-bold mb-8">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="card bg-base-200">
            <div className="card-body">
              <h2 className="card-title capitalize">{category}</h2>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="badge badge-primary">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills; 