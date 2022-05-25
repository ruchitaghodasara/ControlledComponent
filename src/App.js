import "./styles.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  function handleSubmit() {
    document.getElementById("valueLbl").innerHTML = name;
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
        <label id="valueLbl"></label>
      </form>
    </div>
  );
}
