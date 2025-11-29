import { HTMLAttributes, ReactNode } from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  children: ReactNode;
  gradient?: boolean;
}

const headingStyles: Record<HeadingLevel, string> = {
  h1: 'text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight',
  h2: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
  h3: 'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
  h4: 'text-2xl md:text-3xl font-semibold',
  h5: 'text-xl md:text-2xl font-semibold',
  h6: 'text-lg md:text-xl font-semibold',
};

export function Heading({ as = 'h2', gradient = false, children, className = '', ...props }: HeadingProps) {
  const Component = as;
  const gradientClass = gradient
    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent'
    : 'text-white';

  return (
    <Component className={`${headingStyles[as]} ${gradientClass} ${className}`} {...props}>
      {children}
    </Component>
  );
}

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  muted?: boolean;
}

const textSizes = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

export function Text({ size = 'base', muted = false, children, className = '', ...props }: TextProps) {
  const colorClass = muted ? 'text-gray-400' : 'text-gray-200';

  return (
    <p className={`${textSizes[size]} ${colorClass} leading-relaxed ${className}`} {...props}>
      {children}
    </p>
  );
}

interface CodeProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  inline?: boolean;
}

export function Code({ inline = true, children, className = '', ...props }: CodeProps) {
  if (inline) {
    return (
      <code
        className={`px-2 py-1 bg-dark-800 text-primary-400 rounded font-mono text-sm ${className}`}
        {...props}
      >
        {children}
      </code>
    );
  }

  return (
    <pre className={`p-4 bg-dark-800 rounded-lg overflow-x-auto ${className}`}>
      <code className="text-primary-400 font-mono text-sm" {...props}>
        {children}
      </code>
    </pre>
  );
}
