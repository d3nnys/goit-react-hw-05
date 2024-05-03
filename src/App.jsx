// import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

export default function App() {
  return (
    <>
      <h1>Welcome</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
      </div>

      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/About" element={<div>About</div>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

// key API 231a94a8d378882c44b46cf4d8657a0f
// token eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzFhOTRhOGQzNzg4ODJjNDRiNDZjZjRkODY1N2EwZiIsInN1YiI6IjY2MmQzMzk1NWE3ODg0MDEyN2MxNjNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yc0zv0l6Gz1Ru0UFSu4rjwylgkfLlA_tlvnXjTx5CUg
