
export const CarouselItem = ({source,description}) => {
  return (
    <div className="item">
        <img
          src={source}
          alt={description}
        ></img>
      </div>
  )
}
