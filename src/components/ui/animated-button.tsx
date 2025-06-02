import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedButton({ children, className, ...props }: AnimatedButtonProps) {
  return (
    <button
      className={cn(
        "bg-transparent relative py-[5px] px-[15px] flex items-center justify-center text-[17px] border-white font-semibold no-underline cursor-pointer border rounded-[50px] outline-none overflow-hidden text-white transition-[color] duration-300 delay-100 ease-out text-center hover:text-white hover:border-[rgb(40,144,241)] before:absolute before:top-0 before:right-0 before:bottom-0 before:m-auto before:content-[''] before:rounded-full before:block before:w-[20em] before:h-[20em] before:left-[-5em] before:text-center before:transition-[box-shadow] before:duration-500 before:ease-out before:-z-[1] hover:before:shadow-[inset_0_0_0_10em_rgb(40,144,241)]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
} 