import React, { useState } from "react";
import Slider from "./Slider";
import "./timeSlider.scss";

const getLeftMin = (min) => {
  return Number.parseInt(min / 10);
};
const getRightMin = (min) => min % 10;

const TimeSlider = ({ hours, minutes, onHoursChange, onMinutesChange }) => {
  const [leftMinute, setLeftMinute] = useState(getLeftMin(minutes));
  const [rightMinute, setRightMinute] = useState(getRightMin(minutes));

  const onLeftMinChange = (lmin) => {
    setLeftMinute(lmin);
    onMinutesChange(`${lmin}${rightMinute}`);
  };
  const onRightMinChange = (rmin) => {
    setRightMinute(rmin);
    onMinutesChange(`${leftMinute}${rmin}`);
  };

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
        endStep={5}
        onChange={onLeftMinChange}
        value={leftMinute}
        label="Minutes"
      ></Slider>
      <Slider
        startStep={0}
        endStep={9}
        onChange={onRightMinChange}
        value={rightMinute}
        label=""
      ></Slider>

      <div className="accept-time">
        <button className="checkmark" name="close"></button>
      </div>
    </div>
  );
};

export default TimeSlider;
