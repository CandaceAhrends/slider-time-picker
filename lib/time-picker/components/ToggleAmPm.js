import React from "react";

import "./toggleAmPm.scss";

const ToggleAmPmSwitch = ({ ampm, onChange }) => {
  const [checked, setChecked] = React.useState(ampm === "AM");

  const onToggle = (v) => {
    const wasChecked = checked;
    setChecked(!wasChecked);
    const amORpm = wasChecked ? "PM" : "AM";
    onChange(amORpm);
  };

  return (
    <>
      <span className="toggle">
        <input
          type="checkbox"
          id="switch"
          value={checked}
          onChange={(e) => onToggle(e.target.checked)}
        />
        <label htmlFor="switch">
          <span className={checked ? "on" : "off"}>AM</span>
          <span className={checked ? "off" : "on"}>PM</span>
        </label>
      </span>
    </>
  );
};

export default ToggleAmPmSwitch;
