import React from "react";
import ToggleAmPm from "./ToggleAmPm";
import TimeInput from "./TimeInput";
import TimeFormatter from "../timeFormatter";
import { isValidAmOrPm, formatPropsAmPm } from "../utils";
import PropTypes from "prop-types";
import "./timePicker.scss";

const TimePicker = React.forwardRef(
  (
    { time = "", onChange, disabled = false, disableTypedInput = false },
    ref
  ) => {
    const [displayTime, setDisplayTime] = React.useState(
      TimeFormatter.createTime(time).getTime()
    );
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

    // const onUnHover = (e) => {
    //   const xOutOfRange =
    //     e.clientX < pickerRect.left || e.clientX > pickerRect.right;
    //   const yOutOfRange =
    //     e.clientY < pickerRect.top || e.clientY > pickerRect.bottom;

    //   if (xOutOfRange || yOutOfRange) {
    //     pickerRef.current.style.border = "solid 0.1px #4f4b4b";
    //   }
    // };
    return (
      <div ref={ref} className="time-picker">
        <div className={disabled ? "time disabled" : "time"}>
          <TimeInput
            disabled={disabled}
            disableTypedInput={disableTypedInput}
            time={displayTime}
            onChange={onTimeChange}
          ></TimeInput>
          <ToggleAmPm
            ampm={ampm}
            onChange={onAmPmChange}
            disabled={disabled}
            data-time={true}
          ></ToggleAmPm>
        </div>
      </div>
    );
  }
);

export default TimePicker;

TimePicker.propTypes = {
  time: (props, propName, componentName) => {
    const time = props[propName];
    const amPm = time.slice(-2);
    const propsTime = TimeFormatter.createTime(time);
    if (propsTime.getHoursAsNumber() === 0) {
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
