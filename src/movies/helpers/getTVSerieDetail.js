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
            first_air_date:movie.first_air_date,
            last_air_date:movie.last_air_date,
            status: movie.status,
            tagline: movie.tagline,
            title: movie.name,
            created_by:movie.created_by,
            languages:movie.languages,
            last_episode_to_air:movie.last_episode_to_air,
            

            number_of_episodes:movie.number_of_episodes,
            number_of_seasons:movie.number_of_seasons,
            origin_country:movie.origin_country,
            popularity:movie.popularity,
            production_countries:movie.production_countries,
            spoken_languages:movie.spoken_languages,
            tagline:movie.tagline,
            type:movie.type,
            vote_average:movie.vote_average,
            vote_count:movie.vote_count,
        }
        return obj;
    } catch (error) {
        console.error(error);
        return {};
    }
    
    
    
    

  };
  