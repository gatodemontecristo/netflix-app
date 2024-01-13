import { useEffect, useState } from "react";
import { getMovies } from "../helpers";


export const useFetchMovies = (type) => {
    const [list, setmovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getMoviesList = async () => {
        const newMovies = await getMovies(type);
        setmovies(newMovies);
        setIsLoading(false);
      };

      useEffect(() => {
        getMoviesList();
      }, []);

      return {
        list,
        isLoading
      }

}
