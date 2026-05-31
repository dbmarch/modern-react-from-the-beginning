import { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";
import Button from "./Button";

const Rating = ({
  heading = "Rate Your Experience!",
  feedbackMessages = ["Very Bad", "Bad", "Okay", "Good", "Excellent"],
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  const handleSubmit = () => {
    if (rating > 0 && !submitted) {
      setSubmitted(true);
    }
  };

  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
  };
  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star) => (
          <Star
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            color="gold"
            hoverEnter={() => setHover(star)}
            hoverLeave={() => setHover(0)}
            ratingClick={() => setRating(star)}
            className={`star ${star <= (hover || rating) ? "active" : ""}`}
          />
        ))}
      </div>
      {rating > 0 && (
        <div className="feedback">
          <p>{feedbackMessages[rating - 1]}</p>
        </div>
      )}
      <Button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit
      </Button>
      <Modal isOpen={submitted} onClose={closeModal} rating={rating} />
    </div>
  );
};

export default Rating;
