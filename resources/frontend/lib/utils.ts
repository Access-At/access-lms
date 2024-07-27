import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImages() {
  return Array.from({ length: 56 }, (_, index) => 600 + index).map((i) => {
      return [6, 11, 17].includes(i) ? 'badURL' : `https://picsum.photos/${i}`
  })
}
