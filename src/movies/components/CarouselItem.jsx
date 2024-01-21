import { Link } from "react-router-dom";

export const CarouselItem = ({ identifier, source, description, category }) => {
  return (
    <div className="item">
      {category == "movie" ? (
        <Link to={`/movie-info/${identifier}`}>
          <img className="itemImg" src={source} alt={description}></img>
          <div className="title">{description}</div>
        </Link>
      ) : (
        <Link to={`/tvserie-info/${identifier}`}>
          <img className="itemImg" src={source} alt={description}></img>
          <div className="title">{description}</div>
        </Link>
      )}
    </div>
  );
};
