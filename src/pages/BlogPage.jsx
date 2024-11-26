import React, { useState, useEffect } from 'react'; 
import MarkdownRenderer from '../components/MarkdownRenderer';

const BlogPage = () => {
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

  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
    setSelectedPost(sortedPosts[0]);
  }, []);

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
                    className="w-12 h-12 rounded-full"
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
                onClick={() => setSelectedPost(post)}
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
