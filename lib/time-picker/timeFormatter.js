import { zeroPadTime } from "./utils";

const splitHours = (time) => {
  const [hours, minutes] = time.split(":");
  const h = Number.parseInt(hours);
  const m = Number.parseInt(minutes);
  return { hours: h, minutes: m };
};

const TimeFormatter = {
  hours: 0,
  minutes: 0,
  isValidTime: (time) => {
    if (typeof time === "string") {
      const { hours, minutes } = splitHours(time);
      return hours > 0 && hours <= 12 && minutes >= 0 && minutes <= 59;
    }
    return false;
  },
  getTime() {
    return `${zeroPadTime(this.hours)}:${zeroPadTime(this.minutes)}`;
  },
  updateMinutes(minutes) {
    this.minutes = minutes;
    return this.getTime();
  },
  updateHours(hours) {
    this.hours = hours;
    return this.getTime();
  },

  getHoursAsNumber() {
    return this.hours;
  },
  getMinutesAsNumber() {
    return this.minutes;
  },
  createTime(time) {
    if (this.isValidTime(time)) {
      const { hours, minutes } = splitHours(time);
      this.hours = hours;
      this.minutes = minutes;
    }
    return this;
  },
};

export default TimeFormatter;
