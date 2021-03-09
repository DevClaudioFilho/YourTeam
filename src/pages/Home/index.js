import React from 'react';

import {  Container,Header,InfosContainer,InfoPainel,Filters,TableContainer } from './styles';

import Eye from "../../assets/icons/Eye.svg"
import Search from "../../assets/icons/search.svg"
import Vector from "../../assets/icons/Vector.svg"
import { Link } from 'react-router-dom';

function Home() {
  return(
    <>
      <Header>

      </Header>
      <Container>
        <InfosContainer>
          <InfoPainel>
            <div></div>
            <div></div>
            <div></div>
          </InfoPainel>
          <InfoPainel>
            <div></div>
            <div></div>
            <div></div>
          </InfoPainel>
        </InfosContainer>
        <Filters>
          <div>
            <button>Nome</button>
            <button>Cargo</button>
            <button>Formacoes</button>
            <button>sei la</button>

            <input type="text" />
          </div>
          <a className="icon"><img src={Search} alt=""/></a>
        </Filters>
        
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
    </>
  );
}

export default Home;
