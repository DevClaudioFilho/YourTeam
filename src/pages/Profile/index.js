import React,{useContext} from 'react';

import {  Container,Header,ProfileInfos,Infos,Filters,TableContainer,ModalContent } from './styles';

import Eye from "../../assets/icons/Eye.svg"
import Foto from "../../assets/perfil.jpg"
import Vector from "../../assets/icons/Vector.svg"
import { ModalContext } from "../../contexts/ModalContext";
import Modal from '../../components/Modal';
import { Link } from 'react-router-dom';


function Profile() {
  const {modalIsOpen,openModal}=useContext(ModalContext);


  return(
    <>
      <Header>
          <Link to="/"> Teste</Link>
      </Header>
      <Container>
        <ProfileInfos>
          <img src={Foto} alt=""/>
          <Infos>
            <div className="Text">
              <span>
                <h1>Nome:</h1>
                <p>Paula</p>
              </span>
              <span>
                <h1>Ingresso:</h1>
                <p>15/10/1997</p>
              </span>
              <span>
                <h1>Cargo:</h1>
                <p>Colaborador</p>
              </span>
            </div>
            <div>
              <button onClick={openModal}>
                Editar Perfil
              </button>
              <button>
                Adicionar Formação
              </button>
            </div>
          </Infos>
        </ProfileInfos>
        <TableContainer>
          <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Formacao</th>
              <th>Status</th>
              <th>{null} </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nome</td>
              <td>Cargo</td>
              <td>Formacao</td>
              <td>Status</td>
              <td>
                <Link to="/profile/id" >
                  <img src={Eye} alt="Visualizar"/>
                </Link>
                <button>
                  <img src={Vector} alt="Visualizar"/>
                </button>
              </td>
          </tr>
          <tr>
              <td>Nome</td>
              <td>Cargo</td>
              <td>Formacao</td>
              <td>Status</td>
            <td>
              <Link to="/profile/id" >
                <img src={Eye} alt="Visualizar"/>
              </Link>
              <button>
                <img src={Vector} alt="Visualizar"/>
              </button>
            </td>
          </tr>
          <tr>
              <td>Nome</td>
          </tr>
          <tr>
              <td>Nome</td>
          </tr>
          <tr>
              <td>Nome</td>
          </tr>
          <tr>
              <td>Nome</td>
          </tr>
          <tr>
              <td>Nome</td>
          </tr>
          <tr>
              <td>Nome</td>
          </tr>
          </tbody>
        </table>  
        </TableContainer>
      </Container>
      {modalIsOpen?
        <Modal>
          <ModalContent>
            <div className="image">
              <img src={Foto} alt=""/>
              <button>T</button>
            </div>
            <form  type="submit" action="">
              <label for="fname">Nome:</label>
              <input type="text" id="fname" name="fname"/>
  
              <label for="lname">Ultimo Nome:</label>
              <input type="text" id="lname" name="lname"/>
  
              <label for="lname">Cargo:</label>
              <input  type="text" id="lname" name="lname"/>
              <button type="submit">Enviar</button>
            </form>
          </ModalContent>
        </Modal>:null
      }    
    </>
  );
} 

export default Profile;
