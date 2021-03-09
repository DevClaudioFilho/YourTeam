import React,{useState,useContext} from 'react';
import { ModalContext } from "../../contexts/ModalContext";
import { Container,Content } from './styles';

function Modal(props) {
  const {closeModal} = useContext(ModalContext)

  return (
  <>
    <Container >
      <Content>
        <button className="close" onClick={closeModal}>X</button>
        {props.children}
      </Content>
    </Container> 
  </>
  );
}

export default Modal;