import React from 'react';
import styles from './Genres.module.scss';
import { ListContext } from '../../../Context/ListContext';
import { ListContextType } from '../../../types/List';
import { Genre } from '../../../types/Genre';
import { GenreItem } from '../../modules/GenreItem/GenreItem';

export function GenresPage() {
  const { paginateItems, activeListPart, cardMode } = React.useContext(ListContext) as ListContextType;
  return <main className={`${styles.genresPage} ${cardMode ? styles.boxLayout : ''}`}>
    {paginateItems.length > 0 && paginateItems[activeListPart].map((item: Genre) => <GenreItem data={item} />)}
  </main>
}