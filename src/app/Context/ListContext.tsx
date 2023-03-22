import * as React from 'react';
import { splitArray } from '../utils/Paginate';
import { Book } from '../types/Book';
import { Genre } from '../types/Genre';
import { ListContextType } from '../types/List';

export const ListContext = React.createContext<ListContextType | null>(null);

const ListProvider = ({ children }: { children: React.ReactElement }) => {
  const [listedItems, setListedItems] = React.useState(5);
  const [activeListPart, setActiveListPart] = React.useState<number>(0);
  const [cardMode, setCardMode] = React.useState(false);


  const [list, setList] = React.useState<Genre[] | Book[] | []>([]);
  const [listIntact, setListIntact] = React.useState<Genre[] | Book[] | []>([]);

  const [paginateItems, setPaginateItems] = React.useState<(Book[] | Genre[] | [])[]>([]);

  const updateCardMode = (status: boolean) => {
    setCardMode(status);
  }

  const updateListedItems = (newValue: number) => {
    setListedItems(newValue);
  }

  const updatePaginateItems = () => {
    const newPaginateItems = splitArray(list, listedItems);
    setPaginateItems([...newPaginateItems]);
  }

  const updateList = (newList: Genre[] | Book[]) => {
    setList([...newList]);
  }

  const updateListIntact = (newList: Genre[] | Book[]) => {
    setListIntact([...newList]);
  }

  const updateActiveListPart = (newValue: number) => {
    setActiveListPart(newValue);
  }

  React.useEffect(() => {
    updatePaginateItems();
  }, [list, listedItems]);

  return <ListContext.Provider value={{ listedItems, paginateItems, cardMode, updateCardMode, updateListedItems, list, listIntact, updateListIntact, updateList, activeListPart, updateActiveListPart }}>{children}</ListContext.Provider>;
};

export default ListProvider;