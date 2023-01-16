import React from "react";
import styled from "styled-components";
import useEventListener from "../hooks/UseEventListener";
import { whatPercentOfNumber, findPercentage } from "../utils";
import "./slider.scss";

const TRACK_COLOR = "#3884cf";
const TRACK_WIDTH = 210;
const THUMB_WIDTH = 25;

const SliderTrack = React.memo(styled.div.attrs((props) => {
  return {
    dist: props.thumbDistance,
  };
})`
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
    width: ${THUMB_WIDTH}px;
    height: ${THUMB_WIDTH}px;
    background: ${TRACK_COLOR};
    border-radius: 50%;
    position: absolute;
    left: ${(props) => props.dist}px;
    top: -12px;
  }
`);

const Slider = ({ startStep, endStep, onChange, value, label }) => {
  const trackRef = React.useRef(null);
  const [thumbDistance, setThumbDistance] = React.useState(0);
  const [trackPosition, setTrackPosition] = React.useState({
    right: 0,
    left: 0,
    lastValue: 0,
  });
  const [clientStart, setClientStart] = React.useState(0);
  const [stepDistance, setStepDistance] = React.useState(
    endStep - startStep + 1
  );

  React.useEffect(() => {
    if (clientStart === 0) updateSliderValue();
  }, [value]);

  const updateSliderValue = () => {
    value = value > endStep ? endStep : value;
    value = value < startStep ? startStep : value;
    const initialPercentage = whatPercentOfNumber(value, stepDistance);
    const distance = Math.floor(findPercentage(initialPercentage, TRACK_WIDTH));
    setThumbDistance(distance - THUMB_WIDTH);
  };

  const startSlideEvent = (event) => {
    const rect = trackRef.current.getBoundingClientRect();

    setTrackPosition({
      right: rect.right,
      left: rect.left,
      lastValue: 0,
    });
  };

  const handleMouseUp = (event) => {
    event.stopPropagation();
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
      setThumbDistance(Math.floor(sliderPosition - THUMB_WIDTH));
      trackPosition.lastValue = sliderPosition;
    }

    const trackPercentMoved = whatPercentOfNumber(sliderPosition, TRACK_WIDTH);
    const stepValue =
      findPercentage(trackPercentMoved, stepDistance) + startStep;

    if (stepValue >= startStep && stepValue <= endStep) {
      onChange(stepValue);
    }
  };

  const onMouseMove = (event) => {
    const position = event.pageX;
    if (isInRange(position, 0)) {
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
      position <= trackPosition.left + TRACK_WIDTH &&
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
          clientStart={clientStart}
        ></SliderTrack>
        <div className="slider-move-area" ref={trackRef}></div>
      </div>
    </>
  );
};

export default Slider;
