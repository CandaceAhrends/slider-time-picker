import React from "react";
import styled from "styled-components";
import useEventListener from "../hooks/UseEventListener";
import PropTypes from "prop-types";
import "./slider.scss";

const TRACK_COLOR = "#21928c";

const TRACK_WIDTH = 200;

const SliderTrack = styled.div.attrs((props) => ({
  dist: props.thumbDistance,
}))`
  width: ${TRACK_WIDTH}px;
  &:after {
    content: "";
    height: 1px;
    background: ${TRACK_COLOR};
    border: solid 2px ${TRACK_COLOR};
    border-radius: 4px;
    width: ${(props) => props.dist}px;
    position: absolute;
    top: -2px;
    left: 0;
  }
  &:before {
    content: "";
    width: 25px;
    height: 25px;
    background: ${TRACK_COLOR};
    border-radius: 50%;
    position: absolute;
    left: ${(props) => props.dist}px;
    top: -12px;
  }
`;

const Slider = ({ startStep, endStep, onChangeValue, initialValue, label }) => {
  const trackRef = React.useRef(null);
  const [startMovePoint, setStartMovePoint] = React.useState(false);
  const [thumbDistance, setThumbDistance] = React.useState(TRACK_WIDTH);
  const [trackPosition, setTrackPosition] = React.useState({
    right: 0,
    left: 0,
  });
  const [pointsPerStep, setPointsPerStep] = React.useState(0);

  React.useEffect(() => {
    onChangeValue(initialValue);
    let steps = endStep - startStep + 1;
    const perStep = TRACK_WIDTH / steps;
    setPointsPerStep(perStep);
    if (initialValue < endStep) {
      const initialThumbDistance = perStep * (initialValue - 1);
      setThumbDistance(initialThumbDistance);
    }
  }, []);

  const handleMouseDown = (event) => {
    const rect = trackRef.current.getBoundingClientRect();
    setTrackPosition({
      right: rect.right,
      left: rect.left,
    });
    setStartMovePoint(true);
    event.preventDefault();
  };

  const handleMouseMove = (event) => {
    const clientPosition =
      event.pageX || (event.touches && event.touches[0].clientX);
    const position = clientPosition - trackPosition.left;
    const allowSlide = event.touches || startMovePoint;
    if (allowSlide && position >= 0 && position <= TRACK_WIDTH) {
      setThumbDistance(position);
      let val =
        position > TRACK_WIDTH - pointsPerStep / 2
          ? endStep
          : Math.floor(position / pointsPerStep);
      val = val < startStep ? startStep : val > endStep ? endStep : val;
      onChangeValue(val);
    }
  };
  const handleMouseUp = (event) => {
    setStartMovePoint(false);
  };
  useEventListener("mouseup", handleMouseUp);
  useEventListener("touchstart", handleMouseUp);
  return (
    <>
      <label>{label}</label>
      <div
        className="slider "
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseDown}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        ref={trackRef}
      >
        <SliderTrack
          className="slider-track"
          thumbDistance={thumbDistance}
        ></SliderTrack>
      </div>
    </>
  );
};

export default Slider;
