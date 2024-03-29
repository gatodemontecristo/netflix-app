import { CarouselItem } from "./CarouselItem";


export const CarouselSection = ({identifier,after,before,collection,category}) => {

  return (
    <section id={identifier}>
      <a href={`#${before}`} className="arrow arrow__btn">
        ‹
      </a>
      {
        collection.map((properties, i) => (
          <CarouselItem
          key={properties.id}
          identifier={properties.id}
          source={properties.backdrop_path}
          description={properties.original_title}
          category={category}
          ></CarouselItem>
        ))
      }



      <a href={`#${after}`} className="arrow arrow__btn">
        ›
      </a>
    </section>
  );
};
