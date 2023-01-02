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

export const formatTime = (value) => {
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
