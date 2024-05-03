import { useParams } from 'react-router-dom';
import moviesById from '../../moviesId-api';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

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
        const data = await moviesById();
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
      {movies && <div>123</div>}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
}
