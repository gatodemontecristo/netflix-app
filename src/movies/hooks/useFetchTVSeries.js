import { useEffect, useState } from "react";
import { getTVSeries } from "../helpers";


export const useFetchTVSeries = (type) => {
    const [list, setseries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getSeriesList = async () => {
        const newSeries = await getTVSeries(type);
        setseries(newSeries);
        setIsLoading(false);
      };

      useEffect(() => {
        getSeriesList();
      }, []);

      return {
        list,
        isLoading
      }

}
