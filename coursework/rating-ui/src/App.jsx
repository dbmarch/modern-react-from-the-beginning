import Rating from "./components/Ratings";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(3);
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};
const App = () => {
  return (
    <>
      <Rating
        heading="How would you rate your experience?"
        color="blue"
        feedback={["Very Bad", "Bad", "Okay", "Good", "Excellent"]}
      />
      <Counter />
    </>
  );
};

export default App;
