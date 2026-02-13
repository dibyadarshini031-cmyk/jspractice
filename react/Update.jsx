//13.02.2026



import React, { useState, useEffect } from "react";

function Update() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  // 🔵 Mounting Phase
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  // 🟡 Updating Phase (when count changes)
  useEffect(() => {
    if (count !== 0) {
      console.log("Count Updated");
      setMessage(`Count is now ${count}`);
    }
  }, [count]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Count: {count}</h2>
      <h3>Step: {step}</h3>
      <p>{message}</p>

      <button onClick={() => setCount(count + step)}>
        Increase
      </button>

      <button onClick={() => setCount(count - step)}>
        Decrease
      </button>

      <button onClick={() => setStep(step + 1)}>
        Increase Step
      </button>
    </div>
  );
}

export default Update;