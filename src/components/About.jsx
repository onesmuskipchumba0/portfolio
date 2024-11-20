import { FaDownload, FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-base-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            A passionate MERN Stack Developer dedicated to creating efficient and scalable web solutions
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">
              Full Stack Developer & Web Enthusiast
            </h3>
            <p className="text-base-content/70 leading-relaxed">
              I'm a dedicated MERN Stack developer with a strong passion for building web applications 
              that solve real-world problems. My journey in web development started with a curiosity 
              to understand how things work on the internet, which led me to dive deep into modern 
              web technologies.
            </p>
            <p className="text-base-content/70 leading-relaxed">
              I specialize in creating responsive and user-friendly applications using MongoDB, 
              Express.js, React, and Node.js. My experience with Tailwind CSS allows me to design 
              beautiful and consistent user interfaces, while my Git expertise ensures smooth 
              collaboration and version control.
            </p>

            {/* Personal Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-base-content/70">Onesmus Bett</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-base-content/70">onesmuskipchumba5@gmail.com</p>
              </div>
              <div>
                <p className="font-medium">From:</p>
                <p className="text-base-content/70">Kenya</p>
              </div>
              <div>
                <p className="font-medium">Available for:</p>
                <p className="text-base-content/70">Freelance & Full-time</p>
              </div>
            </div>

            {/* Download CV Button */}
            <button className="btn btn-primary gap-2">
              <FaDownload /> Download CV
            </button>
          </div>

          {/* Right Column - Skills Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Frontend Card */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <FaCode className="w-8 h-8 text-primary mb-2" />
                <h3 className="card-title">Frontend</h3>
                <ul className="text-base-content/70">
                  <li>React.js</li>
                  <li>Tailwind CSS</li>
                  <li>JavaScript (ES6+)</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
            </div>

            {/* Backend Card */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <FaServer className="w-8 h-8 text-primary mb-2" />
                <h3 className="card-title">Backend</h3>
                <ul className="text-base-content/70">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>RESTful APIs</li>
                  <li>Authentication</li>
                </ul>
              </div>
            </div>

            {/* Database Card */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <FaDatabase className="w-8 h-8 text-primary mb-2" />
                <h3 className="card-title">Database</h3>
                <ul className="text-base-content/70">
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>Data Modeling</li>
                  <li>Query Optimization</li>
                </ul>
              </div>
            </div>

            {/* Tools Card */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <FaTools className="w-8 h-8 text-primary mb-2" />
                <h3 className="card-title">Tools</h3>
                <ul className="text-base-content/70">
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>Postman</li>
                  <li>npm/yarn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 