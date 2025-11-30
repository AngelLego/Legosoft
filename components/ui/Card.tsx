'use client';

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export type CardVariant = 'elevated' | 'outlined' | 'glass';

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  variant?: CardVariant;
  hoverable?: boolean;
  children: ReactNode;
}

const variantStyles: Record<CardVariant, string> = {
  elevated: 'bg-dark-800 shadow-xl',
  outlined: 'bg-dark-900 border border-dark-700',
  glass: 'bg-white/5 backdrop-blur-lg border border-white/10',
};

export function Card({
  variant = 'elevated',
  hoverable = false,
  children,
  className = '',
  ...props
}: CardProps) {
  const baseStyles = 'rounded-xl p-6 transition-all duration-300';

  const hoverStyles = hoverable
    ? 'hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 cursor-pointer'
    : '';

  return (
    <motion.div
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
