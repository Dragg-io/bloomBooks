import { FavoriteButton } from '../../elements/FavoriteButton/FavoriteButton';
import { Logo } from '../../elements/Logo/Logo';
import { SearchBar } from '../../elements/SearchBar/SearchBar';
import styles from './Header.module.scss';

export function Header() {
  return <div className={styles.header}>
    <Logo />
    <SearchBar />
    <FavoriteButton />
  </div>
}