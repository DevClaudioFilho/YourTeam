import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import GlobalStyles from "./styles/global"

import {ModalProvider} from "./contexts/ModalContext"

function App() {
  return (
     <ModalProvider 
      modalIsOpen openModal closeModal
     >
        <BrowserRouter>
            <GlobalStyles/>
            <Routes />
        </BrowserRouter>
      </ModalProvider>
  );
}

export default App;