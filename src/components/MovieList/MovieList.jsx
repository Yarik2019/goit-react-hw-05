import { NavLink, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";
import clsx from "clsx";
const MovieList = ({ movies }) => {
  const location = useLocation();

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <>
      <ul className={s.list}>
        {movies?.map((movie) => (
          <li key={movie.id} className={s.item}>
            <NavLink
              to={`/movies/${movie.id}`}
              state={location}
              className={buildLinkClass}
            >
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
