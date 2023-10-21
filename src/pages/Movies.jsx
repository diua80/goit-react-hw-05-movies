import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMoviesByQuery } from "../api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchByMovieForm from "components/SearchByMovieForm/SearchByMovieForm";
import MoviesList from "components/MoviesList/MoviesList";
import Loader from "components/Loader";


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) return;
    try {
      const FetchMoviesByQuery = async () => {
        setIsLoader(true);
        const FetchedMoviesByQuery = await getMoviesByQuery(searchQuery);
        setMovies(FetchedMoviesByQuery.results);
        if (FetchedMoviesByQuery.results.length === 0) {
          setIsLoader(false);
          return toast.error(`Movie ${searchQuery} hasn't been found`);
        }
      };
      FetchMoviesByQuery()
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoader(false); 
      }
  }, [searchQuery]);

  return (  
    
    <div>
      {movies.length === 0 && (
        <p
          style={{
            color: 'black',
            fontWeight: '900',
            fontSize: '50px',
            marginTop: '10%',
            textAlign: 'center',
          }}
        >
          Enter the movie title please..
        </p>
      )}
      <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
      }}>
      <SearchByMovieForm
        setSearchParams={setSearchParams}
        searchQuery={searchQuery}
      /> 
      </div>
      {movies && <MoviesList moviesList={movies} />}
      {isLoader && <Loader />}
      <ToastContainer theme="colored" />      
  </div>
  )
  };
export default Movies;