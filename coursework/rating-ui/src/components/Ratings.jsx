import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(false);
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const starChar = "\u2605";
  const feedbackMessages = ["Very Bad", "Bad", "Okay", "Good", "Excellent"];

  return (
    <div className="rating-container">
      <h2>Rate Your Experience!</h2>
      <div className="stars">
        {stars.map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className={`star ${star <= (hover || rating) ? "active" : ""}`}
          >
            {starChar}
          </span>
        ))}
      </div>
      {rating > 0 && (
        <div className="feedback">
          <p>{feedbackMessages[rating - 1]}</p>
        </div>
      )}
    </div>
  );
};

// const styles = {
//   container: {
//     textAlign: "center",
//     fontFamily: "Arial, sans-serif",
//     padding: "20px",
//   },
// };

export default Rating;
