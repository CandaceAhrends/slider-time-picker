import React from "react";
import Slider from "./Slider";
import "./timeSlider.scss";

const TimeSlider = ({
  onClose,
  hours,
  minutes,
  onHoursChange,
  onMinutesChange,
}) => {
  return (
    <div className="edit-form">
      <Slider
        startStep={1}
        endStep={12}
        onChange={onHoursChange}
        value={hours}
        label="Hours"
      ></Slider>

      <Slider
        startStep={0}
        endStep={59}
        onChange={onMinutesChange}
        value={minutes}
        label="Minutes"
      ></Slider>

      <div className="accept-time">
        <button onClick={onClose} name="close">
          Close
        </button>
      </div>
    </div>
  );
};

export default TimeSlider;
