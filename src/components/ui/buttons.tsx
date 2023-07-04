import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'select-none inline-flex items-center justify-center rounded-md text-base font-medium leading-none ring-offset-background ring-highlight-200/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-brown-50 text-brown-700 shadow-sm shadow-brown-500/50 hover:bg-brown-100/95 active:bg-brown-200 active:text-brown-800',
        // outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        highlight:
          'bg-highlight-500 text-brown-600 shadow-sm shadow-highlight-200/50 ring-highlight-200/90 hover:bg-highlight-600/90 active:bg-highlight-800/95 active:text-brown-700',
        ghost: 'text-brown-50 hover:bg-brown-200/25',
        link: 'text-highlight-800 underline decoration-highlight-500 underline-offset-4 hover:text-highlight-600 hover:decoration-highlight-300 active:text-highlight-500 active:decoration-highlight-200',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-8 font-semibold',
        xl: 'h-14 px-8 font-semibold',
        icon: 'h-10 w-10 rounded-xl',
        clear: 'p-0 h-auto',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';
