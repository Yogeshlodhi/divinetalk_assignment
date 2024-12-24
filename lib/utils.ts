import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const calculate_charge = ({charge, discount}: {charge: number, discount: number}) => {
  if (discount === 0) return charge;

  if (discount === 100) return 0;

  const amount_to_reduce = (charge * discount) / 100;
  const final_charge = charge - amount_to_reduce;
  return final_charge;

};