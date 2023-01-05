import React from "react";
import Modal from "./Modal";
import HoursMinutesForm from "./HoursMinutesForm";
import {
  isTimeFormat,
  formatUserInputTime,
  getHoursFromTime,
  getMinutesFromTime,
} from "../utils";
import componentContext from "./context";
import "./timePicker.scss";

const FMT_ERROR = "Invaid Time Format: Please use hh:mm";

const TimeInput = ({ time, onChange }) => {
  const [displayTime, setDisplayTime] = React.useState(time);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState();
  const { setComponentContext } = React.useContext(componentContext);
  const onEditTime = (e) => {
    e.preventDefault();
    if (e.target.name === "close") {
      setOpen(false);
    } else {
      //open popup
      setComponentContext({
        editTime: {
          hours: getHoursFromTime(displayTime),
          minutes: getMinutesFromTime(displayTime),
        },
      });
      setOpen(true);
    }
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
          pattern="[1-9]"
          data-cy="time-enter"
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
