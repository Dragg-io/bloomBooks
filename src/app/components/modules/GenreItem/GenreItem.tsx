import React from 'react';
import { Genre } from '../../../types/Genre';
import { dateFormat, tranlateUpdate } from '../../../utils/Translates';
import styles from './GenreItem.module.scss';
import { ListContext } from '../../../Context/ListContext';
import { ListContextType } from '../../../types/List';

export function GenreItem({ data }: { data: Genre }) {
  const { cardMode } = React.useContext(ListContext) as ListContextType;

  return <div key={data.list_name_encoded} className={`${styles.genreItem} ${cardMode ? styles.boxLayout : ''}`}>
    <div className={styles.leftSide}>
      <a href={`/genero/${data.list_name_encoded}`}><h2>{data.display_name}</h2></a>
      <p>Atualizada {tranlateUpdate(data.updated)}</p>
    </div>
    <div className={styles.rightSide}>
      <p>Última publicação: {dateFormat(data.newest_published_date)}</p>
      <p>Publicação mais antiga: {dateFormat(data.oldest_published_date)}</p>
    </div>
  </div>
}