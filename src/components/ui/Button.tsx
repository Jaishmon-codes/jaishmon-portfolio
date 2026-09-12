import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium font-mono text-xs tracking-wider uppercase transition-all duration-300 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent select-none group cursor-pointer';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-xs gap-2',
    lg: 'px-7 py-3.5 text-sm gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-theme-accent text-white hover:opacity-95 shadow-glow-sm hover:shadow-glow active:scale-[0.98] border border-theme-accent/60',
    secondary:
      'bg-theme-card/80 text-theme-text-primary hover:bg-theme-elevated/90 border border-theme-border hover:border-theme-border-hover hover:text-white',
    outline:
      'bg-transparent text-theme-accent border border-theme-border hover:border-theme-accent hover:bg-theme-accent/10 hover:shadow-glow-sm',
    ghost:
      'bg-transparent text-theme-text-secondary hover:text-theme-text-primary hover:bg-white/5',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {content}
    </button>
  );
};
