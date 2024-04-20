// src/components/PostList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/posts');        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="card mb-3">
          <div className="card-body">
            <h2 className="card-title">
              <Link to={`/posts/${post.id}`}>{post.headline}</Link> {/* Link to detail page */}
            </h2>
            <p className="card-text">{post.text}</p>
            <p className="card-text"><small className="text-muted">Author: {post.author}</small></p>
            <p className="card-text"><small className="text-muted">Publish Date: {post.publish_date}</small></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;