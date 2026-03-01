'use client';

import { useState } from 'react';

export default function BuggyButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  if (clicked) {
    throw new Error('Something went wrong!');
  }

  return (
    <button
      onClick={handleClick}
      className='rounded bg-red-500 px-4 py-2 text-white'
    >
      Click me to see the error
    </button>
  );
}
