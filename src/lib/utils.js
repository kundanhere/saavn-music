import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function sortByDate(data = [], order = 'asc') {
  return order === 'asc' ? data.sort((a, b) => a.released - b.released) : data.sort((a, b) => b.released - a.released);
}
