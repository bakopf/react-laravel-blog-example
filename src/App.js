// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'; // Import the Navbar component
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import AddPost from './components/AddPost';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Include the Navbar component */}
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/add-post" element={<AddPost />} />
          </Routes>
          <footer className="text-center mt-5">
            <p>&copy; 2024 My Blog. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
