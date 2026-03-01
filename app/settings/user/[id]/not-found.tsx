import React from 'react';

export default function NotFound() {
  return (
    <div>
      <div className='relative'>
        <h1 className='text-3xl text-white'>User Not Found</h1>
        <p className='text-white'>
          The user you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
