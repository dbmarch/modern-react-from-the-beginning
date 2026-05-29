const Rating = () => {
  //   return <div style={styles.container}>Rate Your Experience!</div>;
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const clicked = () => {
    console.log("clicked");
  };

  return (
    <div className="rating-container">
      <h2>Rate Your Experience!</h2>
      <div className="stars">
        {stars.map((star) => (
          <span key={star} onClick={clicked}>
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
