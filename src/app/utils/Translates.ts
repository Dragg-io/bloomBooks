import { Genre } from "../types/Genre";

export function tranlateUpdate(updated:"WEEKLY" | "MONTHLY"){
  if(updated === 'WEEKLY') return 'semanalmente';
  if(updated === 'MONTHLY') return 'mensalmente';
}

export function dateFormat(date:string){
  const dateFormat = new Date(date);
  return dateFormat.toLocaleDateString()
}