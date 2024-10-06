import React from "react";
import "./app.scss";
//import TimePicker from "../lib/time-picker/components/TimePicker";
import TimePicker from "slider-time-picker";
import "slider-time-picker/dist/sliderTimePicker.css";

const colors = {
  "primary-color": "black",
  "primary-font-color": "pink",
  "background-color": "#1e2528",
  "slider-track-color": "red",
};
function App() {
  const [testOutput, setTestOutput] = React.useState("initial");
  const onChange = (time) => {
    console.log(time);
    setTestOutput(time);
  };
  return (
    <div className="App">
      <div
        style={{
          margin: "10rem",
          display: "flex",
          alignItems: "center",
          padding: "5rem",
        }}
      >
        <TimePicker
          onChange={onChange}
          disabled={false}
          colors={colors}
        ></TimePicker>
        <div style={{ margin: "0 5rem", fontSize: "1.5rem" }}>
          <p> {testOutput}</p>
        </div>
      </div>
    </div>
  );
}
export default App;
