import { useNavigate, useParams } from "react-router-dom";
import { useFetchMovieDetail } from "../hooks/useFetchMovieDetail";
import "../styles/detailStyles.css";
import "../styles/spinnerStyles.css";
import { useMemo } from "react";

export const MovieInfoCard = () => {
  const { movieId } = useParams();
  const { movie, isLoading } = useFetchMovieDetail(movieId);
  const navigate = useNavigate();
  console.log(movie);

  const numberTwoDecimals = (number = 0) => {
    return Number(number.toFixed(1));
  };
  const getYear = (date = "2024") => {
    return date.split("-")[0];
  };

  const startMovie = (vote = 0) => {
    return vote / 2;
  };

  const hourFormat = (runtime = 0) => {
    return (runtime / 60).toFixed(0) + "h " + (runtime % 60) + "min";
  };

  const genresLines = (genres = {}) => {
    let stringGenres = "";
    genres.forEach((data, index) => {
      if (index == genres.length - 1) {
        stringGenres = stringGenres + data.name;
      } else {
        stringGenres = stringGenres + data.name + "/";
      }
    });
    return stringGenres;
  };

  const companiesLines = (companies = {}) => {
    let stringCompanies = "";
    companies.forEach((data, index) => {
      if (index == companies.length - 1) {
        stringCompanies = stringCompanies + data.name;
      } else {
        stringCompanies = stringCompanies + data.name + "/";
      }
    });
    return stringCompanies;
  };

  const countriesLines = (countries = {}) => {
    let stringCountries = "";
    countries.forEach((data, index) => {
      if (index == countries.length - 1) {
        stringCountries = stringCountries + data.name;
      } else {
        stringCountries = stringCountries + data.name + "/";
      }
    });
    return stringCountries;
  };
  const languagesLines = (languages = {}) => {
    let stringLanguages = "";
    languages.forEach((data, index) => {
      if (index == languages.length - 1) {
        stringLanguages = stringLanguages + data.name;
      } else {
        stringLanguages = stringLanguages + data.name + "/";
      }
    });
    return stringLanguages;
  };

  return (
    <>
      {isLoading ? (
        <span className="loader"></span>
      ) : (
        <div className="container movieAll">
          <div className="movieInfoTitle">
            <h1>
              {movie.title} ({getYear(movie.release_date)})
            </h1>
            <div className="movieButtonCollection  animate__animated animate__fadeIn">
              <button type="button" class="btn btn-secondary">
                IMDb {numberTwoDecimals(movie.vote_average)}
              </button>
              <button type="button" class="btn btn-light moviePrimaryButton">
                {" "}
                <i class="bi bi-heart-fill redHeart"></i> Watch Later
              </button>
              <button type="button" class="btn btn-light moviePrimaryButton">
                {" "}
                <i class="bi bi-people-fill"></i> Invite Friends
              </button>
            </div>
          </div>
          <div>
            <hr className="movieLine" />

            <div className="movieCard">
              <div className="movieImageInfo animate__animated animate__fadeInLeft">
                <img src={movie.poster_path} alt="" />
                <button type="button" class="btn btn-secondary"><i class="bi bi-suit-heart-fill redHeart"></i> Watch Later</button>
                <button type="button" class="btn btn-light moviePrimaryButton"><i class="bi bi-plus"></i> Add To List</button>
                <button type="button" class="btn btn-light moviePrimaryButton"><i class="bi bi-three-dots"></i> Traslate</button>
                <button type="button" class="btn btn-secondary movieEspecialButton"><i class="bi bi-chat-fill"></i> Show Comments</button>
              </div>
              <div className="movieDetailInfo">
                <div className="movieInfoSubTitle">
                  <h1>{movie.title}</h1>
                  <button
                    type="button"
                    class="btn btn-light moviePrimaryButton"
                  >
                    IMDb {numberTwoDecimals(movie.vote_average)}
                  </button>
                </div>
                <div className="movieInfoText">
                  <p>{movie.tagline}</p>
                </div>
                <hr className="movieLine" />

                <div className="movieSecondaryDetails">
                  <i class="bi bi-eye-fill"></i>
                  <p>{movie.vote_count}</p>

                  <div className="movieStars">
                    {startMovie(movie.vote_average) > 0.5 ? (
                      <i class="bi bi-star-fill"></i>
                    ) : (
                      <i class="bi bi-star"></i>
                    )}
                    {startMovie(movie.vote_average) > 1.5 ? (
                      <i class="bi bi-star-fill"></i>
                    ) : (
                      <i class="bi bi-star"></i>
                    )}
                    {startMovie(movie.vote_average) > 2.5 ? (
                      <i class="bi bi-star-fill"></i>
                    ) : (
                      <i class="bi bi-star"></i>
                    )}
                    {startMovie(movie.vote_average) > 3.5 ? (
                      <i class="bi bi-star-fill"></i>
                    ) : (
                      <i class="bi bi-star"></i>
                    )}
                    {startMovie(movie.vote_average) > 4.5 ? (
                      <i class="bi bi-star-fill"></i>
                    ) : (
                      <i class="bi bi-star"></i>
                    )}
                  </div>

                  <div className="movieSecondaryDetailsExtra">
                    <p>{genresLines(movie.genres)}</p>
                    <p>|</p>
                    <p>{hourFormat(movie.runtime)}</p>
                    <p>|</p>
                    <p>{movie.original_language}</p>
                  </div>
                </div>

                <hr className="movieLine" />
                <div className="movieAditionalDetails">
                  <h1>Details</h1>

                  <p>
                    Budget : <span>{movie.budget}</span>
                  </p>
                  <p>
                    Popularity : <span>{movie.popularity}</span>
                  </p>
                  <p>
                    Companies :{" "}
                    <span>{companiesLines(movie.production_companies)}</span>
                  </p>
                  <p>
                    Countries :{" "}
                    <span>{countriesLines(movie.production_countries)}</span>
                  </p>
                  <p>
                    Release date : <span>{movie.release_date}</span>
                  </p>
                  <p>
                    Spoken languages :{" "}
                    <span>{languagesLines(movie.spoken_languages)}</span>
                  </p>
                </div>
                <hr className="movieLine" />

                <div className="movieInfoCharacteristics">
                  <h1>Storyline</h1>
                  <p>{movie.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
