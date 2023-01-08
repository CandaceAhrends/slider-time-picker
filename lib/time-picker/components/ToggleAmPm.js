import React from "react";

import "./toggleAmPm.scss";

const ToggleAmPmSwitch = ({ ampm, onChange, disabled }) => {
  const [checked, setChecked] = React.useState(ampm === "AM");
  const checkBoxId = `cb-${Math.floor(Math.random() * 10000)}`;
  const onToggle = (v) => {
    const wasChecked = checked;
    setChecked(!wasChecked);
    const amORpm = wasChecked ? "PM" : "AM";
    onChange(amORpm);
  };

  return (
    <>
      {disabled ? (
        <span className="ampm-disabled">
          <label>{ampm} </label>
        </span>
      ) : (
        <span className="toggle">
          <input
            type="checkbox"
            id={checkBoxId}
            value={checked}
            disabled={disabled}
            onChange={(e) => onToggle(e.target.checked)}
          />
          <label htmlFor={checkBoxId}>
            <span className={checked ? "on" : "off"}>AM</span>
            <span className={checked ? "off" : "on"}>PM</span>
          </label>
        </span>
      )}
    </>
  );
};

export default ToggleAmPmSwitch;
