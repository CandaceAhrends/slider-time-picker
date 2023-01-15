import React from "react";
import "./sliderModal.scss";

const SliderModal = ({ children, open }) => {
  const modalRef = React.useRef(null);
  //const root = document.querySelector(":root");

  // React.useEffect(() => {
  //   if (open) {
  //     root.style.setProperty("--modal-hidden-height", "320px");
  //   } else {
  //     root.style.setProperty("--modal-hidden-height", "10px");
  //   }
  // }, [open]);
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
