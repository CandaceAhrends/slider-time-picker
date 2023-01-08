import React from "react";
import SliderModal from "./SliderModal";
import HoursMinutesForm from "./HoursMinutesForm";
import { isTimeFormat, formatUserInputTime } from "../utils";
import componentContext from "./context";
import "./timePicker.scss";

const isDisabled = (disabled, disableTypedInput) =>
  disabled || disableTypedInput;

const TimeInput = ({ time, onChange, disabled, disableTypedInput }) => {
  const [displayTime, setDisplayTime] = React.useState(time);
  const [error, setError] = React.useState();
  const { setComponentContext } = React.useContext(componentContext);
  const [inputDisabled, setInputDisabled] = React.useState(
    isDisabled(disabled, disableTypedInput)
  );

  React.useEffect(() => {
    setComponentContext({
      typedInputTime: time,
    });
  }, []);

  const onEditTime = (e) => {
    e.preventDefault();
    if (e.target.name === "close") {
      //close popup
      setComponentContext({
        sliderMode: false,
      });
    } else {
      //open popup
      setComponentContext({
        sliderMode: disabled ? false : true,
      });
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
    if (v.length)
      setComponentContext({
        sliderMode: false,
        time: v,
      });
    setDisplayTime(v);
    if (isTimeFormat(v)) {
      onChange(v);
    }
  };
  const formatTimeOnEdit = () => {
    if (!isTimeFormat(displayTime)) {
      setError(true);
    } else {
      const formattedTime = formatUserInputTime(displayTime);
      setDisplayTime(formattedTime);
      setComponentContext({
        typedInputTime: formattedTime,
      });
      onChange(formattedTime);
    }
  };
  const handleInputExited = (e) => {
    formatTimeOnEdit();
  };
  const handleEnterPressed = (e) => {
    if (e.key === "Enter") {
      setComponentContext({
        sliderMode: false,
      });
      formatTimeOnEdit();
    }
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
          pattern="[1-9]"
          data-cy="time-enter"
          disabled={inputDisabled}
        ></input>

        <span className="time-input-modal" onClick={onEditTime}>
          <SliderModal open={open}>
            <HoursMinutesForm
              onNewTime={onNewTime}
              time={displayTime}
              onClose={onEditTime}
            ></HoursMinutesForm>
          </SliderModal>
        </span>
      </span>
    </>
  );
};

export default TimeInput;
