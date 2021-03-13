import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding:0;
    margin:0;
    outline:0;
    box-sizing:0;
    box-sizing:border-box;
  }
  *:focus{
    outline:0
  }
  html,body,#root{
    height:100%;
  }
  body{
    -webkit-font-smoothing:antialiased;
    background-color:#DCd0c0;
  }

  body,input,button{
    font: 14px 'Roboto', sans-serif;
  }

  h1,h2,h3,h4,hr{
    font-family: 'Noto Sans JP', sans-serif;
  }
  a{
    text-decoration: none
  }
  ul{
    list-style:none;
  }
  button,a{
    cursor:pointer;
  }
`;
