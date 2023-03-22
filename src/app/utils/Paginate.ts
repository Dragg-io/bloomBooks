import { Book } from "../types/Book";
import { Genre } from "../types/Genre";

export function splitArray(array:Book[]|Genre[], numItemsPerPart:number) {
  const numParts = Math.ceil(array.length / numItemsPerPart);
  const parts = [];

  for (let i = 0; i < numParts; i++) {
    parts.push(array.slice(i * numItemsPerPart, (i + 1) * numItemsPerPart));
  }

  return parts;
}