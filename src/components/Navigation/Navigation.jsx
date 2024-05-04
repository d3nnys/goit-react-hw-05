import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Movies">Movies</NavLink>
      </nav>
    </div>
  );
}
