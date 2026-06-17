import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>React Counter Application</h1>
      <h2>{count}</h2>

      <div className="btns">
        <button onClick={() => setCount(count + 1)}>Increment (+)</button>
        <button onClick={() => setCount(count - 1)}>Decrement (-)</button>
      </div>

      <button className="reset" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;