import React, { useState } from 'react';

import Dropdown from './components/Dropdown';



const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button className='ui button'
        onClick={() => setShowDropdown(!showDropdown)}> toggle show</button>
      {showDropdown ?
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options} />
        :
        null
      }

    </div>
  );
};
