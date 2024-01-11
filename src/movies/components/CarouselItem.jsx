
export const CarouselItem = ({source,description}) => {
  return (
    <div className="item">
        <img
          className="itemImg"
          src={source}
          alt={description}
        ></img>
        <div className="title">{description}</div>
      </div>
  )
}
