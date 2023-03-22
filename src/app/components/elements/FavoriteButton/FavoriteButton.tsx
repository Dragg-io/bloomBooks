import { useContext } from 'react';
import starIcon from '../../../assets/starIcon.svg';
import styles from './FavoriteButton.module.scss';
import { FavContext } from '../../../Context/FavContext';
import { FavContextType } from '../../../types/Fav';

export function FavoriteButton() {
  const { showFavTab, switchShowTab } = useContext(FavContext) as FavContextType;

  const clickHandle = () => {
    switchShowTab();
  }

  return <button className={`${styles.favoriteButton} ${showFavTab ? styles.isActive : ''}`} onClick={clickHandle}><img src={starIcon} alt="Ícone do botão de favoritos" /></button>
}