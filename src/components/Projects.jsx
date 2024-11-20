import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/onesmuskipchumba0/repos?sort=created&direction=desc');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        // Filter out forked repositories and sort by stars
        const filteredRepos = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(filteredRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Function to format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section id="projects" className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Explore my latest projects and contributions on GitHub
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center min-h-[200px]">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div key={repo.id} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body">
                {/* Repository Name */}
                <h3 className="card-title text-lg font-bold truncate">
                  {repo.name}
                  {repo.private && (
                    <div className="badge badge-secondary">Private</div>
                  )}
                </h3>

                {/* Repository Description */}
                <p className="text-base-content/70 text-sm h-12 overflow-hidden">
                  {repo.description || 'No description available'}
                </p>

                {/* Technologies Used */}
                <div className="my-2">
                  <div className="badge badge-primary mr-2">{repo.language || 'N/A'}</div>
                  <div className="badge badge-ghost">
                    <FaStar className="mr-1" /> {repo.stargazers_count}
                  </div>
                  <div className="badge badge-ghost ml-2">
                    <FaCodeBranch className="mr-1" /> {repo.forks_count}
                  </div>
                </div>

                {/* Last Updated */}
                <p className="text-xs text-base-content/50 mt-2">
                  Updated: {formatDate(repo.updated_at)}
                </p>

                {/* Action Buttons */}
                <div className="card-actions justify-end mt-4">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-ghost gap-2"
                  >
                    <FaGithub /> Code
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-primary gap-2"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 