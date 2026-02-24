import React from 'react';

export default function Header() {
  return (
    <header className='fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-between bg-black px-4 py-4 transition-all lg:px-10 lg:py-6'>
      <div className='flex items-center gap-x-8 space-x-2 md:space-x-8'>
        <img
          src='https://rb.gy/ulxxee'
          alt='Netflix'
          width={120}
          height={120}
        />
        <ul className='hidden space-x-4 text-sm font-semibold md:flex'>
          <li>Home</li>
          <li>Series</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
        </ul>
      </div>
      <div className='flex items-center space-x-4 md:space-x-8'>
        <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
        <img
          src='https://rb.gy/g1pwyx'
          alt='User Profile'
          className='cursor-pointer rounded'
        />
      </div>
    </header>
  );
}
