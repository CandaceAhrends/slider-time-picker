import React from "react";
import styled from "styled-components";
import useEventListener from "../hooks/UseEventListener";
import { whatPercentOfNumber, findPercentage } from "../utils";
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
  const [thumbDistance, setThumbDistance] = React.useState(TRACK_WIDTH);
  const [trackPosition, setTrackPosition] = React.useState({
    right: 0,
    left: 0,
    length: 0,
    lastValue: 0,
  });
  const [clientStart, setClientStart] = React.useState(0);
  const [stepDistance, setStepDistance] = React.useState(
    endStep - startStep + 1
  );

  React.useEffect(() => {
    onChangeValue(initialValue);
    const initialPercentage = whatPercentOfNumber(initialValue, stepDistance);
    const distance = findPercentage(initialPercentage, TRACK_WIDTH);

    setThumbDistance(distance);
  }, [initialValue]);

  const startSlideEvent = (event) => {
    const rect = trackRef.current.getBoundingClientRect();
    setTrackPosition({
      right: rect.right,
      left: rect.left,
      length: rect.right - rect.left,
      lastValue: 0,
    });
  };

  const handleMouseUp = (event) => {
    setClientStart(0);
  };
  useEventListener("mouseup", handleMouseUp);
  useEventListener("touchend", handleMouseUp);

  const onTouchStart = (event) => {
    event.preventDefault();
    setClientStart(event.touches[0].clientX);
    startSlideEvent(event);
  };

  const onMouseDown = (event) => {
    event.preventDefault();
    setClientStart(event.pageX);
    startSlideEvent(event);
  };

  const onSliderMove = (position) => {
    const sliderPosition = position - trackPosition.left;
    if (sliderPosition !== trackPosition.lastValue) {
      setThumbDistance(sliderPosition);
      trackPosition.lastValue = sliderPosition;
    }

    const trackPercentMoved = whatPercentOfNumber(
      sliderPosition,
      trackPosition.length
    );
    const stepValue = findPercentage(trackPercentMoved, stepDistance);
    onChangeValue(stepValue + startStep);
  };

  const onMouseMove = (event) => {
    const position = event.pageX;
    if (isInRange(position)) {
      onSliderMove(position);
    }
  };
  const ontouchMove = (event) => {
    const position = event.touches[0].clientX;
    if (isInRange(position)) {
      onSliderMove(position);
    }
  };

  const isInRange = (position) => {
    if (
      position >= trackPosition.left &&
      position <= trackPosition.right &&
      clientStart
    ) {
      return true;
    }
  };

  return (
    <>
      <label>{label}</label>
      <div
        className="slider"
        onTouchMove={ontouchMove}
        onTouchStart={onTouchStart}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
      >
        <SliderTrack
          className="slider-track"
          thumbDistance={thumbDistance}
          ref={trackRef}
        ></SliderTrack>
      </div>
    </>
  );
};

export default Slider;
