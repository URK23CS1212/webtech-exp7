import React, { useState } from "react";

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!height || !weight || height <= 0 || weight <= 0) {
      alert("Please enter valid height and weight values!");
      return;
    }

    const h = height / 100;
    const bmiValue = (weight / (h * h)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setStatus("Underweight");
    else if (bmiValue >= 18.5 && bmiValue <= 24.9) setStatus("Normal weight");
    else if (bmiValue >= 25 && bmiValue <= 29.9) setStatus("Overweight");
    else setStatus("Obese");
  };

  const getColor = () => {
    if (status === "Underweight") return "blue";
    if (status === "Normal weight") return "green";
    if (status === "Overweight") return "orange";
    if (status === "Obese") return "red";
    return "black";
  };

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", marginTop: "50px" }}>
      <h1>BMI Calculator</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          placeholder="Enter height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          style={{ padding: "8px", margin: "5px" }}
        />
        <input
          type="number"
          placeholder="Enter weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={{ padding: "8px", margin: "5px" }}
        />
      </div>
      <button
        onClick={calculateBMI}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Calculate BMI
      </button>

      {bmi && (
        <div style={{ marginTop: "20px" }}>
          <h2>Your BMI: {bmi}</h2>
          <h3 style={{ color: getColor() }}>Status: {status}</h3>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
