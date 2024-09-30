import React from "react";
import SliderModal from "./SliderModal";
import TimeSlider from "./TimeSlider";
import TimeInput from "./TimeInput";
import TimeFormatter from "../timeFormatter";
import "./timePicker.scss";

const isDisabled = (disabled, allowTextEdit) => disabled || !allowTextEdit;

const TimeWrapper = ({
  time,
  disabled,
  allowTextEdit,
  pickerRef,
  onTimeChange,
}) => {
  const [open, setOpen] = React.useState(false);
  const [inputDisabled] = React.useState(isDisabled(disabled, allowTextEdit));
  const [displayTime, setDisplayTime] = React.useState(time);

  const onEditTime = (e) => {
    e.preventDefault();
    // const dataName = e.currentTarget.getAttribute("data-name");
    if (e.target.name === "close") {
      console.log(open);
      setOpen(false);
    } else {
      setOpen(disabled ? false : true);
    }
  };

  const updateTime = (time) => {
    setDisplayTime(time);
    onTimeChange(time);
  };

  const onHoursChange = (hours) => {
    updateTime(TimeFormatter.createTime(displayTime).updateHours(hours));
  };

  const onMinutesChange = (minutes) => {
    updateTime(TimeFormatter.createTime(displayTime).updateMinutes(minutes));
  };

  return (
    <div className="time-wrapper">
      <span className="time-input" onClick={onEditTime}>
        <TimeInput
          disabled={inputDisabled}
          time={displayTime}
          onChange={onTimeChange}
          setOpen={setOpen}
        ></TimeInput>

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
    </div>
  );
};

export default TimeWrapper;
