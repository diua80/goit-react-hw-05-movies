import { useLocation, Link } from "react-router-dom";
import css from './MoviesList.module.css';

const MoviesList = ({ moviesList }) => {
    const location = useLocation();

    console.log(moviesList);
    return (
        <>
            <ul className={css.films_list}>
                {moviesList.map(({ id, original_title, poster_path }) => {
                    return (
                        <li key={id} className={css.films_item}>
                            <Link to={`/movies/${id}`} state={{ from: location }}>
                            <img
                                src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                                alt={original_title}
                                width="300"
                                loading="lazy"
                            />
                            <p className={css.films_item_title}>
                                 {original_title}
                                </p>
                                </Link> 
                        </li>
                    )
                })}
            </ul>
        </>
    )
};
export default MoviesList;