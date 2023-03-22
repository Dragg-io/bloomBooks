import { useContext } from 'react';
import styles from './FavTab.module.scss';
import { FavContextType } from '../../../types/Fav';
import { FavContext } from './../../../Context/FavContext';
import { FavItem } from '../FavItem/FavItem';

export function FavTab() {

  const { showFavTab, favs, switchShowTab } = useContext(FavContext) as FavContextType;

  return <div className={`${styles.favTab} ${showFavTab ? styles.isActive : ''}`}>
    <span className={styles.backgroundCloser} onClick={switchShowTab}></span>
    <div className={styles.wraper}>
      <h3>Favoritos</h3>
      <div className={styles.favList}>
        {favs && favs.map(item => <FavItem data={item} />)}
      </div>
    </div>
  </div>
}