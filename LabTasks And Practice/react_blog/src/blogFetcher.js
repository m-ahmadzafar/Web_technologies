import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogFetcher = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className='blogFetcher'>
      <h2>Blog List</h2>
      <h3>This data is coming from the backend.</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>
              <h3>{blog.title}</h3>
              <p>Author: {blog.author}</p>
              <p>{blog.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default BlogFetcher;