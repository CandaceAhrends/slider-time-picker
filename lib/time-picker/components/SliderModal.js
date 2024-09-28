import React from "react";
import "./sliderModal.scss";

const SliderModal = ({ children, open }) => {
  const modalRef = React.useRef(null);

  return (
    <span className={open ? "outline" : ""}>
      <div className={open ? "show-modal" : "modal"}>
        <div ref={modalRef} className="modal-content">
          {children}
        </div>
      </div>
    </span>
  );
};

export default SliderModal;
