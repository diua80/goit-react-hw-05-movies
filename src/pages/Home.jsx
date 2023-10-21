import { useEffect, useState } from "react";
import { getMovies } from "api";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
    <div><h1>Trending today</h1></div>
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  
    useEffect(() => {
      async function fetchedMovies() {
        try {
          const response = await getMovies();
          setMovies(response);
        } catch (error) {
          console.error("Помилка при отриманні даних:", error);
        }
      }
  
      fetchedMovies();
      }, []);
  
      // console.log(movies);
  return <div>
    {movies.map(movie => {
      return <div key = {movie.id}>
        
       <Link to={`/movies/${movie.id}`} state = {{from: location}}>{movie.title}</Link>
      </div>
        })}
      </div>;
}
export default Home;