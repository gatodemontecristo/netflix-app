import { Link } from "react-router-dom";

export const CarouselItem = ({ identifier,source, description }) => {
  return (
    <div className="item">
       <Link to={`/movie-info/${identifier}`}>
      <img className="itemImg" src={source} alt={description}></img>
      <div className="title">{description}</div>
      </Link>
    </div>
  );
};
