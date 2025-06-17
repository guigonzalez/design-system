import React, { forwardRef, useEffect, useState } from 'react';
import { getColor, getSpacing, getFontSize, getBorderRadius } from '../../utils/tokens';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  disabled?: boolean;
  label?: string;
  indeterminate?: boolean;
  fullWidth?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = 'medium',
      error = false,
      disabled = false,
      label,
      indeterminate = false,
      fullWidth = false,
      className,
      style,
      checked,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(checked || false);
    const [isIndeterminate, setIsIndeterminate] = useState(indeterminate);

    useEffect(() => {
      setIsChecked(checked || false);
    }, [checked]);

    useEffect(() => {
      setIsIndeterminate(indeterminate);
    }, [indeterminate]);

    // Proporções para cada tamanho
    const sizeMap = {
      small: { box: 16, icon: 10, font: 'sm' },
      medium: { box: 20, icon: 12, font: 'base' },
      large: { box: 24, icon: 16, font: 'lg' },
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
      border: `2px solid ${error ? getColor('error') : getColor('border', 'primary')}`,
      borderRadius: getBorderRadius('sm'),
      backgroundColor: isChecked || isIndeterminate ? getColor('primary') : getColor('background', 'primary'),
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-block',
      position: 'relative',
      transition: 'all 0.2s ease',
      flexShrink: 0,
      margin: 0,
      padding: 0,
      verticalAlign: 'middle',
      outline: 'none',
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

    const checkmarkStyles: React.CSSProperties = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: s.icon,
      height: s.icon,
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    const indeterminateLineStyles: React.CSSProperties = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '60%',
      height: 2,
      backgroundColor: getColor('background', 'primary'),
      borderRadius: 1,
      pointerEvents: 'none',
    };

    useEffect(() => {
      if (ref && typeof ref === 'object' && ref.current) {
        ref.current.indeterminate = isIndeterminate;
      }
    }, [isIndeterminate, ref]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        setIsChecked(e.target.checked);
        setIsIndeterminate(false);
        props.onChange?.(e);
      }
    };

    return (
      <label style={containerStyles} className={className}>
        <span style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <input
            ref={ref}
            type="checkbox"
            style={inputStyles}
            disabled={disabled}
            checked={isChecked}
            onChange={handleChange}
            {...props}
          />
          {/* Checkmark for checked state */}
          {isChecked && !isIndeterminate && (
            <span style={checkmarkStyles}>
              <svg
                width={s.icon}
                height={s.icon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke={getColor('background', 'primary')}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
          {/* Indeterminate line */}
          {isIndeterminate && (
            <span style={indeterminateLineStyles} />
          )}
        </span>
        {label && (
          <span style={labelStyles}>{label}</span>
        )}
        <style>
          {`
            input[type="checkbox"]:focus {
              outline: 2px solid ${getColor('primary')};
              outline-offset: 2px;
            }
            input[type="checkbox"]:hover:not(:disabled) {
              border-color: ${getColor('primary')};
            }
            input[type="checkbox"]:not(:checked):not(:indeterminate) {
              border-color: ${error ? getColor('error') : getColor('border', 'primary')};
            }
          `}
        </style>
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox; 