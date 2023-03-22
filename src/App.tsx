import './app/styles/vendors/_normalize.scss';
import { useState } from 'react'
import { AppRoutes } from './Routes'
import FavProvider from './app/Context/FavContext';
import ListProvider from './app/Context/ListContext';
function App() {

  return (
    <FavProvider>
      <ListProvider>
        <AppRoutes />
      </ListProvider>

    </FavProvider>

  )
}

export default App
