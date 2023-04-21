import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


function Post({ match, i }) {
  const [blogPost, setBlogPost] = useState(null);
  console.log(match, i);
  

  useEffect(() => {
    async function fetchBlogPost() {
      try {
        // Fetch the blog post with the specified ID from the Express server
        const response = await axios.get(`https://lazy-gold-xerus-boot.cyclic.app/blog-posts/${match.params.id}`);
        setBlogPost(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBlogPost();
  }, [match.params.id]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>Tags: {blogPost.tags.join(', ')}</p>
      <p>Date: {new Date(blogPost.date).toLocaleDateString()}</p>
      <p>{blogPost.content}</p>
    </div>
  );
}

export default withRouter(Post);



