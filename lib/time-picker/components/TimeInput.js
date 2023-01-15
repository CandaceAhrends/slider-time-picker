import React from "react";
import SliderModal from "./SliderModal";
import TimeSlider from "./TimeSlider";
import TimeFormatter from "../timeFormatter";
import "./timePicker.scss";

const isDisabled = (disabled, disableTypedInput) =>
  disabled || disableTypedInput;

const TimeInput = ({
  time,
  onChange,
  disabled,
  disableTypedInput,
  pickerRef,
}) => {
  const [displayTime, setDisplayTime] = React.useState(time);
  const [error, setError] = React.useState(false);
  const [inputDisabled, setInputDisabled] = React.useState(
    isDisabled(disabled, disableTypedInput)
  );
  const [open, setOpen] = React.useState(false);

  const onEditTime = (e) => {
    e.preventDefault();
    if (e.target.name === "close") {
      setOpen(false);
    } else {
      setOpen(disabled ? false : true);
    }
  };

  const handleTimeEntered = (e) => {
    setError(false);
    const v = e.target.value;
    if (v.length) setOpen(false);
    if (v.length <= 5) {
      setDisplayTime(v);
      onChange(v);
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
  const handleInputExited = (e) => {
    formatTimeOnEdit();
  };
  const handleEnterPressed = (e) => {
    if (e.key === "Enter") {
      setOpen(false);
      formatTimeOnEdit();
    }
  };

  const onHoursChange = (hours) => {
    const updatedHours =
      TimeFormatter.createTime(displayTime).updateHours(hours);
    setDisplayTime(updatedHours);
    onChange(updatedHours);
  };
  const onMinutesChange = (minutes) => {
    const updatedMinutes =
      TimeFormatter.createTime(displayTime).updateMinutes(minutes);
    setDisplayTime(updatedMinutes);
    onChange(updatedMinutes);
  };

  return (
    <>
      <span className="time-input" onClick={onEditTime}>
        <input
          className={error ? "has-error" : ""}
          type="text"
          value={displayTime}
          onChange={handleTimeEntered}
          onBlur={handleInputExited}
          onKeyPress={handleEnterPressed}
          area-label="Time"
          data-cy="time-enter"
          disabled={inputDisabled}
        ></input>

        <span className="time-input-modal" onClick={onEditTime}>
          <SliderModal open={open} pickerRef={pickerRef}>
            <TimeSlider
              hours={TimeFormatter.createTime(displayTime).getHoursAsNumber()}
              minutes={TimeFormatter.createTime(
                displayTime
              ).getMinutesAsNumber()}
              onHoursChange={onHoursChange}
              onMinutesChange={onMinutesChange}
              onClose={onEditTime}
            ></TimeSlider>
          </SliderModal>
        </span>
      </span>
    </>
  );
};

export default TimeInput;
