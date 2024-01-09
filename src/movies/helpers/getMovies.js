import { getHeaders } from "../../getHeaders";

export const getMovies = async (genre) => {
    const {REACT_APP_API_HOST,REACT_APP_API_KEY} = getHeaders();
    const url = `https://netflix99.p.rapidapi.com/v1/list/titles?country=US&language=en&genre=${genre}&order=Popularity&title_type=Movies`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': REACT_APP_API_KEY,
            'X-RapidAPI-Host': REACT_APP_API_HOST
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        return [];
    }
    
    
    
    

  };
  