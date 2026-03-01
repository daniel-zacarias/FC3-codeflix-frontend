'use client';

import { AuthForm } from '@/app/components/AuthForm';
import { InputField } from '../../components/InputField';

export function RegisterForm() {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    console.log('Form submitted');
    e.preventDefault();
  };
  return <AuthForm formType='register' onSubmit={handleSubmit} />;
}
