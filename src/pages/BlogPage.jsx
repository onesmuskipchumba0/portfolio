import React, { useState, useEffect } from 'react'; 
import MarkdownRenderer from '../components/MarkdownRenderer';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React: A Comprehensive Guide",
      summary: "A detailed guide covering everything you need to know to begin your React journey, from setup to best practices.",
      author: 'Onesmus Bett',
      date: 'December 4, 2024',
      mdFile: '/posts/getting-started-with-react.md',
      tags: ['React', 'JavaScript', 'Web Development', 'Frontend']
    },
    { 
      id: 2, 
      title: 'Introduction to React and Tailwind', 
      summary: 'Explore the powerful combination of React, Tailwind CSS, and Daisy UI',
      author: 'Onesmus Bett',
      date: 'December 1, 2024',
      mdFile: '/posts/react-tailwind-daisy-blog.md',
      tags: ['React', 'Tailwind', 'Web Development']
    },
    { 
      id: 3, 
      title: 'Advanced React State Management', 
      summary: 'Deep dive into modern state management techniques',
      author: 'Onesmus Bett',
      date: 'November 24, 2024',
      mdFile: '/posts/react-state-management-blog.md',
      tags: ['React', 'State Management', 'Hooks']
    }
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    setSelectedPost(blogPosts[0]);
  }, []);

  const handlePostSelect = (post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen mt-24 font-sans">

      {/* Main Content */}
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Blog Content */}
        <main className="md:col-span-2 p-6 shadow-md rounded-lg">
          {selectedPost ? (
            <>
              <h1 className="text-3xl font-bold mb-4">{selectedPost.title}</h1>
              <div className="flex items-center mb-6 space-x-4">
                <div className="avatar">
                <img 
                style={{ width: '32px', height: '32px' }} // Inline style
                className="object-contain rounded-full"
                src={`/avatars/${selectedPost.author.toLowerCase().replace(' ', '-')}.jpg`} 
                alt={selectedPost.author} 
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/avatars/default-avatar.jpg';
                }}
                />


                </div>
                <div>
                  <p className="font-semibold">{selectedPost.author}</p>
                  <p className="text-sm text-gray-500">{selectedPost.date}</p>
                </div>
              </div>
　
              <MarkdownRenderer filePath={selectedPost.mdFile} />
              
              {/* Similar Posts Section */}
              <div className="mt-16 border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold mb-6">Similar Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts
                    .filter(post => post.id !== selectedPost.id)
                    .filter(post => 
                      post.tags.some(tag => selectedPost.tags.includes(tag))
                    )
                    .slice(0, 2)
                    .map(post => (
                      <div
                        key={post.id}
                        className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                        onClick={() => handlePostSelect(post)}
                      >
                        <div className="card-body">
                          <h3 className="card-title text-lg group-hover:text-primary transition-colors duration-300">
                            {post.title}
                          </h3>
                          <p className="text-base-content/70 text-sm">{post.summary}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {post.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="badge badge-primary badge-outline transform hover:scale-105 transition-transform duration-200"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex justify-between items-center mt-4">
                            <span className="text-sm text-base-content/60">
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1 text-sm text-primary group-hover:translate-x-1 transition-transform duration-300">
                              Read more 
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No posts available</p>
            </div>
          )}
        </main>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
            {blogPosts.map((post) => (
              <div 
                key={post.id} 
                onClick={() => handlePostSelect(post)}
                className={`cursor-pointer mb-5 p-4 rounded-lg transition-all ${
                  selectedPost?.id === post.id 
                    ? 'bg-blue-200 text-slate-900 border-l-4 border-blue-600' 
                    : 'hover:bg-blue-200 hover:text-slate-900'
                }`}
              >
                <h3 className="font-bold ">{post.title}</h3>
                <p className="text-sm ">{post.summary}</p>
                <div className="flex justify-between  mt-2 text-xs">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map(tag => (
                <span key={tag} className="badge badge-outline px-3 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default BlogPage;
