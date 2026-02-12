//12.02.2026


import React, { useState, useEffect } from "react";

function Mounting() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");

    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup function (runs on unmount)
    return () => {
      clearInterval(interval);
      console.log("Component Unmounted");
    };

  }, []); // Empty array = run only once (on mount)

  return (
    <div>
      <h2>Timer: {seconds} seconds</h2>
    </div>
  );
}

export default Mounting;






x
















