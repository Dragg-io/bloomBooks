import { Genre } from "./Genre";

export type ListContextType = {
  listedItems: number;
  activeListPart: number;
  paginateItems: array[];
  cardMode: boolean;
  list: Genre[] | Book[];
  listIntact: Genre[] | Book[];
  updateListIntact:(list:Genre[] | Book[]) => void;
  updateActiveListPart: (newValue:number) => void;
  updateList: (list:Genre[] | Book[]) => void;
  updateCardMode: (status:boolean) => void;
  updateListedItems: (newList:number) => void;
};