import { getHeaders } from "../../getHeaders";

export const getMovieDetail = async (movie_id) => {
    const {REACT_APP_API_KEY} = getHeaders();
    const url = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`;
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
            original_title: movie.original_title,
            overview: movie.overview,
            production_companies:movie.production_companies,
            release_date:movie.release_date,
            status: movie.status,
            tagline: movie.tagline,
            title: movie.title,
            vote_average: movie.vote_average,
            vote_count: movie.vote_count,
            runtime: movie.runtime,
            original_language:movie.original_language,
            budget:movie.budget,
            popularity:movie.popularity,
            production_countries:movie.production_countries,
            spoken_languages:movie.spoken_languages

        }
        return obj;
    } catch (error) {
        console.error(error);
        return {};
    }
    
    
    
    

  };
  