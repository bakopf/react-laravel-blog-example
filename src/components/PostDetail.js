// src/components/PostDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div>
      {post ? (
        <div>
          <h1>{post.headline}</h1>
          {post.filepath && (
            <img src={`http://127.0.0.1:8000/storage/${post.filepath}`} className="img-fluid rounded-start" alt={post.headline} />
          )}   
          <p>{post.text}</p>
          <p><strong>Author:</strong> {post.author}</p>
          <p><strong>Publish Date:</strong> {post.publish_date}</p>
          <Link to="/" className="btn btn-primary">Return to Frontpage</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetail;
