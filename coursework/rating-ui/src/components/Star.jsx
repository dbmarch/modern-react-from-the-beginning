const Star = ({
  star,
  rating,
  hover,
  color,
  ratingClick,
  hoverEnter,
  hoverLeave,
}) => {
  const starChar = "\u2605";

  return (
    <span
      className="star"
      style={{ color: star <= (hover || rating) ? color : "#ccc" }}
      onClick={() => ratingClick()}
      onMouseEnter={() => hoverEnter()}
      onMouseLeave={() => hoverLeave()}
    >
      {starChar}
    </span>
  );
};

export default Star;
