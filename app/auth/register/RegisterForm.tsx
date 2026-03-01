'use client';

import { AuthForm } from '@/app/components/AuthForm';

export function RegisterForm() {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    console.log('Form submitted');
    e.preventDefault();
  };
  return <AuthForm formType='register' onSubmit={handleSubmit} />;
}
