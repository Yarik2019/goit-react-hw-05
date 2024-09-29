import { useParams } from "react-router-dom";
import { getMovieDetailis } from "../../services/tmdbApi";
import { useHttp } from "../../hooks/useHttp";

import MovieCard from "../../components/MovieCard/MovieCard";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [isLoading, isError, movie] = useHttp(getMovieDetailis, moviesId);

  return (
    <>
      {isLoading && <Loader />}
      {movie && <MovieCard movie={movie} />}
      {isError && <ErrorMessage message={isError} />}
    </>
  );
};

export default MovieDetailsPage;
