import { clsx } from "clsx" 
import { twMerge } from "tailwind-merge"

export const con = (...inputs) => {
    return twMerge(clsx())
}