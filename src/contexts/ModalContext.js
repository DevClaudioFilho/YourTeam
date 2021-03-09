import React, { useState } from 'react';

const ModalContext = React.createContext({});

const ModalProvider = ({children}) => {
  const [modalIsOpen,setModalIsOpen]=useState(false);

  function openModal() {
    console.log(modalIsOpen);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
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