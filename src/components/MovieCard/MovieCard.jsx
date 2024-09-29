import { useRef, Suspense } from "react";
import { useLocation, Link, Outlet, useParams } from "react-router-dom";
import { getImageUrl } from "../../services/tmdbApi";
import s from "./MovieCard.module.css";
import Loader from "../Loader/Loader";

const MovieCard = ({ movie }) => {
  const location = useLocation();
  const backLink = useRef(location.state || "/movies");
  const { movieId } = useParams();

  console.log(movie);
  if (!movie) return null;
  return (
    <div className={s.wrapp}>
      <Link to={backLink.current}>Go back</Link>
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
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieCard;
