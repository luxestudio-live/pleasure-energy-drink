// Prefix image paths with basePath for GitHub Pages compatibility
export function withBasePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (path.startsWith('http') || path.startsWith(base)) return path;
  return `${base}${path}`;
}
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
