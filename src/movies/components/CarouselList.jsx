import { getMovies, jsonFormat } from "../helpers";
import "../styles/netflixCarousel.scss";
import { CarouselSection } from "./CarouselSection";


export const CarouselList = () => {
  // const [firstPart, setfirstPart] = useState(0);
  // const [lastPart, setlastPart] = useState(4);
  const imagesCollectionFinal = jsonFormat();
  const moviesList = getMovies("Animation");


  return (
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
  );
};
