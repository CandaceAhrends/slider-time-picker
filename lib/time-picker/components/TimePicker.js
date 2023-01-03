import React from "react";
import Modal from "./Modal";
import TimeEditForm from "./TimeEditForm";
import ToggleAmPm from "./ToggleAmPm";
import {
  isTimeFormat,
  formatTime,
  formatTimeFromHourMinute,
  isValidAmOrPm,
} from "../utils";
import PropTypes from "prop-types";
import "./timePicker.scss";

const FMT_ERROR = "Invaid Time Format: Please use hh:mm";

const TimePicker = ({ time, onChange }) => {
  const [open, setOpen] = React.useState(false);
  const [displayTime, setDisplayTime] = React.useState(
    time.slice(0, -2).trim()
  );
  const [ampm, setAmpm] = React.useState("AM");
  const [error, setError] = React.useState();

  React.useEffect(() => {
    const aMPM = time.slice(-2);
    if (typeof aMPM === "string" && isValidAmOrPm(aMPM.toUpperCase())) {
      setAmpm(aMPM.toUpperCase());
    }
  }, []);

  const onAmPmChange = (ampm) => {
    setAmpm(ampm);
    onChange(`${displayTime} ${ampm}`);
  };

  const timeClickHandler = (e) => {
    setError();
    e.preventDefault();
    setOpen(e.target.name === "close" ? false : true);
  };
  const timeSetHandler = (t) => {
    setError;
    const formattedTime = formatTimeFromHourMinute(t.hours, t.minutes);
    setDisplayTime(formattedTime);
    onChange(`${formattedTime} ${ampm}`);
  };
  const setInputTime = (e) => {
    setError();
    const v = e.target.value;
    if (v.length) setOpen(false);
    setDisplayTime(v);
    onChange(`${v} ${ampm}`);
  };

  const handleEnterPressed = (e) => {
    if (e.key === "Enter") {
      setOpen(false);
      if (!isTimeFormat(displayTime)) {
        setError(FMT_ERROR);
      } else {
        const formattedTime = formatTime(displayTime);
        setTime(formattedTime);
        onChange(`${formattedTime} ${ampm}`);
      }
    }
  };
  return (
    <div className="time-picker">
      <div className="time">
        <span className="time-input" onClick={timeClickHandler}>
          <input
            className={error ? "has-error" : ""}
            type="text"
            maxLength="5"
            value={displayTime}
            onChange={setInputTime}
            onKeyPress={handleEnterPressed}
          ></input>

          <span className="time-input-modal" onClick={timeClickHandler}>
            <Modal open={open}>
              <TimeEditForm
                onSetHoursMinutes={timeSetHandler}
                inputHours={displayTime.slice(0, 2)}
                inputMinutes={displayTime.slice(-2)}
                onClose={timeClickHandler}
              ></TimeEditForm>
            </Modal>
          </span>
        </span>
        <ToggleAmPm ampm={ampm} onChange={onAmPmChange}></ToggleAmPm>
      </div>
      <span className="error">{error}</span>
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
        `Invalid Time Format supplied to ${componentName}.  Please use hh:mm`
      );
    } else if (typeof amPm === "string" && !isValidAmOrPm(amPm.toUpperCase())) {
      return new Error(
        `Invalid Time Format supplied to ${componentName}.  Please use hh:mm`
      );
    }
  },
  ampm: PropTypes.string,
  onChange: PropTypes.func,
};
