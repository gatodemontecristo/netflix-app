import { useNavigate, useParams } from "react-router-dom";
import { useFetchMovieDetail } from "../hooks/useFetchMovieDetail";
import "../styles/detailStyles.css";
import { useMemo } from "react";

export const MovieInfoCard = () => {
  const { movieId } = useParams();
  const { movie, isLoading } = useFetchMovieDetail(movieId);
  const navigate = useNavigate();
  console.log(movie);
  return (
    <>
      <div>
        <img src={movie.poster_path} alt="" />
      </div>
      <div className="movieInfoTitle">
        <h1>{movie.title} ({movie.vote_average})</h1>
        <button>IMDb {movie.vote_average}</button>
        <button>Watch Later</button>
        <button>Invite Friends</button>
      </div>
      <div className="movieInfoSubTitle">
        <h1>{movie.title}</h1>
        <button>IMDb {movie.vote_average}</button>
      </div>
      <div className="movieInfoText">
        <p>{movie.overview}</p>
      </div>
      <div className="movieInfoCharacteristics">
        <p>overview</p>
      </div>
    </>
  );
};
