React Slider Time Picker
### Installation

```sh
npm install slider-time-picker
import "slider-time-picker/dist/sliderTimePicker.css";
```




![My Image](picker.png)
![My Image](mobile.png)

```JSX
import TimePicker from "slider-time-picker";
import "slider-time-picker/dist/sliderTimePicker.css";

...

 <TimePicker value="4:30" amOrPm="AM" onChange={onTimeChange}></TimePicker>
 ```
** Use the following css to style the TimePicker **

![My Image](theme.png)


```JSX
.time .time-input::after {
  content: "🕒";
  line-height: 1;
}
.time .time-input input {
  background: white;
  border: solid white;
}
.time {
  background: white;
  box-shadow: none;
}
.toggle label {
  background: white;
}
.toggle label span.on {
  color: black;
}
.toggle label span.off {
  color: rgb(187, 95, 95);
}
.time-picker .modal-content {
  background: white;
}
.edit-form .accept-time button {
  background: rgb(187, 95, 95);
  border: solid rgb(187, 95, 95);
  color: white;
}
.time-picker .slider-track {
  background: rgb(187, 95, 95);
  border: solid 2px #333;
}

.time-picker .slider > div:before {
  background: rgb(187, 95, 95);
}

.time-picker .slider > div:after {
  background: rgb(187, 95, 95);
  border: solid rgb(187, 95, 95);
}
.time-picker label {
  color: black;
}
.time-picker .time .time-input input {
  color: black;
}

```
