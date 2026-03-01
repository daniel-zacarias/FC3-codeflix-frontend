'use client';

import { AuthForm } from '@/app/components/AuthForm';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { set } from 'zod';

type ServerError = {
  message: string;
};

export function LoginForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<string[]>([]);
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log(formData);
    try {
      const response = await fetch('/auth/login/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push('/');
        return;
      }
      const payload: ServerError[] = await response.json();
      setErrors(payload.map((err) => err.message));
    } catch (error) {
      console.error(error);
      setErrors(['An unexpected error occurred. Please try again later.']);
    }
  };
  return <AuthForm formType='login' onSubmit={handleSubmit} />;
}
