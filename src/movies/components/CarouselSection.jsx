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
          key={properties.id}
          source={properties.backdrop_path}
          description={properties.original_title}
          ></CarouselItem>
        ))
      }



      <a href={`#${after}`} className="arrow__btn">
        ›
      </a>
    </section>
  );
};
