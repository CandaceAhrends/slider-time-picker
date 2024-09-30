### React Slider Time Picker

1 dependency - styled-components

### Installation

```sh
npm install slider-time-picker
import "slider-time-picker/dist/sliderTimePicker.css";
```

### DEMO

[code demo](https://stackblitz.com/edit/react-ts-ckrgva?file=App.tsx)

![desktop](slider.gif)
![Mobile](mobile.png)

### Props

| Prop          | Type      | Description                 |
| ------------- | --------- | --------------------------- |
| time          | string    | 07:00 AM                    |
| disabled      | boolean   | disables all actions        |
| allowTextEdit | boolean   | allows time edit manually   |
| ref           | React ref | allows access to the picker |

```JSX
import TimePicker from "slider-time-picker";
import "slider-time-picker/dist/sliderTimePicker.css";

...

  <TimePicker
      time={time}
      onChange={onTimeChange}
      disabled={false}
  ></TimePicker>

  <label>Disabled</label>
  <TimePicker
     time={time}
     onChange={onTimeChange}
     disabled={true}
   ></TimePicker>

   <p>Manual input disabled</p>
   <TimePicker
     time={time}
     onChange={onTimeChange}
     allowTextEdit={true}
   ></TimePicker>


```
