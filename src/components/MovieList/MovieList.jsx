import { NavLink, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log(movies);
  return (
    <>
      <ul className={s.list}>
        {movies?.map((movie) => (
          <li key={movie.id} className={s.item}>
            <NavLink to={`/movies/${movie.id}`} state={location}>
              {movie.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
