import "../styles/netflixCarousel.scss";
import { CarouselItem } from "./CarouselItem";


export const CarouselSection = ({identifier,after,before,collection}) => {

  return (
    <section id={identifier}>
      <a href={`#${before}`} className="arrow__btn">
        ‹
      </a>
      {
        collection.map((properties, i) => (
          <CarouselItem
          key={i}
          source={properties.src}
          description={properties.alt}
          ></CarouselItem>
        ))
      }



      <a href={`#${after}`} className="arrow__btn">
        ›
      </a>
    </section>
  );
};
