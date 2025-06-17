import React from 'react';
import { getColor, getSpacing, getBorderRadius, getTypography, getShadow, getTransition } from '../../utils/tokens';
import './Button.css';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
}) => {
  const baseClass = 'design-system-button';
  const variantClass = `design-system-button--${variant}`;
  const sizeClass = `design-system-button--${size}`;
  const stateClass = disabled ? 'design-system-button--disabled' : '';
  const loadingClass = loading ? 'design-system-button--loading' : '';
  const fullWidthClass = fullWidth ? 'design-system-button--full-width' : '';

  const combinedClassName = [
    baseClass,
    variantClass,
    sizeClass,
    stateClass,
    loadingClass,
    fullWidthClass,
    className
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  // Estilos base
  const baseStyles: React.CSSProperties = {
    borderRadius: getBorderRadius('md'),
    fontWeight: getTypography('fontWeight', 'medium'),
    boxShadow: getShadow('sm'),
    transition: `all ${getTransition('duration', '200')} ease`,
    border: 'none',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    width: fullWidth ? '100%' : 'auto',
  };

  // Estilos específicos por tamanho
  const sizeStyles: React.CSSProperties = {
    sm: {
      padding: `${getSpacing('2')} ${getSpacing('3')}`,
      fontSize: getTypography('fontSize', 'sm'),
      minHeight: '32px',
    },
    md: {
      padding: `${getSpacing('3')} ${getSpacing('4')}`,
      fontSize: getTypography('fontSize', 'base'),
      minHeight: '40px',
    },
    lg: {
      padding: `${getSpacing('4')} ${getSpacing('6')}`,
      fontSize: getTypography('fontSize', 'lg'),
      minHeight: '48px',
    },
  }[size];

  // Estilos específicos por variante
  const variantStyles: React.CSSProperties = {
    primary: {
      backgroundColor: getColor('primary', '500'),
      color: getColor('neutral', 'white'),
    },
    secondary: {
      backgroundColor: getColor('secondary', '100'),
      color: getColor('secondary', '900'),
      border: `1px solid ${getColor('secondary', '300')}`,
    },
    success: {
      backgroundColor: getColor('success', '500'),
      color: getColor('neutral', 'white'),
    },
    warning: {
      backgroundColor: getColor('warning', '500'),
      color: getColor('neutral', 'white'),
    },
    error: {
      backgroundColor: getColor('error', '500'),
      color: getColor('neutral', 'white'),
    },
    ghost: {
      backgroundColor: 'transparent',
      color: getColor('primary', '500'),
      border: '1px solid transparent',
    },
  }[variant];

  const combinedStyles = { ...baseStyles, ...sizeStyles, ...variantStyles };

  return (
    <button
      type={type}
      className={combinedClassName}
      style={combinedStyles}
      onClick={handleClick}
      disabled={disabled || loading}
    >
      {loading && (
        <span className="design-system-button__loader">
          <svg className="design-system-button__spinner" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          </svg>
        </span>
      )}
      <span className="design-system-button__content">
        {children}
      </span>
    </button>
  );
};

export default Button; 