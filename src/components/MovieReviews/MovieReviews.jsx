export default function MovieReviews({ poster_path, original_title }) {
  return (
    <div>
      <img src={poster_path} />
      <p>{original_title}</p>
    </div>
  );
}
