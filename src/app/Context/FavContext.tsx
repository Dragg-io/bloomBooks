import * as React from 'react';
import { FavContextType } from '../types/Fav';
import { Book } from '../types/Book';

export const FavContext = React.createContext<FavContextType | null>(null);

const FavProvider = ({ children }: { children: React.ReactElement }) => {
  const [favs, setFavs] = React.useState<Book[]>([]);
  const [showFavTab, setShowFavTab] = React.useState<boolean>(false);

  const updateLocalStorageFavs = (newFavs: Book[]) => {
    window.localStorage.setItem('localFavs', JSON.stringify(newFavs));
  }

  const addFav = (fav: Book) => {
    const newFav: Book = fav;
    setFavs([...favs, newFav]);
    updateLocalStorageFavs([...favs, newFav]);
  };
  const removeFav = (id: string) => {
    const newFav: Book[] = favs.filter(item => item.primary_isbn10 !== id);
    setFavs([...newFav]);
    updateLocalStorageFavs([...newFav]);
  };
  const switchShowTab = () => {
    setShowFavTab(!showFavTab);
    if (!showFavTab) {
      document.querySelector('body')?.classList.add('no-scroll');
    } else {
      document.querySelector('body')?.classList.remove('no-scroll');
    }
  }

  React.useEffect(() => {
    if (window.localStorage.getItem('localFavs') !== null) {
      const localFavs = JSON.parse(window.localStorage.getItem('localFavs') || '');
      setFavs([...localFavs]);
    }
  }, []);

  return <FavContext.Provider value={{ favs, addFav, removeFav, showFavTab, switchShowTab }}>{children}</FavContext.Provider>;
};

export default FavProvider;