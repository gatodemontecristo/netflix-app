import { BannerMovie } from "../components/BannerMovie";
import { CarouselList } from "../components/CarouselList";
import { useFetchMovieDetail } from "../hooks/useFetchMovieDetail";
import { useFetchMovies } from "../hooks/useFetchMovies";

export const MoviesGallery = () => {
  const onDetailMethod = (movie_id) => {
    return   useFetchMovieDetail(movie_id);
  };

  const onListMethod = (type) => {
    return   useFetchMovies(type);
  };
 
  return (
    <>
      <BannerMovie id_movie="872585" page="movie" onDetailMethod={onDetailMethod}></BannerMovie>
      <div
        className="container"
        style={{
          marginTop: "40px",
        }}
      >
        <CarouselList type="popular" title="Popular" category="movie" onListMethod={onListMethod}></CarouselList>
        <CarouselList type="now_playing" title="Now Playing" category="movie" onListMethod={onListMethod}></CarouselList>
        <CarouselList type="top_rated" title="Top Rated" category="movie" onListMethod={onListMethod}></CarouselList>
        <CarouselList type="upcoming" title="Upcoming" category="movie" onListMethod={onListMethod}></CarouselList>
      </div>
    </>
  );
};
