import React, { useState, useEffect } from 'react';
import MarkdownRenderer from '../components/MarkdownRenderer';

const BlogPage = () => {
  // Sample blog posts - in a real app, this would likely come from a CMS or API
  const blogPosts = [
    { 
      id: 1, 
      title: 'Introduction to React and Tailwind', 
      summary: 'Explore the powerful combination of React, Tailwind CSS, and Daisy UI',
      author: 'Onesmus Bett',
      date: 'November 26, 2024',
      mdFile: '/posts/react-tailwind-daisy-blog.md',
      tags: ['React', 'Tailwind', 'Web Development']
    },
    // You can add more blog posts here
    { 
      id: 2, 
      title: 'Advanced React State Management', 
      summary: 'Deep dive into modern state management techniques',
      author: 'Onesmus Bett',
      date: 'December 10, 2024',
      mdFile: '/posts/react-state-management-blog.md',
      tags: ['React', 'State Management', 'Hooks']
    }
  ];

  // State to track the selected post
  const [selectedPost, setSelectedPost] = useState(null);

  // Effect to automatically select the most recent post when component loads
  useEffect(() => {
    // Sort posts by date in descending order and select the first (most recent) post
    const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
    setSelectedPost(sortedPosts[0]);
  }, []);

  return (
    <div className="min-h-screen bg-base-200">
      {/* Navigation */}
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Tech Blog</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Categories</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar - Blog Post List */}
          <div className="md:col-span-1 space-y-4">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Recent Posts</h2>
                {blogPosts.map((post) => (
                  <div 
                    key={post.id} 
                    className={`cursor-pointer p-4 hover:bg-base-200 rounded-lg transition-colors ${selectedPost?.id === post.id ? 'bg-primary text-primary-content' : ''}`}
                    onClick={() => setSelectedPost(post)}
                  >
                    <h3 className="font-bold">{post.title}</h3>
                    <p className="text-sm">{post.summary}</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs">{post.author}</span>
                      <span className="text-xs">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Section */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag) => (
                    <span key={tag} className="badge badge-primary badge-outline">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Markdown Renderer */}
          <div className="md:col-span-2">
            {selectedPost ? (
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h1 className="card-title text-3xl mb-4">{selectedPost.title}</h1>
                  <div className="flex items-center mb-4 space-x-4">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img 
                          src={`/avatars/${selectedPost.author.toLowerCase().replace(' ', '-')}.jpg`} 
                          alt={selectedPost.author} 
                          onError={(e) => {
                            // Fallback to a default avatar if image fails to load
                            e.target.onerror = null;
                            e.target.src = '/avatars/default-avatar.jpg';
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold">{selectedPost.author}</p>
                      <p className="text-sm text-base-content text-opacity-40">{selectedPost.date}</p>
                    </div>
                  </div>
                  
                  {/* Markdown Renderer */}
                  <MarkdownRenderer filePath={selectedPost.mdFile} />
                </div>
              </div>
            ) : (
              <div className="alert alert-info shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>No posts available</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>© 2024 Tech Blog - Built with React, Tailwind CSS, and Daisy UI</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;