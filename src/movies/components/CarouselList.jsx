import {  jsonFormat } from "../helpers";
import { useFetchMovies } from "../hooks/useFetchMovies";
import "../styles/netflixCarousel.scss";
import { CarouselSection } from "./CarouselSection";


export const CarouselList = ({title,type}) => {
  // const [firstPart, setfirstPart] = useState(0);
  // const [lastPart, setlastPart] = useState(4);

  const {movies,isLoading} =   useFetchMovies(type);
  const imagesCollectionFinal = jsonFormat(movies,type);
  
 //const moviesList = getMovieMedia("Animation");

  return (
    <>
    <h2 className="carruselTitle">{title}</h2>
    <div className="wrapper">
      {imagesCollectionFinal.map((properties, i) => (
        <CarouselSection
        key={i}
          identifier={properties.identifier}
          after={properties.after}
          before={properties.before}
          collection={properties.collection}
        ></CarouselSection>
      ))}
  
    </div>
    </>
  );
};
