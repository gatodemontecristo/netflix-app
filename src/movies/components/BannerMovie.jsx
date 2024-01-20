import "../styles/bannerStyles.css";
import "../styles/spinnerStyles.css";

export const BannerMovie = ({ id_movie, page, onDetailMethod }) => {
  const { movie, isLoading } = onDetailMethod(id_movie);

  let srcImagen;
  if (page == "movie") {
    srcImagen = "../banner.jpg";
  } else {
    srcImagen = "../banner2.jpg";
  }
  return (
    <>
      {isLoading ? (
        <span className="loader"></span>
      ) : (
        <div
          className="bannerImage animate__animated animate__fadeIn"
          style={{ backgroundImage: `url("${srcImagen}")` }}
        >
          <img className="bannerFondo" src={srcImagen} alt="" />
          <div className="bannerDescription">
            <h1>{movie.title} </h1>
            <p>{movie.overview}</p>
            <button type="button" className="btn btn-light">
              <i className="bi bi-play-fill"></i>{" "}
              {page == "movie" ? "Play" : "First chapter"}
            </button>
            <button type="button" className="btn btn-secondary">
              <i className="bi bi-info-circle"></i> More information
            </button>
          </div>
          <div className="bannerExtra">
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
      )}
    </>
  );
};
