import { useState } from "react";
import { searchMovies } from "../../services/tmdbApi";
import { useHttp } from "../../hooks/useHttp";
import SearchForm from "../../components/SearchForm/SearchForm";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";
import s from "./MoviesPage.module.css";
const MoviesPage = () => {
  const [query, setQuery] = useState("");

  const [isLoading, isError, movies] = useHttp(searchMovies, query);

  const handleQuery = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <>
      <SearchForm handleQuery={handleQuery} />
      <h2 className={s.title}>Results</h2>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
