import { useFetchMovieDetail } from "../hooks/useFetchMovieDetail";
import "../styles/bannerStyles.css";

export const BannerMovie = () => {
  const {movie,isLoading} =   useFetchMovieDetail("872585");
  return (
    <>
      <div className="bannerImage">
        <img className="bannerFondo" src="../../../banner.jpg" alt="" />
        <div className="bannerDescription">
          <h1>{movie.title} </h1>
          <p>{movie.overview}</p>
          <button type="button" className="btn btn-light">
            <i className="bi bi-play-fill"></i>  Play
          </button>
          <button type="button" className="btn btn-secondary">
            <i className="bi bi-info-circle"></i>  More information
          </button>
        </div>
        <div className="bannerExtra" >
            <span className="bannerVolumen">
                <p>
                    <i className="bi bi-volume-up-fill"></i>
                </p>
            </span>
            <span className="bannerAge">
                <p>16 +</p>
            </span>
        </div>
      </div>
    </>
  );
};
