import { Suspense, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const MovieDetailsPage = ({ movie, movieId }) => {
    const location = useLocation();
    const backToMoviesRef = useRef(location.state?.from ?? "/");

    const {
    original_title,
    poster_path,
    vote_average,
    overview,
    genres,
    release_date,
    // backdrop_path,
  } = movie;

    return (
        <>
            <Link to={backToMoviesRef.current}>GO TO THE MOVIES</Link>
            <section>
            <img
                src = {`https://image.tmdb.org/t/p/w342${poster_path}`}
                alt={original_title}
                // width="300"
            />
            <div>
                <p>
                    {original_title} ({release_date?.split('-')[0]})
                </p>
                <p>
                    User Score:{' '}
                    {vote_average === 0
                        ? 'NR'
                        : `${Math.floor((vote_average * 100) / 10)}%`}
                </p>
                <p>Overview{overview}</p>    
                <p>
                    Genres: {genres?.map(genre => genre.name).join(', ')}
                </p>      
            </div>
            </section>

            <p>Additional information</p>
            <ul>
                <li>
                    <Link to="cast">
                     Cast
                    </Link>
                </li>
                <li>
                    <Link to="reviews">
                        Reviews
                    </Link>
                </li>
            </ul>
            <section>
                <Suspense fallback={<Loader/>}>
                    <Outlet/>
                </Suspense>
            </section>
        </>
    )
}
export default MovieDetailsPage;