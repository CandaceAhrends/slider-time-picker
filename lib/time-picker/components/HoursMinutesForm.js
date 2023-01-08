import React from "react";
import Slider from "./Slider";
import componentContext from "./context";
import { zeroPadTime, getHoursFromTime, getMinutesFromTime } from "../utils";
import "./timeEditForm.scss";

const HoursMinutesForm = ({ onNewTime, onClose, time }) => {
  const [hours, setHours] = React.useState(getHoursFromTime(time));
  const [minutes, setMinutes] = React.useState(getMinutesFromTime(time));
  const { typedInputTime, setComponentContext } =
    React.useContext(componentContext);

  // React.useEffect(() => {
  //   setComponentContext({
  //     hours: getHoursFromTime(typedInputTime),
  //     minutes: getMinutesFromTime(typedInputTime),
  //   });
  // }, [typedInputTime]);

  const handleSetMin = (m) => {
    const paddedMinutes = zeroPadTime(m);
    setMinutes(paddedMinutes);
    if (m >= 0) onNewTime(`${hours}:${paddedMinutes}`);
  };
  const handleSetHour = (h) => {
    const paddedHours = zeroPadTime(h);
    setHours(paddedHours);
    if (h >= 0) onNewTime(`${paddedHours}:${minutes}`);
  };
  return (
    <div className="edit-form">
      <Slider
        startStep={1}
        endStep={12}
        onChange={handleSetHour}
        value={Number.parseInt(hours)}
        updateValue={getHoursFromTime(typedInputTime)}
        label="Hours"
      ></Slider>

      <Slider
        startStep={0}
        endStep={59}
        onChange={handleSetMin}
        value={Number.parseInt(minutes)}
        updateValue={getMinutesFromTime(typedInputTime)}
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
