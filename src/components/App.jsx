import React, { useState } from "react";

function App() {
  const [dog, cat] = useState(0);

  function kutta() {
    cat(dog + 1);
  }
  function bandar() {
    cat(dog - 1);
  }

  return (
    <div className="container">
      <h1>{dog}</h1>
      <button onClick={kutta}>+</button>
      <button onClick={bandar}>-</button>
    </div>
  );
}

export default App;
