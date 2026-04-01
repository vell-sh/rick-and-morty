import { useRef } from 'react';

import { CloseIcon } from '@icons';
import { classnames } from '@lib';

import './text-field.css';
import { TTextFieldProps } from './types';

export const TextField = ({
  className,
  value,
  id,
  size = 'l',
  variant = 'outlined',
  disabled = false,
  icon,
  onClear,
  onChange,
  placeholder,
  ...restInputProps
}: TTextFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const showClear = !!value && !!onClear;

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClear?.();
    inputRef.current?.focus();
  };

  return (
    <div
      className={classnames(
        'text-field',
        `text-field--${variant}`,
        `text-field--${size}`,
        {
          'text-field--with-icon': !!icon,
          'text-field--disabled': disabled,
        },
        className
      )}
    >
      <div className="text-field__control">
        {!!icon && <span className="text-field__icon">{icon}</span>}
        <input
          id={id}
          className="text-field__input"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          {...restInputProps}
          ref={inputRef}
        />
        {showClear && (
          <button type="button" className="text-field__clear-btn" onClick={handleClear} aria-label="Clear input">
            <CloseIcon className="text-field__clear-icon" />
          </button>
        )}
      </div>
    </div>
  );
};
