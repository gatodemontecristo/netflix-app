import { getHeaders } from "../../getHeaders";

export const getTVSerieDetail = async (movie_id) => {
    const {REACT_APP_API_KEY} = getHeaders();
    const url = `https://api.themoviedb.org/3/tv/${movie_id}?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Authorization': REACT_APP_API_KEY
        }
    };
    
    try {
        const response = await fetch(url, options);
        const movie = await response.json();
        const obj = {
            poster_path: "https://image.tmdb.org/t/p/w300/"+movie.poster_path,
            genres: movie.genres,
            homepage: movie.homepage,
            original_title: movie.original_name,
            overview: movie.overview,
            production_companies:movie.production_companies,
            last_air_date:movie.last_air_date,
            status: movie.status,
            tagline: movie.tagline,
            title: movie.name,
        }
        return obj;
    } catch (error) {
        console.error(error);
        return {};
    }
    
    
    
    

  };
  