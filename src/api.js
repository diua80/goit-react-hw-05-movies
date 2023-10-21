import axios from "axios";

export const getMovies = async () => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=f9944208ed63ee0d0f0d08bbf7324d06`
           );
        return response.data.results;
    } catch (error) {
        throw error;
    }
};

export const getMovieDetailsById = async (movieId) => {
    try {
       const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=f9944208ed63ee0d0f0d08bbf7324d06`
        );
        return data;
    } catch (error) {
        throw error;
    }
};

export const getMovieCastId = async id => {
    try {
       const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=f9944208ed63ee0d0f0d08bbf7324d06`
        );
        return data;
    } catch (error) {
        throw error;
    }
};

export const getMovieReviewById = async id => {
    try {
       const {data} = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=f9944208ed63ee0d0f0d08bbf7324d06`
        );
        return data;
    } catch (error) {
        throw error;
    }
};
export const getMoviesByQuery = async searchQuery => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=f9944208ed63ee0d0f0d08bbf7324d06`
  );
  return data;
};