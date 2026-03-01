'use client';

import { InputField } from '@/app/components/InputField';

export default function ForgotPasswordForm() {
  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Forgot password form submitted');
  };
  return (
    <form
      onSubmit={onSubmit}
      className='bg-opac flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] px-4 py-8 opacity-80 shadow-lg'
    >
      <h1 className='self-center text-3xl font-bold'>Forgot password</h1>
      <p className='self-center text-gray-500'>
        Enter your email to reset your password.
      </p>
      <div className='mt-4 flex flex-col space-y-4'>
        <InputField
          id='email'
          label='Email'
          type='email'
          name='email'
          placeholder='Enter your email'
        />
      </div>
      <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-y-0 sm:space-x-2'>
        <button
          type='submit'
          className='flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 sm:w-auto sm:px-8'
        >
          Reset Password
        </button>
      </div>
    </form>
  );
}
