import React, { useState } from 'react';

const ModalContext = React.createContext({});

const ModalProvider = ({children}) => {
  const [modalIsOpen,setModalIsOpen]=useState(false);

  function openModal() {
    
    setModalIsOpen(true);
    console.log(modalIsOpen);
  }

  function closeModal() {
    setModalIsOpen(false);
    console.log(modalIsOpen);
  }

  return (
    <ModalContext.Provider value={{
      modalIsOpen,openModal,closeModal
      }}>
      {children}
    </ModalContext.Provider>
  );
}

export { ModalContext, ModalProvider };