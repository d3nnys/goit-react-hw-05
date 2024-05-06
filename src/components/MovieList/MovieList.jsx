import css from './MovieList.module.css';

export default function MovieList({ movies, poster_path }) {
  const url = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <ul>
      {movies.map(movie => {
        <li key={movie.id}>
          <p className={css.title}>{movie.title}</p>
          <img src={url} />
        </li>;
      })}
    </ul>
  );
}
