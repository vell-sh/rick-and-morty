export type TTextFieldProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  icon?: React.ReactNode;
  onClear?: () => void;
  size?: 'l' | 's';
  variant?: 'underlined' | 'outlined';
};
