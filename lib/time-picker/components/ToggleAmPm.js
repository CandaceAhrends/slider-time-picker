import React from "react";

import "./toggleAmPm.scss";

const ToggleAmPmSwitch = ({ ampm, onChange }) => {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    let isChecked = ampm === "AM";
    setChecked(isChecked);
  }, [ampm]);

  const onToggle = (v) => {
    setChecked(v);
    const amORpm = v ? "AM" : "PM";
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
