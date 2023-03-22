import { ReactElement } from "react";
import Helmet from 'react-helmet'
import { Header } from "../../modules/Header/Header";
import { FavTab } from './../../modules/FavTab/FavTab';
import { Pagination } from "../../modules/Pagination/Pagination";
import { Controller } from "../../modules/Controller/Controller";

interface props {
  title?: string;
  descript?: string;
  children: ReactElement;
  listTitle: string;
}

export function Default({ children, descript, title, listTitle }: props) {
  return <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={descript} />
    </Helmet>
    <Header />
    <Controller listTitle={listTitle} />
    {children}
    <Pagination />
    <FavTab />
  </>
}