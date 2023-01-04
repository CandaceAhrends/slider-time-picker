import React from "react";
import ToggleAmPm from "./ToggleAmPm";
import TimeInput from "./TimeInput";
import {
  isTimeFormat,
  isValidAmOrPm,
  formatPropsTime,
  formatPropsAmPm,
} from "../utils";
import PropTypes from "prop-types";
import "./timePicker.scss";

const TimePicker = ({ time = "", onChange }) => {
  const [displayTime, setDisplayTime] = React.useState(formatPropsTime(time));
  const [ampm, setAmpm] = React.useState(formatPropsAmPm(time));

  const onAmPmChange = (ampm) => {
    setAmpm(ampm);
    if (time && ampm) {
      onChange(`${displayTime} ${ampm}`);
    }
  };
  const onTimeChange = (time) => {
    setDisplayTime(time);
    if (time && ampm) {
      onChange(`${time} ${ampm}`);
    }
  };

  return (
    <div className="time-picker">
      <div className="time">
        <TimeInput time={displayTime} onChange={onTimeChange}></TimeInput>
        <ToggleAmPm ampm={ampm} onChange={onAmPmChange}></ToggleAmPm>
      </div>
    </div>
  );
};

export default TimePicker;

TimePicker.propTypes = {
  time: (props, propName, componentName) => {
    const time = props[propName];
    const amPm = time.slice(-2);
    if (!isTimeFormat(time.slice(0, -2))) {
      return new Error(
        `Invalid Time Format supplied to ${componentName}.  Please use hh:mm AM|PM`
      );
    } else if (typeof amPm === "string" && !isValidAmOrPm(amPm.toUpperCase())) {
      return new Error(
        `Invalid AM | PM Format supplied to ${componentName}.  Please use hh:mm AM|PM  3:30 AM`
      );
    }
  },
  ampm: PropTypes.string,
  onChange: PropTypes.func,
};
