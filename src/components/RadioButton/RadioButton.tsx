import React, { forwardRef, useState, useEffect } from 'react';
import { getColor, getSpacing, getFontSize } from '../../utils/tokens';

export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  disabled?: boolean;
  label?: string;
  fullWidth?: boolean;
  description?: string;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      size = 'medium',
      error = false,
      disabled = false,
      label,
      description,
      fullWidth = false,
      className,
      style,
      checked,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isChecked, setIsChecked] = useState(checked || false);

    useEffect(() => {
      setIsChecked(checked || false);
    }, [checked]);

    // Proporções para cada tamanho
    const sizeMap = {
      small: { box: 16, dot: 6, font: 'sm' },
      medium: { box: 20, dot: 8, font: 'base' },
      large: { box: 24, dot: 10, font: 'lg' },
    };
    const s = sizeMap[size];

    const containerStyles: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      gap: getSpacing(2),
      width: fullWidth ? '100%' : 'auto',
      opacity: disabled ? 0.6 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      padding: getSpacing(1),
      borderRadius: getSpacing(1),
      transition: 'background-color 0.2s ease',
    };

    const inputStyles: React.CSSProperties = {
      width: s.box,
      height: s.box,
      minWidth: s.box,
      minHeight: s.box,
      appearance: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      border: `2px solid ${error 
        ? getColor('error') 
        : isFocused 
        ? getColor('primary') 
        : getColor('border', 'primary')}`,
      borderRadius: '50%',
      backgroundColor: isChecked ? getColor('primary') : getColor('background', 'primary'),
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-block',
      position: 'relative',
      transition: 'all 0.2s ease',
      flexShrink: 0,
      margin: 0,
      padding: 0,
      verticalAlign: 'middle',
      outline: 'none',
      boxSizing: 'border-box',
      ...style,
    };

    const labelContainerStyles: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      gap: getSpacing(1),
      flex: 1,
    };

    const labelStyles: React.CSSProperties = {
      fontSize: getFontSize(s.font),
      color: getColor('text', 'primary'),
      cursor: disabled ? 'not-allowed' : 'pointer',
      userSelect: 'none',
      lineHeight: 1.2,
      fontWeight: 500,
      margin: 0,
      padding: 0,
      display: 'flex',
      alignItems: 'center',
    };

    const descriptionStyles: React.CSSProperties = {
      fontSize: getFontSize('sm'),
      color: getColor('text', 'secondary'),
      cursor: disabled ? 'not-allowed' : 'pointer',
      userSelect: 'none',
      lineHeight: 1.2,
      margin: 0,
      padding: 0,
      display: 'block',
    };

    const dotStyles: React.CSSProperties = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: s.dot,
      height: s.dot,
      borderRadius: '50%',
      backgroundColor: getColor('background', 'primary'),
      pointerEvents: 'none',
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        setIsChecked(e.target.checked);
        props.onChange?.(e);
      }
    };

    const handleContainerClick = () => {
      if (!disabled && ref && typeof ref === 'object' && ref.current) {
        ref.current.click();
      }
    };

    return (
      <label 
        style={containerStyles} 
        className={className}
        onClick={handleContainerClick}
        onMouseEnter={() => !disabled && setIsFocused(true)}
        onMouseLeave={() => !disabled && setIsFocused(false)}
      >
        <span style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <input
            ref={ref}
            type="radio"
            style={inputStyles}
            disabled={disabled}
            checked={isChecked}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          {/* Dot for checked state */}
          {isChecked && (
            <span style={dotStyles} />
          )}
        </span>
        {(label || description) && (
          <span style={labelContainerStyles}>
            {label && (
              <span style={labelStyles}>{label}</span>
            )}
            {description && (
              <span style={descriptionStyles}>{description}</span>
            )}
          </span>
        )}
        <style>
          {`
            input[type="radio"]:focus {
              outline: 2px solid ${getColor('primary')};
              outline-offset: 2px;
            }
            input[type="radio"]:hover:not(:disabled) {
              border-color: ${getColor('primary')};
            }
            input[type="radio"]:not(:checked) {
              border-color: ${error ? getColor('error') : getColor('border', 'primary')};
            }
          `}
        </style>
      </label>
    );
  }
);

RadioButton.displayName = 'RadioButton';

export default RadioButton; 