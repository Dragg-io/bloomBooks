import React from 'react';
import { Book } from '../../../types/Book';
import styles from './BookItem.module.scss';
import { ListContext } from '../../../Context/ListContext';
import { ListContextType } from '../../../types/List';
import { FavContext } from '../../../Context/FavContext';
import { FavContextType } from '../../../types/Fav';

export function BookItem({ data }: { data: Book }) {
  const { cardMode } = React.useContext(ListContext) as ListContextType;
  const { addFav, removeFav, favs } = React.useContext(FavContext) as FavContextType;

  const verifyFav = (id: string) => {
    if (favs.filter(item => item.primary_isbn10 === id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  const clickFavoriteHandle = () => {
    if (verifyFav(data.primary_isbn10)) {
      removeFav(data.primary_isbn10);
    } else {
      addFav(data);
    }
  }


  return <div className={`${styles.book} ${cardMode ? styles.boxLayout : ''}`} key={data.primary_isbn10}>
    <div className={styles.image}>
      <figure>
        <img src={data.book_image} alt={`Capa do livro: ${data.title}`} />
      </figure>
    </div>
    <div className={styles.info}>
      <div className={styles.infoName}>
        <h2>{data.title}</h2>
        <div>
          <p>by {data.author}</p>
          <span className={styles.favoriteBtn} onClick={clickFavoriteHandle}>
            <svg width="13" height="11" viewBox="0 0 13 11" className={`${verifyFav(data.primary_isbn10) ? styles.isActive : ''}`} fill={'none'} xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 0.5L8.1995 3.79127L12 4.32229L9.25 6.88275L9.899 10.5L6.5 8.79127L3.101 10.5L3.75 6.88275L1 4.32229L4.8005 3.79127L6.5 0.5Z" stroke="#5062F0" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </div>
      </div>
      <div className={styles.infoDescript}>
        <p className={styles.descript}>{data.description}</p>
        <p>Editora {data.publisher}</p>
        <p>Rank {data.rank}</p>
      </div>
      <div className={styles.btnArea}>
        <a href={data.amazon_product_url} target="_blank">Compre por R${data.price}</a>
      </div>
    </div>
  </div>
}