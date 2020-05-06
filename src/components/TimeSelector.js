import React, { useState, useRef } from "react";
import { KeyboardTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

const TimeSelector = ({handleValues, taskEstimatedTime}) => {
  // const task_estimated_time = useRef(props.handleValues)
  const [selectedDate, handleDateChange] = useState("2018-01-01T07:00:00.000Z");
  const handleValue = (date) => {
    handleDateChange(date)
    handleValues({taskEstimatedTime:selectedDate})
    console.log(taskEstimatedTime)
    // task_estimated_time.current({taskEstimatedTime:selectedDate})
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        label="Estimated time to complete task"
        placeholder="00:00:00"
        mask="__:__ __"
        ampm={false}
        openTo="hours"
        views={["hours", "minutes", "seconds"]}
        format="HH:mm:ss"
        value={selectedDate}
        // onChange={handleDateChange}
        onChange={date => handleValue(date)} 
      />
    </MuiPickersUtilsProvider>
  );
}

export default TimeSelector;