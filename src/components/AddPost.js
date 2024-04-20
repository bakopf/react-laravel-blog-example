// src/components/AddPost.js
import React, { useState } from 'react';
import axios from 'axios';

const AddPost = () => {
  const [author, setAuthor] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [headline, setHeadline] = useState('');
  const [text, setText] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get(`http://127.0.0.1:8000/api/create-post?author=${author}&publish_date=${publishDate}&headline=${headline}&text=${text}`);
      setSuccessMessage('Post created successfully');
      setErrorMessage('');
      resetForm();
    } catch (error) {
      console.error('Error creating post:', error);
      setErrorMessage('Error creating post');
      setSuccessMessage('');
    }
  };

  const resetForm = () => {
    setAuthor('');
    setPublishDate('');
    setHeadline('');
    setText('');
  };

  return (
    <div>
      <h1>Add New Blog Post</h1>
      {successMessage && (
        <div className="alert alert-success" role="alert">
          <span className="badge bg-success me-2">Success</span>
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          <span className="badge bg-danger me-2">Error</span>
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input type="text" className="form-control" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="publishDate" className="form-label">Publish Date</label>
          <input type="date" className="form-control" id="publishDate" value={publishDate} onChange={(e) => setPublishDate(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="headline" className="form-label">Headline</label>
          <input type="text" className="form-control" id="headline" value={headline} onChange={(e) => setHeadline(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">Text</label>
          <textarea className="form-control" id="text" rows="5" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddPost;
