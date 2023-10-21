import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviewById } from "api";
import css from './Reviews.module.css';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => { 
        if (!movieId) return;
        const fetchedReviews = async () => {
            const review = await getMovieReviewById(movieId);
            setReviews(review.results)
        }
        fetchedReviews();
    }, [movieId]);
    console.log(reviews);
    return (
    <div className={css.reviews}>
      {reviews.length === 0 && (
        <p className={css.reviews_content}>
          We don't have any reviews for this movie
        </p>
      )}
      <ul>
        {reviews.map(({ author, content, id }) => {
          return (
            <li className={css.reviews_item} key={id}>
              <h3 className={css.reviews_name}>Author: {author}</h3>
              <p className={css.reviews_content}>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Reviews;