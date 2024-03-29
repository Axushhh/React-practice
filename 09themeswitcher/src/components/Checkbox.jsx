import React, { useState } from 'react';

function MyCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked} // Here we use the checked property to control the state of the checkbox
        onChange={handleCheckboxChange} // This function will be called whenever the checkbox is toggled
      />
      <label>Check me!</label>
    </div>
  );
}

export default MyCheckbox;
