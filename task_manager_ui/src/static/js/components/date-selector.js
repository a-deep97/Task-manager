import React, { useState } from 'react';
import '../../css/date-selector.css';

function DateSelector(props) {
  

    const handleDateChange = (date) => {
        props.setSelectedDate(date);
    };

    return (
        <div className="date-selector-container">
        <input
            type="date"
            id="datePicker"
            name="datePicker"
            value={props.selectedDate}
            className="custom-date-input"
            onChange={(e) => handleDateChange(e.target.value)}
        />
        </div>
    );
}

export default DateSelector;
