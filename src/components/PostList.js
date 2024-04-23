// src/components/PostList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="mb-4">Latest Blog Posts</h1>
      {posts.map(post => (
        <Link key={post.id} to={`/posts/${post.id}`} className="text-decoration-none text-dark">
          <div className="card mb-5 shadow">
            <div className="row g-0">
            {post.filepath && (
                <div className="col-md-4">
                  <img src={`http://127.0.0.1:8000/storage/${post.filepath}`} className="img-fluid rounded-start" alt={post.headline} />
                </div>
              )}
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">{post.headline}</h2>
                  <p className="card-text">{post.text}</p>
                  <p className="card-text"><small className="text-muted">Author: {post.author}</small></p>
                  <p className="card-text"><small className="text-muted">Publish Date: {post.publish_date}</small></p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostList;
