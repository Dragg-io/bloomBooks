import { useParams } from "react-router-dom";
import { Default } from "../app/components/layouts/Default/Default";
import { BooksPage } from "../app/components/templates/Books/Books";
import React from "react";
import api from "../app/services/api";
import { ListContext } from "../app/Context/ListContext";
import { ListContextType } from "../app/types/List";
import { Book } from "../app/types/Book";

interface apiResult {
  results: {
    books: Book[];
    list_name: string;
  }
}

export function Books() {
  let { genreId } = useParams();

  const { updateList, updateListIntact } = React.useContext(ListContext) as ListContextType;

  const [listName, setListName] = React.useState('');

  const getData = async () => {
    const res = await api<apiResult>(`/lists/${genreId}.json?api-key=33yZqYDA5efBwfvykZMtWJc8mJ2gvQuk`);

    return await res.data;
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      updateList(data.results.books);
      updateListIntact(data.results.books);
      setListName(data.results.list_name);
    }
    fetchData();
  }, []);

  return <Default title={genreId} listTitle={listName}>
    <BooksPage />
  </Default>
}