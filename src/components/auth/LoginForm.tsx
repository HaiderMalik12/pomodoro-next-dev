'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { loginUser } from '@/lib/api';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import FormError from '@/components/ui/FormError';
import { useRouter } from 'next/navigation';

const formSchema = z
  .object({
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  });

type FormSchema = z.infer<typeof formSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const [serverError, setServerError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: FormSchema) => {
    setIsLoading(true);
    setServerError('');

    try {
      console.log('Submitting registration data:', data);
      const response = await loginUser(data);
      console.log('Response from registration:', response);

      if (!response.token) {
        const error = await response.json();
        setServerError(error.message || 'Something went wrong');
      } else {
        router.push('/dashboard'); 
      }
    } catch (error) {
      setServerError('Server error. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      {serverError && <FormError message={serverError} />}

      <Input
        label="Email"
        type="email"
        {...register('email')}
        error={errors.email?.message}
      />

      <Input
        label="Password"
        type="password"
        {...register('password')}
        error={errors.password?.message}
      />


      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? 'Login account...' : 'Login'}
      </Button>
    </form>
  );
}
