import { useCallback, useEffect, useRef, useState } from 'react';

import cn from 'classnames';

import { ChevronDown } from '@icons';

import './select.css';
import { TOption, TSelectOptionComponentProps, TSelectProps } from './types';

const DefaultSelectOptionContent = <T,>({ option }: TSelectOptionComponentProps<T>) => {
  return <>{option.label}</>;
};

export const Select = <T extends string | number>(props: TSelectProps<T>) => {
  const {
    mode = 'l',
    options,
    value,
    placeholder = 'Select an option',
    onChange,
    disabled = false,
    SelectOptionComponent = DefaultSelectOptionContent,
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const selectRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLLIElement | null)[]>([]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    if (isOpen && options.length > 0) {
      const currentIndex = value !== undefined ? options.findIndex((opt) => opt.value === value) : 0;
      setHighlightedIndex(currentIndex >= 0 ? currentIndex : 0);
    } else {
      setHighlightedIndex(-1);
    }
  }, [isOpen, options, value]);

  useEffect(() => {
    if (isOpen && highlightedIndex >= 0 && optionRefs.current[highlightedIndex]) {
      optionRefs.current[highlightedIndex]?.scrollIntoView({ block: 'nearest' });
    }
  }, [isOpen, highlightedIndex]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleChange = (option: TOption<T>) => {
    if (!disabled) {
      onChange?.(option.value);
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (isOpen && options.length > 0) {
          setHighlightedIndex((prev) => (prev + 1) % options.length);
        } else {
          setIsOpen(true);
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (isOpen && options.length > 0) {
          setHighlightedIndex((prev) => (prev - 1 + options.length) % options.length);
        } else {
          setIsOpen(true);
        }
        break;
      case 'Enter':
        event.preventDefault();
        if (isOpen && highlightedIndex >= 0 && options[highlightedIndex]) {
          handleChange(options[highlightedIndex]);
        } else {
          setIsOpen((prev) => !prev);
        }
        break;
      default:
        break;
    }
  };

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div
      tabIndex={disabled ? -1 : 0}
      className={cn('select', {
        select__large: mode === 'l',
        select__small: mode === 's',
        select__opened: isOpen,
        select__disabled: disabled,
      })}
      onKeyDown={handleKeyDown}
      ref={selectRef}
    >
      <div className="select__wrapper" onClick={handleToggle}>
        <span className="select__label">
          {selectedOption ? <SelectOptionComponent option={selectedOption} /> : placeholder}
        </span>
        <ChevronDown className={cn('select__arrow', { 'select__arrow--open': isOpen })} />
      </div>

      {options.length > 0 && (
        <ul className={cn('select__options', { opened: isOpen })} role="listbox">
          {options.map((option, index) => (
            <li
              ref={(el) => {
                optionRefs.current[index] = el;
              }}
              className={cn('select__option', { 'select__option--focused': highlightedIndex === index })}
              key={option.value}
              role="option"
              aria-selected={value === option.value}
              onClick={() => handleChange(option)}
            >
              <SelectOptionComponent option={option} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
