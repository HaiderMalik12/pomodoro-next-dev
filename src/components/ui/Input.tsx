import React, { forwardRef } from 'react';
import clsx from 'clsx';

type InputProps = {
  label: string;
  name?: string;
  type?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, type = 'text', ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1">
        <label htmlFor={props.id || props.name} className="text-sm font-medium">
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          className={clsx(
            'px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500',
            error ? 'border-red-500' : 'border-gray-300',
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
