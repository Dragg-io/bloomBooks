import React from "react";
import { Default } from "../app/components/layouts/Default/Default";
import { BooksPage } from "../app/components/templates/Books/Books";
import { ListContext } from "../app/Context/ListContext";
import { ListContextType } from "../app/types/List";
import { Genre } from "../app/types/Genre";
import api from "../app/services/api";
import { GenresPage } from "../app/components/templates/Genres/Genres";

interface apiResult {
  results: Genre[];
}

export function Genres() {

  const { updateList, updateListIntact } = React.useContext(ListContext) as ListContextType;

  const getData = async () => {
    const res = await api<apiResult>(`/lists/names.json?api-key=33yZqYDA5efBwfvykZMtWJc8mJ2gvQuk`);

    return await res.data;
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      updateListIntact(data.results);
      updateList(data.results);
    }
    fetchData();
  }, []);

  return <Default title="Gêneros" listTitle="Gêneros">
    <GenresPage />
  </Default>
}