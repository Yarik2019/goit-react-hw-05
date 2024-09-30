import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import { getMoviesReview } from "../../services/tmdbApi";
import s from "./MovieReviews.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
const MovieReviews = () => {
  const { movieId } = useParams();
  const [isLoading, isError, reviews] = useHttp(getMoviesReview, movieId);
  if (!reviews) return null;
  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage message={isError} />}
      {reviews && (
        <div className={s.wrapp}>
          <h3>Reviews:</h3>
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p className={s.author}>{review.author}</p>
                <p className={s.text}>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MovieReviews;
