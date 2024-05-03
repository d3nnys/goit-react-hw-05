import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <p>Not found!</p>
      <p>
        <Link to="/">Go Back!</Link>
      </p>
    </>
  );
}
