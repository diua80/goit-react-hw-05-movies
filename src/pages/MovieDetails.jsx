import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetailsById } from "../api";
import MovieDetailsPage from "components/MovieDetailsPage";



// const { useParams } = require("react-router-dom");

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => { 
        if (!movieId) return;        
        try {
            const fetchedMovie = async () => {
                const movie = await getMovieDetailsById(movieId);
                setMovie(movie);
            };
            fetchedMovie();
        } catch (error) {
            console.error("Помилочка:", error);
        }
    }, [movieId]);

    console.log(movie);
    return <MovieDetailsPage movie={movie} movieId={movieId}/>;
};

export default MovieDetails;