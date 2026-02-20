import React, { useState } from "react";
import "./app.css"
function App() {
  const [number, setNumber] = useState(0);
  const [setToNum, setSetToNum] = useState("");
  

  const increaseBy3 = () => {
    /*
    
    setNumber(number+1) only update once
    setNumber(number+1)
    setNumber(number+1)

    */

    
    setNumber(prev => prev + 1);
    setNumber(prev => prev + 1);
    setNumber(prev => prev + 1);
  };

  const decreaseBy3 = () => {
    setNumber(prev => Math.max(prev - 1, 0));
    setNumber(prev => Math.max(prev - 1, 0));
    setNumber(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumber(setToNum);
    setSetToNum("")
  };

  // Inline styles
 const containerStyle = {
  fontFamily: "Arial, sans-serif",
  display: "flex",          // enable flexbox
  flexDirection: "column",  // stack children vertically
  alignItems: "center",     // center horizontally
  justifyContent: "center", // center vertically
  // height: "100vh",          // full viewport height
  // margin: "0 2",         // auto margin centers horizontally
  maxWidth: "600px",        // optional: limit width for a neat look
  padding: "40px 200px",          // optional: add spacing inside
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)", // optional: card effect
  borderRadius: "8px",      // rounded corners
  backgroundColor: "#f9f9f9" // light background
};


  const buttonStyle = {
    margin: "5px",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
  };

  const resetButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#f44336", // red for reset
  };

  const inputStyle = {
    padding: "8px",
    marginRight: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: "#333" }}>Learning state & form</h2>
      <h4 style={{ color: "#555" }}>Number is {number}</h4>

      <div>
        <p>Increase or decrease by 1</p>
        <button style={buttonStyle} onClick={() => setNumber(number + 1)}>Increase</button>
        <button style={buttonStyle} onClick={() => setNumber(Math.max(number - 1, 0))}>Decrease</button>
        <button style={resetButtonStyle} onClick={() => setNumber(0)}>Reset</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <p>Increase or decrease by 3</p>
        <button style={buttonStyle} onClick={increaseBy3}>Increase +3</button>
        <button style={buttonStyle} onClick={decreaseBy3}>Decrease -3</button>
      </div>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <p>Set number</p>
        <input
          type="number"
          value={setToNum}
          onChange={(e) => setSetToNum(Number(e.target.value))}
          style={inputStyle}
        />
        <button style={buttonStyle} type="submit">Set {setToNum}</button>
      </form>
    </div>
  );
}

export default App;
