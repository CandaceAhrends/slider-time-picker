export const zeroPadTime = (value) => {
  if (Number.parseInt(value) < 10) {
    return "0" + value;
  } else {
    return value;
  }
};

export const isTimeFormat = (value) => {
  if (value && value.length) {
    const [hours, minutes] = value.split(":");
    const h = Number.parseInt(hours);
    const m = Number.parseInt(minutes);
    return h > 0 && h <= 12 && m >= 0 && m <= 59;
  } else {
    return true;
  }
};

export const formatUserInputTime = (value) => {
  if (value.indexOf(":") > 0 && value.length >= 4) {
    const [hours, minutes] = value.split(":");
    const formattedTime =
      hours.length === 1
        ? `${zeroPadTime(hours)}:${minutes}`
        : `${hours}:${minutes}`;
    return formattedTime;
  }
};

export const formatTimeFromHourMinute = (hours, minutes) => {
  return `${hours}:${minutes}`;
};

export const isValidAmOrPm = (ampm) => {
  return ampm === "AM" || ampm === "PM";
};

export const formatPropsTime = (time) => {
  if (typeof time === "string" && time.length === 5) {
    const [hours, minutes] = time.slice(0, 5).split(":");
    return `${formatTimeFromHourMinute(
      zeroPadTime(hours.trim()),
      zeroPadTime(minutes.trim())
    )}`;
  }
  return time;
};

export const formatPropsAmPm = (time) => {
  if (typeof time === "string" && time.length === 5) {
    const aMPM = time.slice(-2).toUpperCase();
    return isValidAmOrPm(aMPM) || "AM";
  }
  return "AM";
};

export const getHoursFromTime = (time) => {
  if (typeof time === "string") {
    if (!time.length) {
      return 0;
    }
    const hours = time.slice(0, 2);
    return hours;
  } else {
    return 0;
  }
};
export const getMinutesFromTime = (time) => {
  if (typeof time === "string") {
    if (!time.length) {
      return 0;
    }
    const min = time.slice(3, 5);
    return min;
  } else {
    return 0;
  }
};
