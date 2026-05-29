const Rating = () => {
  //   return <div style={styles.container}>Rate Your Experience!</div>;
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const clicked = (index) => {
    console.log("clicked", index);
  };
  const hovered = (state, index) => {
    console.log("hovered", state, index);
  };

  return (
    <div className="rating-container">
      <h2>Rate Your Experience!</h2>
      <div className="stars">
        {stars.map((star) => (
          <span
            key={star}
            onClick={() => clicked(star)}
            onMouseEnter={() => hovered("enter", star)}
            onMouseLeave={() => hovered("leave", star)}
          >
            {"\u2605"}
          </span>
        ))}
      </div>
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
