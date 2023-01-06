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
const isDisabled = (disabled, disableTimeManualEntry) =>
  disabled || disableTimeManualEntry;

const TimeInput = ({ time, onChange, disabled, disableTimeManualEntry }) => {
  const [displayTime, setDisplayTime] = React.useState(time);
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState();
  const { setComponentContext } = React.useContext(componentContext);
  const [inputDisabled, setInputDisabled] = React.useState(
    isDisabled(disabled, disableTimeManualEntry)
  );
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
      if (!disabled) setOpen(true);
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
  const formatTimeOnEdit = () => {
    if (!isTimeFormat(displayTime)) {
      setError(FMT_ERROR);
    } else {
      const formattedTime = formatUserInputTime(displayTime);
      setDisplayTime(formattedTime);
      onChange(formattedTime);
    }
  };
  const handleInputExited = (e) => {
    formatTimeOnEdit();
  };
  const handleEnterPressed = (e) => {
    if (e.key === "Enter") {
      setOpen(false);
      formatTimeOnEdit();
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
          onBlur={handleInputExited}
          onKeyPress={handleEnterPressed}
          area-label="Time"
          pattern="[1-9]"
          data-cy="time-enter"
          disabled={inputDisabled}
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
    </>
  );
};

export default TimeInput;
