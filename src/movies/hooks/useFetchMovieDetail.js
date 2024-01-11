import { useEffect, useState } from "react";
import { getMovieDetail } from "../helpers/getMovieDetail";


export const useFetchMovieDetail = (movie_id) => {
    const [movie, setmovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getDetails = async () => {
        const newMovie = await getMovieDetail(movie_id);
        setmovie(newMovie);
        setIsLoading(false);
      };

      useEffect(() => {
        getDetails();
      }, []);

      return {
        movie,
        isLoading
      }

}
