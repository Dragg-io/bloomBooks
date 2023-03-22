import React from 'react';
import searchIcon from '../../../assets/searchIcon.svg';
import styles from './SearchBar.module.scss';
import { ListContext } from '../../../Context/ListContext';
import { ListContextType } from '../../../types/List';

export function SearchBar() {

  const { listIntact, updateList } = React.useContext(ListContext) as ListContextType;


  const searchEventHandle = (searchValue: string) => {
    const newList = listIntact.filter(function (item) {
      console.log(item.title);
      let searchReference;
      if (item.title !== undefined) {
        searchReference = item.title.toLowerCase();
      } else {
        searchReference = item.display_name.toLowerCase();
      }
      if (typeof searchReference === "string" && searchReference.includes(searchValue)) {
        return true;
      }
      return false;
    });

    updateList(newList);
  }

  return <label className={styles.searchBar} htmlFor='search'>
    <button><img src={searchIcon} alt="Ícone do botão de busca" /></button>
    <input onChange={(event) => { searchEventHandle(event.target.value.toLowerCase()) }} type="search" title="search" id='search' required placeholder='Pesquise aqui...' />
  </label>
}