import MovieReviews from '../MovieReviews/MovieReviews';

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(movie => {
        <li key={movie.id}>
          <p>Назва фільму</p>
          <MovieReviews
            poster_path={movie.poster_path}
            original_title={movie.original_title}
          />
        </li>;
      })}
    </ul>
  );
}
