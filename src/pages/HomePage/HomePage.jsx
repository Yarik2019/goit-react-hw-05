import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import { getTrendingMovies } from "../../services/tmdbApi";
import { useHttp } from "../../hooks/useHttp";
const HomePage = () => {
  const [isLoading, isError, movies] = useHttp(getTrendingMovies);
  console.log(isLoading);
  return (
    <>
      {isLoading && <Loader />}
      {movies?.length > 0 && <MovieList movies={movies} />}
      {isError && <ErrorMessage message={isError} />}
    </>
  );
};

export default HomePage;
