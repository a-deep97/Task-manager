import React, { useState } from "react";
import '../../css/drop-down.css';

function DropDown(props) {

    const [selectedOption, setSelectedOption] = useState(null);
        
    const handleOnChange = (event) => {
        const newSelectedOption = event.target.value;
        setSelectedOption(newSelectedOption);
        props.onSelect(newSelectedOption);
    };

    const createOptions = () => {
        if (!props.options) {
        return null;
        }
        return props.options.map((option) => (
        <option key={option} value={option}>
            {option}
        </option>
        ));
    };

    const optionsList = createOptions();

    return (
        <select className="custom-select" value={props.selectedOption} onChange={handleOnChange}>
        <option value="">filter</option>
        {optionsList}
        </select>
    );
}

export default DropDown;
