import styled from 'styled-components';

export const Container = styled.div`
  position:fixed;
  width:100vw;
  height: 100vh;
  background-color:rgb(0,0,0,0.75);
  top:0;
  left:0;

  display:flex;
  justify-content:center;
  align-items:center;
`;


export const Content = styled.div`
    opacity:100%;
    width:560px;
    height: 690px;
    background-color:#f4f4f4;
    border-radius: 4px;
    position: relative;

    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px;

    button.close{
    position: absolute;
    top:2%;
    right:8%;

    border:none;
    background:none;
    }
`;
