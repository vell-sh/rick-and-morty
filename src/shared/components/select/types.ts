export type TOption<T> = {
  label: string;
  value: T;
};

export type TSelectOptionComponentProps<T> = {
  option: TOption<T>;
};

export type TSelectProps<T> = {
  options: readonly TOption<T>[];
  onChange?: (value: T) => void;
  value?: T;
  size?: 'l' | 's';
  placeholder?: string;
  disabled?: boolean;
  SelectOptionComponent?: React.FC<TSelectOptionComponentProps<T>>;
};
