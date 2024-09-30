import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import { getTrendingMovies } from "../../services/tmdbApi";
import { useHttp } from "../../hooks/useHttp";
import s from "./HomePage.module.css";
const HomePage = () => {
  const [isLoading, isError, movies] = useHttp(getTrendingMovies);

  return (
    <>
      <h2 className={s.title}>Treands Movies</h2>
      {isLoading && <Loader />}
      {movies?.length > 0 && <MovieList movies={movies} />}
      {isError && <ErrorMessage message={isError} />}
    </>
  );
};

export default HomePage;
