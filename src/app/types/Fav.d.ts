import { Book } from "./Book";

export type FavContextType = {
  favs: Book[];
  showFavTab: boolean;
  addFav: (fav: Book) => void;
  removeFav: (id: string) => void;
  switchShowTab: () => void;
};