import React from 'react';
import styles from './Books.module.scss';
import { ListContext } from '../../../Context/ListContext';
import { ListContextType } from '../../../types/List';
import { BookItem } from './../../modules/BookItem/BookItem';
import { Book } from './../../../types/Book.d';

export function BooksPage() {
  const { paginateItems, activeListPart, cardMode } = React.useContext(ListContext) as ListContextType;
  return <main className={`${styles.booksPage} ${cardMode ? styles.boxLayout : ''}`}>
    {paginateItems.length > 0 && paginateItems[activeListPart].map((item: Book) => <BookItem data={item} />)}
  </main>
}