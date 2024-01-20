import { Navigate, useParams } from "react-router-dom";
import { useFetchMovieDetail } from "../hooks/useFetchMovieDetail";
import "../styles/detailStyles.css";
import "../styles/spinnerStyles.css";
import { useMovieDetail } from "../hooks";

export const MovieInfoCard = () => {
  const { movieId } = useParams();
  const { movie, isLoading } = useFetchMovieDetail(movieId);
  if (!movie) {
    return <Navigate to="/movies"></Navigate>;
  }

  const {
    onNavigateBack,
    numberTwoDecimals,
    getYear,
    startMovie,
    hourFormat,
    objectLines,
  } = useMovieDetail();

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
                <button type="button" class="btn btn-secondary">
                  <i class="bi bi-suit-heart-fill redHeart"></i> Watch Later
                </button>
                <button type="button" class="btn btn-light moviePrimaryButton">
                  <i class="bi bi-plus"></i> Add To List
                </button>
                <button type="button" class="btn btn-light moviePrimaryButton">
                  <i class="bi bi-three-dots"></i> Traslate
                </button>
                <button
                  type="button"
                  class="btn btn-secondary movieEspecialButton"
                >
                  <i class="bi bi-chat-fill"></i> Show Comments
                </button>
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
                    <p>{objectLines(movie.genres)}</p>
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
                    <span>{objectLines(movie.production_companies)}</span>
                  </p>
                  <p>
                    Countries :{" "}
                    <span>{objectLines(movie.production_countries)}</span>
                  </p>
                  <p>
                    Release date : <span>{movie.release_date}</span>
                  </p>
                  <p>
                    Spoken languages :{" "}
                    <span>{objectLines(movie.spoken_languages)}</span>
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
          <hr className="movieLine" />

          <div className="movieBack">
            <button
              type="button"
              className="btn btn-dark mySearchLogOut"
              onClick={onNavigateBack}
            >
              <i class="bi bi-skip-backward-fill"></i>
            </button>
            <h2>Volver</h2>
          </div>
        </div>
      )}
    </>
  );
};
