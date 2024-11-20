import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub,
  FaNpm,
  FaDatabase,
  FaCode
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPostman,
  SiVisualstudiocode,
  SiRedux,
  SiTypescript,
  SiFirebase
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-100" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "REST APIs", icon: <FaCode className="text-primary" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
      ]
    },
    {
      title: "Tools & Version Control",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-100" /> },
        { name: "VS Code", icon: <SiVisualstudiocode className="text-[#007ACC]" /> },
        { name: "npm", icon: <FaNpm className="text-[#CB3837]" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-base-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            A comprehensive list of my technical skills and technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="card-body">
                <h3 className="card-title text-xl font-bold mb-4">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-base-200 transition-colors duration-200"
                    >
                      <div className="text-2xl">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills or Proficiency Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-6">Proficiency Level</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="radial-progress text-primary" style={{"--value": 90}}>90%</div>
            <div className="radial-progress text-primary" style={{"--value": 85}}>85%</div>
            <div className="radial-progress text-primary" style={{"--value": 80}}>80%</div>
          </div>
          <div className="flex justify-center gap-8 mt-4 text-sm text-base-content/70">
            <span>Frontend</span>
            <span>Backend</span>
            <span>Tools</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 