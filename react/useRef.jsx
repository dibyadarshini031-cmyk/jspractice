//10.02.2026



import React, { useRef } from "react";

function useRef() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useRef Example</h1>

      <input
        type="text"
        placeholder="Click button to focus"
        ref={inputRef}
      />

      <br /><br />

      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
}

export default useRef;




//useRef(null) - creates a reference
//ref={inputRef} - connects input reference
// inputRef.current.focus() - Focuses input box 
// useRef - does not cause re-render