import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moviesById from '../../moviesId-api';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import MovieList from '../../components/MovieList/MovieList';

export default function MovieDetailsPage() {
  const { moviesId } = useParams();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMoviesById() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await moviesById({ moviesId });
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMoviesById();
  }, [moviesId]);

  return (
    <div>
      {movies.length > 0 && <MovieList />}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
