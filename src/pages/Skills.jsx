import { motion } from 'framer-motion';

import { skillCategories } from '../data/skills';
const Skills = () => {

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