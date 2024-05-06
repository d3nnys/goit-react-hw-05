import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../../movies-api';
import Loader from '../../components/Loader/Loader';
import MovieList from '../../components/MovieList/MovieList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  //   const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('queryMovie') && '';

  const changeQueryFilter = newQuery => {
    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getSearchMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <form>
        <input type="text" value={query} onChange={changeQueryFilter} />
        <button>Search</button>
      </form>
      {isLoading && <Loader />}
      <MovieList movies={movies} />
      {error && <ErrorMessage />}
    </div>
  );
}
