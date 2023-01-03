import {
  isTimeFormat,
  zeroPadTime,
  formatUserInputTime,
  formatTimeFromHourMinute,
} from "../lib/time-picker/utils";

describe("Utils Tests", () => {
  test("should detect invalid time formats", () => {
    let isOk = isTimeFormat("not a time format");
    expect(isOk).toBeFalsy();

    isOk = isTimeFormat("66:77");
    expect(isOk).toBeFalsy();
  });

  test("should detect valid formats", () => {
    let isOk = isTimeFormat("3:30");
    expect(isOk).toBeFalsy();

    isOk = isTimeFormat("6:08");
    expect(isOk).toBeFalsy();
  });

  test("should zeroPadTime a time", () => {
    let time = zeroPadTime("9:0");
    expect(time).toEqual("09:00");
  });

  test("should format time", () => {
    const time = formatUserInputTime("3:30");
    expect(time).toEqual("03:30");
  });
});
