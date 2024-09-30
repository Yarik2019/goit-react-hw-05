import { useParams } from "react-router-dom";
import { getMoviesCredits } from "../../services/tmdbApi";
import { useHttp } from "../../hooks/useHttp";
import s from "./MovieCast.module.css";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
const defaultImg =
  "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

const MovieCast = () => {
  const { movieId } = useParams();
  const [isLoading, isError, cast] = useHttp(getMoviesCredits, movieId);

  if (!cast) return null;

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {cast && (
        <ul className={s.list}>
          {cast.map((actor) => (
            <li key={actor.cast_id} className={s.item}>
              <p className={s.text}>{actor.name}</p>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.name}
                className={s.img}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieCast;
