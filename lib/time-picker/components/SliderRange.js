import React from "react";
import "./sliderRange.scss";

const Slider = ({ startStep, endStep, onChangeValue, initialValue, label }) => {
  const [rangeValue, setRangeValue] = React.useState(0);
  const sliderRef = React.useRef(null);

  const onChangeRange = (e) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const newLeftPosition =
      (sliderRef.current.clientWidth / sliderRef.current.max) *
      sliderRef.current.value;
    const centerAligmentOffset = 20;

    const width = Number.parseInt(rect.left) + Number.parseInt(rangeValue);
    console.log(width, rect, rangeValue);
    sliderRef.current.style.setProperty(
      "--slider-track-width",
      `${newLeftPosition - centerAligmentOffset}px`
    );
    setRangeValue(e.target.value);
    onChangeValue(e.target.value);
  };

  return (
    <>
      <label>{label}</label>
      <div className="slider">
        <input
          ref={sliderRef}
          type="range"
          min={startStep}
          max={endStep}
          value={rangeValue}
          onChange={onChangeRange}
          step="1"
        />
      </div>
    </>
  );
};

export default Slider;
