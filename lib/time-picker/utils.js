export const zeroPadTime = (value) => {
  let timeValue = value + "";

  if (timeValue.length === 1) {
    return "0" + value;
  } else {
    return value;
  }
};

export const isValidAmOrPm = (ampm) => {
  return ampm === "AM" || ampm === "PM";
};

export const formatPropsAmPm = (time) => {
  if (typeof time === "string" && time.length >= 4) {
    const aMPM = time.slice(-2).toUpperCase();
    return isValidAmOrPm(aMPM) ? aMPM : "AM";
  }
  return "AM";
};

export const whatPercentOfNumber = (what, num) => {
  return what / num;
};

export const findPercentage = (percent, distance) => {
  return Math.floor(percent * distance);
};
