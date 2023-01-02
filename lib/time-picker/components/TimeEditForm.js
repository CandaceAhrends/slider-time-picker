import React from "react";
import Slider from "./Slider";
import { zeroPadTime } from "../utils";
import "./timeEditForm.scss";

const TimeEditForm = ({
  onSetHoursMinutes,
  onClose,
  inputHours,
  inputMinutes,
}) => {
  const [hours, setHours] = React.useState(inputHours);
  const [minutes, setMinutes] = React.useState(inputMinutes);

  const handleSetMin = (m) => {
    const paddedMinutes = zeroPadTime(m);
    setMinutes(paddedMinutes);
    onSetHoursMinutes({
      minutes: paddedMinutes,
      hours,
    });
  };
  const handleSetHour = (h) => {
    const paddedHours = zeroPadTime(h);
    setHours(paddedHours);
    onSetHoursMinutes({
      minutes,
      hours: paddedHours,
    });
  };
  return (
    <div className="edit-form">
      <Slider
        startStep={1}
        endStep={12}
        onChangeValue={handleSetHour}
        initialValue={Number.parseInt(hours)}
        label="Hours"
      ></Slider>

      <Slider
        startStep={0}
        endStep={59}
        onChangeValue={handleSetMin}
        initialValue={Number.parseInt(minutes)}
        label="Minutes"
      ></Slider>

      <div className="accept-time">
        <button onClick={onClose} name="close">
          Close
        </button>
      </div>
    </div>
  );
};

export default TimeEditForm;
