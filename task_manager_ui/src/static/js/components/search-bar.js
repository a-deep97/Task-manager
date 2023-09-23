/**
 * Draft component for search bar
 */

import React, { useState } from "react";

function FilterSearchBar({ items, onFilter }) {
  const [param, setParam] = useState("");
  const [value, setValue] = useState("");

  const handleParamChange = (event) => {
    setParam(event.target.value);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleFilter = () => {
    // Filter the items based on the provided param and value
    const filteredItems = items.filter((item) => {
      return item[param] === value;
    });

    // Call the callback function with the filtered items
    onFilter(filteredItems);
  };

  return (
    <div>
      <label>
        Filter by Param:
        <input type="text" value={param} onChange={handleParamChange} />
      </label>
      <label>
        Filter by Value:
        <input type="text" value={value} onChange={handleValueChange} />
      </label>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
}

export default FilterSearchBar;
