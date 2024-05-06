import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Navigation from './components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';

export default function App() {
  return (
    <>
      <h1>Welcome</h1>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

// key API 231a94a8d378882c44b46cf4d8657a0f
// token eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzFhOTRhOGQzNzg4ODJjNDRiNDZjZjRkODY1N2EwZiIsInN1YiI6IjY2MmQzMzk1NWE3ODg0MDEyN2MxNjNiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yc0zv0l6Gz1Ru0UFSu4rjwylgkfLlA_tlvnXjTx5CUg
