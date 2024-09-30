import { useRef, Suspense } from "react";
import { useLocation, Outlet, useParams, NavLink } from "react-router-dom";
import { clsx } from "clsx";
import { getImageUrl } from "../../services/tmdbApi";
import s from "./MovieCard.module.css";
import Loader from "../Loader/Loader";

const MovieCard = ({ movie }) => {
  const location = useLocation();
  const backLink = useRef(location.state || "/movies");

  const { movieId } = useParams();

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  if (!movie) return null;

  return (
    <div className={s.wrapp}>
      <h2 className={s.title}>{movie.title}</h2>
      <img
        src={getImageUrl(movie.poster_path)}
        alt={movie.title}
        width="250"
        className={s.img}
      />
      <p className={s.text}>
        <span className={s.span}>Description: </span>
        {movie.overview}
      </p>
      <p className={s.text}>
        <span className={s.span}>Rating:</span> {movie.vote_average}
      </p>
      <p className={s.text}>
        <span className={s.span}>Year: </span>
        {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
      </p>
      <nav className={s.nav}>
        {console.log(movieId)}
        <NavLink to={`/movies/${movieId}/cast`} className={buildLinkClass}>
          Cast
        </NavLink>
        <NavLink to={`/movies/${movieId}/reviews`} className={buildLinkClass}>
          Reviews
        </NavLink>
        <NavLink to={backLink.current} className={buildLinkClass}>
          Go back
        </NavLink>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieCard;
