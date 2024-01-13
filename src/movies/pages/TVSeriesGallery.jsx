import { BannerMovie } from "../components/BannerMovie";
import { CarouselList } from "../components/CarouselList";
import { useFetchTVSerieDetail } from "../hooks/useFetchTVSerieDetail";
import { useFetchTVSeries } from "../hooks/useFetchTVSeries";

export const TVSeriesGallery = () => {

  const onDetailMethod = (movie_id) => {
    return   useFetchTVSerieDetail(movie_id);
  };

  const onListMethod = (type) => {
    return   useFetchTVSeries(type);
  };
  return (
    <>
      <BannerMovie id_movie="1396" page="serie" onDetailMethod={onDetailMethod}></BannerMovie>
      <div
        className="container"
        style={{
          marginTop: "40px",
        }}
      >
        <CarouselList type="popular" title="Popular" category="serie" onListMethod={onListMethod}></CarouselList>
        <CarouselList type="on_the_air" title="On The Air" category="serie" onListMethod={onListMethod}></CarouselList>
        <CarouselList type="top_rated" title="Top Rated" category="serie" onListMethod={onListMethod}></CarouselList>
        <CarouselList type="airing_today" title="Airing Today" category="serie" onListMethod={onListMethod}></CarouselList>
      </div>
    </>
  );
};
