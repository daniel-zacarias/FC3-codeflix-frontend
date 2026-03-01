'use client';

import React from 'react';
import { InputField } from './InputField';

type AuthFormProps = {
  formType: 'login' | 'register';
  onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
};

export const AuthForm: React.FC<AuthFormProps> = ({ formType, onSubmit }) => {
  return (
    <form
      noValidate={true}
      className='bg-opac flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] px-4 py-8 opacity-80 shadow-lg'
      onSubmit={onSubmit}
    >
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>
          {formType === 'login' ? 'Login' : 'Register'}
        </h1>
        <p className='text-sm text-gray-500'>
          {formType === 'login' ? 'New to the app?' : 'Do you have an account?'}{' '}
          <a
            href={formType === 'login' ? '/auth/register' : '/auth/login'}
            className='ml-1 text-red-500 hover:underline'
          >
            {formType === 'login' ? 'Register' : 'Login'}
          </a>
        </p>
      </div>
      <div className='mt-8 flex flex-col space-y-4'>
        <InputField
          id='email'
          name='email'
          label='Email'
          type='email'
          placeholder='Enter your email'
        />
        <InputField
          id='password'
          name='password'
          label='Password'
          type='password'
          placeholder='Enter your password'
        />
        {formType === 'register' && (
          <InputField
            id='confirm-password'
            name='confirm-password'
            label='Confirm Password'
            type='password'
            placeholder='Confirm your password'
          />
        )}
      </div>
      <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-y-0 sm:space-x-2'>
        <button
          type='submit'
          className='flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 sm:w-auto sm:px-8'
        >
          Submit
        </button>
      </div>
    </form>
  );
};
