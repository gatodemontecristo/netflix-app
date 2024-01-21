import { Navigate, useParams } from "react-router-dom";
import "../styles/detailStyles2.css";
import "../styles/spinnerStyles.css";
import { useFetchTVSerieDetail, useTVSerieDetail } from "../hooks";

export const TVSeriesInfoCard = () => {
  const { serieId } = useParams();
  const { movie, isLoading } = useFetchTVSerieDetail(serieId);
  if (!movie) {
    return <Navigate to="/series"></Navigate>;
  }

  const {
    onNavigateBack,
    numberTwoDecimals,
    getYear,
    startserie,
    objectLines
  } = useTVSerieDetail();

  return (
    <>
      {isLoading ? (
        <span className="loader"></span>
      ) : (
        <div className="container serieAll">
          <div className="serieInfoTitle">
            <h1>
              {movie.title} ({getYear(movie.first_air_date)})
            </h1>
            <div className="serieButtonCollection  animate__animated animate__fadeIn">
              <button type="button" className="btn btn-secondary">
                IMDb {numberTwoDecimals(movie.vote_average)}
              </button>
              <button type="button" className="btn btn-light seriePrimaryButton">
                {" "}
                <i className="bi bi-heart-fill redHeart"></i> Watch Later
              </button>
              <button type="button" className="btn btn-light seriePrimaryButton">
                {" "}
                <i className="bi bi-people-fill"></i> Invite Friends
              </button>
            </div>
          </div>
          <div>
            <hr className="serieLine" />

            <div className="serieCard">
              <div className="serieImageInfo animate__animated animate__fadeInLeft">
                <img src={movie.poster_path} alt="" />
                <button type="button" className="btn btn-secondary">
                  <i className="bi bi-suit-heart-fill redHeart"></i> Watch Later
                </button>
                <button type="button" className="btn btn-light seriePrimaryButton">
                  <i className="bi bi-plus"></i> Add To List
                </button>
                <button type="button" className="btn btn-light seriePrimaryButton">
                  <i className="bi bi-three-dots"></i> Traslate
                </button>
                <button
                  type="button"
                  className="btn btn-secondary serieEspecialButton"
                >
                  <i className="bi bi-chat-fill"></i> Show Comments
                </button>
              </div>
              <div className="serieDetailInfo">
                <div className="serieInfoSubTitle">
                  <h1>{movie.title}</h1>
                  <button
                    type="button"
                    className="btn btn-light seriePrimaryButton"
                  >
                    IMDb {numberTwoDecimals(movie.vote_average)}
                  </button>
                </div>
                <div className="serieInfoText">
                  <p>{movie.tagline}</p>
                </div>
                <hr className="serieLine" />

                <div className="serieSecondaryDetails">
                  <i className="bi bi-eye-fill"></i>
                  <p>{movie.vote_count}</p>

                  <div className="serieStars">
                    {startserie(movie.vote_average) > 1 ? (
                      <i className="bi bi-star-fill"></i>
                    ) : (
                      <i className="bi bi-star"></i>
                    )}
                    {startserie(movie.vote_average) > 1.5 ? (
                      <i className="bi bi-star-fill"></i>
                    ) : (
                      <i className="bi bi-star"></i>
                    )}
                    {startserie(movie.vote_average) > 3 ? (
                      <i className="bi bi-star-fill"></i>
                    ) : (
                      <i className="bi bi-star"></i>
                    )}
                    {startserie(movie.vote_average) > 3.6 ? (
                      <i className="bi bi-star-fill"></i>
                    ) : (
                      <i className="bi bi-star"></i>
                    )}
                    {startserie(movie.vote_average) > 4 ? (
                      <i className="bi bi-star-fill"></i>
                    ) : (
                      <i className="bi bi-star"></i>
                    )}
                  </div>

                  <div className="serieSecondaryDetailsExtra">
                    <p>{objectLines(movie.genres)}</p>
                    <p>|</p>
                    <p>{movie.number_of_episodes} episodes</p>
                    <p>|</p>
                    <p>{movie.number_of_seasons} seasons</p>
                  </div>
                </div>

                <hr className="serieLine" />
                <div className="serieAditionalDetails">
                  <h1>Details</h1>

                  <p>
                  Created by : <span>{objectLines(movie.created_by)}</span>
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
                  Type : <span>{movie.type}</span>
                  </p>
                  <p>
                    Spoken languages :{" "}
                    <span>{objectLines(movie.spoken_languages)}</span>
                  </p>
                </div>
                <hr className="serieLine" />

                <div className="serieInfoCharacteristics">
                  <h1>Storyline</h1>
                  <p>{movie.overview}</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="serieLine" />

          <div className="serieBack">
            <button
              type="button"
              className="btn btn-dark mySearchLogOut"
              onClick={onNavigateBack}
            >
              <i className="bi bi-skip-backward-fill"></i>
            </button>
            <h2>Volver</h2>
          </div>
        </div>
      )}
    </>
  );
};
