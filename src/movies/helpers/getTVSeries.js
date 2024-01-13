import { getHeaders } from "../../getHeaders";

export const getTVSeries = async (type) => {
    const {REACT_APP_API_KEY} = getHeaders();
    const url = `https://api.themoviedb.org/3/tv/${type}?language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Authorization': REACT_APP_API_KEY
        }
    };
    
    try {
        const response = await fetch(url, options);
        const {results} = await response.json();

        const galery = results.map((movie) => ({
            original_title: movie.original_name,
            backdrop_path: "https://image.tmdb.org/t/p/w300/"+movie.backdrop_path,
            id: movie.id
          }));
        return galery;
    } catch (error) {
        console.error(error);
        return [];
    }
    
    
    
    

  };
  