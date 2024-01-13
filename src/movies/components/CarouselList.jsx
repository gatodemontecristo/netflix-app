import { jsonFormat } from "../helpers";
import "../styles/netflixCarousel.scss";
import { CarouselSection } from "./CarouselSection";

export const CarouselList = ({ title, type,category,onListMethod }) => {
  // const [firstPart, setfirstPart] = useState(0);
  // const [lastPart, setlastPart] = useState(4);

  const { list, isLoading } = onListMethod(type);
  const imagesCollectionFinal = jsonFormat(list, type,category);

  //const moviesList = getMovieMedia("Animation");

  return (
    <>
      {isLoading ? (
        <div></div>
      ) : (
        <div >
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
        </div>
      )}
    </>
  );
};
