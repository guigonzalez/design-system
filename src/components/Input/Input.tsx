import React, { forwardRef, useState } from 'react';
import { getColor, getSpacing, getFontSize, getBorderRadius, getShadow } from '../../utils/tokens';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'outlined' | 'filled';
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  label?: string;
  helperText?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      size = 'medium',
      error = false,
      success = false,
      disabled = false,
      fullWidth = false,
      label,
      helperText,
      startIcon,
      endIcon,
      required = false,
      className,
      style,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const getVariantStyles = () => {
      const baseBorder = error 
        ? getColor('error') 
        : success 
        ? getColor('success') 
        : isFocused 
        ? getColor('primary') 
        : getColor('border', 'primary');

      switch (variant) {
        case 'outlined':
          return {
            border: `1px solid ${baseBorder}`,
            backgroundColor: 'transparent',
            boxShadow: isFocused ? `0 0 0 3px ${getColor('primary')}20` : 'none',
          };
        case 'filled':
          return {
            border: 'none',
            backgroundColor: getColor('background', 'secondary'),
            borderBottom: `2px solid ${baseBorder}`,
            boxShadow: isFocused ? `0 0 0 3px ${getColor('primary')}20` : 'none',
          };
        default:
          return {
            border: `1px solid ${baseBorder}`,
            backgroundColor: getColor('background', 'primary'),
            boxShadow: isFocused ? `0 0 0 3px ${getColor('primary')}20` : 'none',
          };
      }
    };

    const getSizeStyles = () => {
      switch (size) {
        case 'small':
          return {
            padding: `${getSpacing(1)} ${getSpacing(2)}`,
            fontSize: getFontSize('sm'),
            height: '32px',
            minHeight: '32px',
          };
        case 'large':
          return {
            padding: `${getSpacing(3)} ${getSpacing(4)}`,
            fontSize: getFontSize('lg'),
            height: '48px',
            minHeight: '48px',
          };
        default:
          return {
            padding: `${getSpacing(2)} ${getSpacing(3)}`,
            fontSize: getFontSize('base'),
            height: '40px',
            minHeight: '40px',
          };
      }
    };

    const inputStyles: React.CSSProperties = {
      width: fullWidth ? '100%' : 'auto',
      borderRadius: getBorderRadius('md'),
      color: getColor('text', 'primary'),
      outline: 'none',
      transition: 'all 0.2s ease',
      boxSizing: 'border-box',
      fontFamily: 'inherit',
      ...getVariantStyles(),
      ...getSizeStyles(),
      ...style,
    };

    const containerStyles: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      width: fullWidth ? '100%' : 'auto',
    };

    const inputContainerStyles: React.CSSProperties = {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    };

    const iconStyles: React.CSSProperties = {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: getColor('text', 'secondary'),
      zIndex: 1,
      pointerEvents: 'none',
    };

    const startIconStyles: React.CSSProperties = {
      ...iconStyles,
      left: getSpacing(2),
    };

    const endIconStyles: React.CSSProperties = {
      ...iconStyles,
      right: getSpacing(2),
    };

    const labelStyles: React.CSSProperties = {
      fontSize: getFontSize('sm'),
      fontWeight: 500,
      color: getColor('text', 'primary'),
      marginBottom: getSpacing(1),
      display: 'flex',
      alignItems: 'center',
      gap: getSpacing(1),
    };

    const requiredStyles: React.CSSProperties = {
      color: getColor('error'),
      fontSize: getFontSize('sm'),
    };

    const helperTextStyles: React.CSSProperties = {
      fontSize: getFontSize('sm'),
      color: error ? getColor('error') : getColor('text', 'secondary'),
      marginTop: getSpacing(1),
      display: 'flex',
      alignItems: 'center',
      gap: getSpacing(1),
    };

    // Add padding for icons
    if (startIcon) {
      inputStyles.paddingLeft = `calc(${getSpacing(3)} + 24px)`;
    }
    if (endIcon) {
      inputStyles.paddingRight = `calc(${getSpacing(3)} + 24px)`;
    }

    // Disabled state
    if (disabled) {
      inputStyles.opacity = 0.6;
      inputStyles.cursor = 'not-allowed';
      inputStyles.backgroundColor = getColor('background', 'secondary');
    }

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    return (
      <div style={containerStyles} className={className}>
        {label && (
          <label style={labelStyles}>
            {label}
            {required && <span style={requiredStyles}>*</span>}
          </label>
        )}
        <div style={inputContainerStyles}>
          {startIcon && (
            <div style={startIconStyles}>
              {startIcon}
            </div>
          )}
          <input
            ref={ref}
            style={inputStyles}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          {endIcon && (
            <div style={endIconStyles}>
              {endIcon}
            </div>
          )}
        </div>
        {helperText && (
          <span style={helperTextStyles}>
            {error && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill={getColor('error')} />
                <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
            {success && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill={getColor('success')} />
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 