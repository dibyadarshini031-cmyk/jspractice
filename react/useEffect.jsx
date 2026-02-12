//11.02.2026




import React, { useState, useEffect } from "react";

function useEffect() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Timer</h1>
      <h2>{time} seconds</h2>
    </div>
  );
}

export default useEffect;


//set interval runs every 2 second 
//setTime updates state
// return () => clearInterval() -> cleanup
//[] - runs only once


//useState - causes re-render
//useRef - does not cause re-render