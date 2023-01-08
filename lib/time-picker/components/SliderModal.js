import React from "react";
import componentContext from "./context";
import "./modal.scss";

const SliderModal = ({ children }) => {
  const { sliderMode } = React.useContext(componentContext);
  return (
    <div className={sliderMode ? "show-modal" : "modal"}>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default SliderModal;
