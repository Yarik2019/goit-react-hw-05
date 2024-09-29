import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Loader from "./components/Loader/Loader";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:moviesId" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
