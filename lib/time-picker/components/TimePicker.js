import React, { useEffect } from "react";
import ToggleAmPm from "./ToggleAmPm";

import TimeWrapper from "./TimeWrapper";
import TimeFormatter from "../timeFormatter";
import { isValidAmOrPm, formatPropsAmPm } from "../utils";
import PropTypes from "prop-types";
import "./timePicker.scss";

const TimePicker = React.forwardRef(
  (
    {
      time = "",
      onChange,
      disabled = false,
      allowTextEdit = true,
      colors = {},
    },
    ref
  ) => {
    const [displayTime, setDisplayTime] = React.useState(
      TimeFormatter.createTime(time).getTime()
    );
    const [ampm, setAmpm] = React.useState(formatPropsAmPm(time));

    useEffect(() => {
      onChange(`${displayTime} ${ampm}`);
    }, []);

    useEffect(() => {
      Object.entries(colors).map(([k, v]) => {
        document.documentElement.style.setProperty(`--${k}`, v);
      });
    }, [colors]);

    const onAmPmChange = (ampm) => {
      setAmpm(ampm);
      onChange(`${displayTime} ${ampm}`);
    };
    const onTimeChange = (time) => {
      setDisplayTime(time);
      if (time && ampm) {
        onChange(`${time} ${ampm}`);
      }
    };

    return (
      <div ref={ref} className="time-picker">
        <div className={disabled ? "time disabled" : "time"}>
          <TimeWrapper
            disabled={disabled}
            allowTextEdit={allowTextEdit}
            time={displayTime}
            onTimeChange={onTimeChange}
          ></TimeWrapper>

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
    const time = props[propName] || "07:00 AM";
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
  onChange: (props, propName, componentName) => {
    if (typeof props[propName] !== "function") {
      return new Error(`${propName} must be passed in as a function`);
    }
  },
};
