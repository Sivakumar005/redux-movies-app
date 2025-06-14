import axios from "axios";
import { setMovies } from "../slices/movieSlice";

export const getmovies = () => async dispatch => {
  const url1 = "https://api.themoviedb.org/3/movie/popular?api_key=d42b1e83b9c23d764ebdf09ff59a8895&page=1";
  const url2 = "https://api.themoviedb.org/3/movie/popular?api_key=d42b1e83b9c23d764ebdf09ff59a8895&page=2";

  try {
    const [response1, response2] = await Promise.all([
      axios.get(url1),
      axios.get(url2)
    ]);

    const combinedMovies = [
      ...response1.data.results,
      ...response2.data.results
    ];

    dispatch(setMovies(combinedMovies));
  } catch (err) {
    console.error("Failed to fetch movies:", err);
  }
};

