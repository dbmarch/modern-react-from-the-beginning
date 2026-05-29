import Rating from "./components/Ratings";

const App = () => {
  const name = "Dave";
  return (
    <>
      <h2>Welcome {name}</h2>
      <Rating />
      <Rating />
      <Rating />
    </>
  );
};

export default App;
