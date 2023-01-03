export const zeroPadTime = (value) => {
  if (Number.parseInt(value) < 10) {
    return "0" + value;
  } else {
    return value;
  }
};

export const isTimeFormat = (value) => {
  const [hours, minutes] = value.split(":");
  const h = Number.parseInt(hours);
  const m = Number.parseInt(minutes);
  return h > 0 && h <= 12 && m >= 0 && m <= 59;
};

export const formatUserInputTime = (value) => {
  if (!isTimeFormat(value)) {
    throw new Error("Invalid format");
  }
  const [hours, minutes] = value.split(":");
  return `${zeroPadTime(hours)}:${zeroPadTime(minutes)}`;
};

export const formatTimeFromHourMinute = (hours, minutes) => {
  return `${hours}:${minutes}`;
};

export const isValidAmOrPm = (ampm) => {
  return ampm === "AM" || ampm === "PM";
};

export const formatPropsTime = (time) => {
  if (typeof time === "string") {
    const [hours, minutes] = time.slice(0, 5).split(":");
    return `${formatTimeFromHourMinute(
      zeroPadTime(hours.trim()),
      zeroPadTime(minutes.trim())
    )}`;
  }
  return time;
};

export const formatPropsAmPm = (time) => {
  const aMPM = time.slice(-2);
  if (typeof aMPM === "string" && isValidAmOrPm(aMPM.toUpperCase())) {
    return aMPM.toUpperCase();
  }
  return "AM";
};

export const getHoursFromTime = (time) => {
  if (typeof time === "string") {
    const hours = time.slice(0, 2);
    return hours;
  } else {
    throw new Error("time should be a string");
  }
};
export const getMinutesFromTime = (time) => {
  if (typeof time === "string") {
    const min = time.slice(3, 5);
    return min;
  } else {
    throw new Error("time should be a string");
  }
};
