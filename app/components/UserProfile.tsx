import Image from 'next/image';

export const UserProfile = () => (
  <div className='flex items-center space-x-4 md:space-x-8'>
    <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
    <Image
      src='/profile.png'
      alt='User Profile'
      width={30}
      height={30}
      className='cursor-pointer rounded'
    />
  </div>
);
