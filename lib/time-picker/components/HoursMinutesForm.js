import React from "react";
import Slider from "./Slider";
import componentContext from "./context";
import { zeroPadTime, getHoursFromTime, getMinutesFromTime } from "../utils";
import "./timeEditForm.scss";

const HoursMinutesForm = ({ onNewTime, onClose, time }) => {
  const [hours, setHours] = React.useState(getHoursFromTime(time));
  const [minutes, setMinutes] = React.useState(getMinutesFromTime(time));
  const { editTime } = React.useContext(componentContext);

  React.useEffect(() => {
    if (editTime.hours > 0) {
      setMinutes(editTime.minutes);
      setHours(editTime.hours);
    }
  }, [editTime]);

  const handleSetMin = (m) => {
    const paddedMinutes = zeroPadTime(m);
    if (m >= 0) onNewTime(`${hours}:${paddedMinutes}`);
  };
  const handleSetHour = (h) => {
    const paddedHours = zeroPadTime(h);
    if (h >= 0) onNewTime(`${paddedHours}:${minutes}`);
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

export default HoursMinutesForm;
