import "./styles.css";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [summit, setSummit] = useState("");
  const arnika = (e) => {
    setName(e.target.value);
  };
  const yessummit = () => {
    setSummit(`Hello {name}`);
  };
  return (
    <div className="container">
      <h1>{summit ? `Hello ${name}` : "Hello"}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        value={name}
        onChange={arnika}
      />
      <button onClick={yessummit}>Submit</button>
    </div>
  );
}

export default App;
