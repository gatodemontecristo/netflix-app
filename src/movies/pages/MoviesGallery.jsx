import { BannerMovie } from "../components/BannerMovie";
import { CarouselList } from "../components/CarouselList";

export const MoviesGallery = () => {
  return (
    <>
      <BannerMovie></BannerMovie>
      <div
        className="container"
        style={{
          marginTop: "40px",
        }}
      >
        <CarouselList type="popular" title="Popular"></CarouselList>
        <CarouselList type="now_playing" title="Now Playing"></CarouselList>
        <CarouselList type="top_rated" title="Top Rated"></CarouselList>
        <CarouselList type="upcoming" title="Upcoming"></CarouselList>
      </div>
    </>
  );
};
