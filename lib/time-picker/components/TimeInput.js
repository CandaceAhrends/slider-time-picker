import React from "react";
import Modal from "./Modal";
import HoursMinutesForm from "./HoursMinutesForm";
import { isTimeFormat, formatUserInputTime } from "../utils";
import "./timePicker.scss";

const FMT_ERROR = "Invaid Time Format: Please use hh:mm";

const TimeInput = ({ time, onChange }) => {
  const [displayTime, setDisplayTime] = React.useState(time);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState();

  const onEditTime = (e) => {
    e.preventDefault();
    setOpen(e.target.name === "close" ? false : true);
  };
  const onNewTime = (time) => {
    setError();
    setDisplayTime(time);
    onChange(time);
  };

  const handleTimeEntered = (e) => {
    setError();
    const v = e.target.value;
    if (v.length) setOpen(false);
    setDisplayTime(v);
    if (isTimeFormat(v)) {
      onChange(v);
    }
  };

  const handleEnterPressed = (e) => {
    if (e.key === "Enter") {
      setOpen(false);
      if (!isTimeFormat(displayTime)) {
        setError(FMT_ERROR);
      } else {
        const formattedTime = formatUserInputTime(displayTime);
        setDisplayTime(formattedTime);
        onChange(formattedTime);
      }
    }
  };
  return (
    <>
      <span className="time-input" onClick={onEditTime}>
        <input
          className={error ? "has-error" : ""}
          type="text"
          maxLength="5"
          value={displayTime}
          onChange={handleTimeEntered}
          onKeyPress={handleEnterPressed}
          area-label="Time"
        ></input>

        <span className="time-input-modal" onClick={onEditTime}>
          <Modal open={open}>
            <HoursMinutesForm
              onNewTime={onNewTime}
              time={displayTime}
              onClose={onEditTime}
            ></HoursMinutesForm>
          </Modal>
        </span>
      </span>
      <span className="error">{error}</span>
    </>
  );
};

export default TimeInput;
