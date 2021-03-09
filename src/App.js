import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import GlobalStyles from "./styles/global"

import {ModalProvider} from "./contexts/ModalContext"

function App() {
  return (
    <> 
     <ModalProvider value="">
      <BrowserRouter>
          <GlobalStyles/>
          <Routes />
      </BrowserRouter>
      </ModalProvider>
    </>
  );
}

export default App;