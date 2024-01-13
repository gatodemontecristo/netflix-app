import { useEffect, useState } from "react";
import { getTVSerieDetail } from "../helpers";


export const useFetchTVSerieDetail = (movie_id) => {
    const [movie, setserie] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getDetails = async () => {
        const newSerie = await getTVSerieDetail(movie_id);
        setserie(newSerie);
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
