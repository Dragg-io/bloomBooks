import styles from './FavItem.module.scss';
import { Book } from '../../../types/Book';
import React from 'react';
import { FavContext } from '../../../Context/FavContext';
import { FavContextType } from '../../../types/Fav';

export function FavItem({ data }: { data: Book }) {

  const { removeFav } = React.useContext(FavContext) as FavContextType;

  const clickFavoriteHandle = () => {
    removeFav(data.primary_isbn10);
  }

  return <div className={styles.favItem}>
    <div className={styles.leftSide}>
      <figure>
        <img src={data.book_image} alt={`Capa do livro: ${data.title}`} />
      </figure>
    </div>
    <div className={styles.rightSide}>
      <h2>{data.title}</h2>
      <p>by {data.author} <svg onClick={clickFavoriteHandle} width="13" height="11" viewBox="0 0 13 11" fill={'none'} xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 0.5L8.1995 3.79127L12 4.32229L9.25 6.88275L9.899 10.5L6.5 8.79127L3.101 10.5L3.75 6.88275L1 4.32229L4.8005 3.79127L6.5 0.5Z" stroke="#5062F0" stroke-linecap="round" stroke-linejoin="round" />
      </svg></p>
    </div>
  </div>
}