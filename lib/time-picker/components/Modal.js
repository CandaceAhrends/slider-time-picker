import React from "react";
import PropTypes from "prop-types";
import "./modal.scss";

const Modal = ({ children, open }) => {
  return (
    <div className={open ? "show-modal" : "modal"}>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
