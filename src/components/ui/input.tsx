import * as React from 'react';
import { cn } from '@/lib/utils';

// export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'border-input placeholder:text-muted-foreground focus-visible:ring-ring bg-brow-50 flex h-10 w-full rounded-md border px-3 py-2 text-base text-brown-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
