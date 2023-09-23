import React, { useState } from "react";

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
        <select value={props.selectedOption} onChange={handleOnChange}>
        <option value="">select</option>
        {optionsList}
        </select>
    );
}

export default DropDown;
