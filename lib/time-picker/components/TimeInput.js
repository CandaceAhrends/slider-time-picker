import React, { useEffect } from "react";
import TimeFormatter from "../timeFormatter";
import "./timePicker.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faClock);

const TimeInput = ({ time, disabled, onChange, setOpen }) => {
  const [displayTime, setDisplayTime] = React.useState(time);
  const [error, setError] = React.useState(false);

  useEffect(() => {
    setDisplayTime(time);
  }, [time]);

  const onTimeEntered = (e) => {
    setError(false);
    const v = e.target.value;
    if (v.length) setOpen(false);
    if (v.length <= 5) {
      setDisplayTime(v);
      onChange(v);
    }
  };

  const onInputExited = (e) => {
    formatTimeOnEdit();
  };

  const onEnterPressed = (e) => {
    if (e.key === "Enter") {
      setOpen(false);
      formatTimeOnEdit();
    }
  };

  const formatTimeOnEdit = () => {
    setError(false);
    const formattedTime = TimeFormatter.createTime(displayTime);
    if (formattedTime) {
      setDisplayTime(formattedTime.getTime());
      onChange(formattedTime.getTime());
    } else {
      setError(true);
    }
  };

  return (
    <div className="time-input-container">
      <input
        className={error ? "has-error" : ""}
        type="text"
        value={displayTime}
        onChange={onTimeEntered}
        onBlur={onInputExited}
        onKeyUp={onEnterPressed}
        area-label="Time"
        data-cy="time-enter"
        disabled={disabled}
      ></input>
      <FontAwesomeIcon className="icon" icon="clock" />
    </div>
  );
};

export default TimeInput;
