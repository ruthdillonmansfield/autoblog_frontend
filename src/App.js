import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await axios.get('https://lazy-gold-xerus-boot.cyclic.app/blog-posts');
        setBlogPosts(response.data);
        console.log(response.data);
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchBlogPosts();
  }, []);

  return (
    <div>
      <h1>All Blog Posts:</h1>
      {blogPosts.map((blogPost) => (
        <div key={blogPost.index}>
          <h2>{blogPost.title}</h2>
          <p>Date: {blogPost.date}</p>
          <p>{blogPost.content}</p>
          <Link to={`/posts/${blogPost.index}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default App;
