import React from "react";
import "./modal.scss";

const SliderModal = ({ children, open }) => {
  return (
    <div className={open ? "show-modal" : "modal"}>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default SliderModal;
