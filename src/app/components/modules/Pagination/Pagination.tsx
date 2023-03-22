import React from 'react';
import styles from './Pagination.module.scss';
import { ListContext } from '../../../Context/ListContext';
import { ListContextType } from '../../../types/List';

export function Pagination() {

  const { paginateItems, updateActiveListPart, activeListPart } = React.useContext(ListContext) as ListContextType;

  const btnClickHandle = (index: number) => {
    updateActiveListPart(index);
  }

  const btnNextClickHandle = () => {
    if (activeListPart < paginateItems.length - 1) {
      updateActiveListPart(activeListPart + 1);
    }
  }

  const btnPrevClickHandle = () => {
    if (activeListPart > 0) {
      updateActiveListPart(activeListPart - 1);
    }
  }

  return <div className={styles.pagination}>
    <button onClick={btnPrevClickHandle}>{'<'}</button>
    {
      paginateItems.length > 0 && paginateItems.map((item, index) => <button key={index} className={activeListPart === index ? styles.isActive : ''} onClick={() => { btnClickHandle(index) }}>{index + 1}</button>)
    }
    <button onClick={btnNextClickHandle}>{'>'}</button>
  </div>
}