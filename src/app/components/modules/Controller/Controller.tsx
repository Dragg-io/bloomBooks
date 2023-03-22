import { ChangeEvent } from 'react';
import styles from './Controller.module.scss';
import React from 'react';
import { ListContext } from '../../../Context/ListContext';
import { ListContextType } from '../../../types/List';
import { RowsIcon } from '../../elements/RowsIcon/RowsIcon';
import { ColumnsIcon } from '../../elements/ColumnsIcon/ColumnsIcon';

export function Controller({ listTitle }: { listTitle: string }) {

  const { updateListedItems, cardMode, updateCardMode } = React.useContext(ListContext) as ListContextType;

  const selectChangeHandle = (event: ChangeEvent<HTMLSelectElement>) => {
    updateListedItems(parseInt(event.target.value));
  }

  const clickEventHandle = (newCardMode: boolean) => {
    updateCardMode(newCardMode);
  }

  return <div className={styles.controller}>
    <div className={styles.listTitle}>
      <h1>{listTitle}</h1>
    </div>
    <div className={styles.options}>
      <div className={styles.listedItemsControl}>
        Exibir
        <select defaultValue={5} title='listedItems' name="listedItems" id="listedItems" onChange={(event) => { selectChangeHandle(event) }}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        por vez
      </div>
      <div className={styles.showModeBtns}>
        <span className={`${!cardMode ? styles.isActive : ''}`} onClick={() => { clickEventHandle(false) }}>
          <RowsIcon />
        </span>
        <span className={`${cardMode ? styles.isActive : ''}`} onClick={() => { clickEventHandle(true) }}>
          <ColumnsIcon />
        </span>
      </div>
    </div>
  </div>
}