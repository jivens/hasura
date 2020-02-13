import React, { useState } from 'react';

const Dropdown = ({
  options,
  selectedOption,
  setSelectedOption
}) => {
  if (typeof selectedOption === 'undefined' || options.filter(item=> item.value == selectedOption).length == 0) {
    // Since the function setSelectedOption was passed in,
    // calling it here will reset the state above.
    //
    // This is necessary because the options may be built
    // (for example, as a result of a query) and the state
    // needs to be declared before the options are populated.
    //
    // This will cause the container holding the state above
    // to be reset to the first option in the list.
    // 
    // If the dropdown has been previously selected, then
    // the selected option will be defined and no redraw is 
    // necessary
    // 
    // Sometimes this is nested deep and the option value is still 
    // present but the available selections no longer contain it.
    // In that case we reset the selected option to the first element
    // in the array
    selectedOption = options[0].value
    setSelectedOption(selectedOption)
  }

  return (
      <select
        value={selectedOption}
        onChange={e => setSelectedOption(e.target.value)}>
        {options.map(o => (
          <option value={o.value}>{o.label}</option>
        ))}
      </select>
  );
};

export default Dropdown