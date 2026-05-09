type TClassnames =
  | string
  | number
  | null
  | undefined
  | Record<string, boolean | undefined | null>;

export const classnames = (...args: TClassnames[]): string => {
  const parts: string[] = [];

  for (const arg of args) {
    if (arg == null) continue;

    if (typeof arg === 'string' || typeof arg === 'number') {
      if (arg) parts.push(String(arg));
      continue;
    }

    for (const [key, value] of Object.entries(arg)) {
      if (value) parts.push(key);
    }
  }

  return parts.join(' ');
};
