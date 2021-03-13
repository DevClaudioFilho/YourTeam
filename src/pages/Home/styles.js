import styled from 'styled-components';


export const Header =styled.header`
  width: 100%;
  height: 80px;

  background: #f4f4f4 ;
  margin-bottom:30px;
`;

export const Container =styled.div`
    max-width: 1150px;
    margin:0 auto;
`;

export const InfosContainer =styled.section`
  display:flex;
  justify-content:space-between;
`;

export const InfoPainel =styled.section`
  display:flex;
  flex-wrap:wrap; 
  justify-content:space-between;
  width:500px;

  div{
    background-color:#f4f4f4 ;
    width:240px;
    height:115px;
  }
  div:first-child{
    width:515px;
    height:200px; 
    margin-bottom:20px;
  }
`;


export const Filters = styled.div`
  display:flex;
  justify-content:flex-end;

  margin-top:30px;
  div{
  position:relative;
  display:flex;
  justify-content:space-between;
  align-items:center;
  box-sizing:border-box;
  padding:0 30px;

  width: 410px;
  height: 38px;

  background: #f4f4f4 ;
  border:1px solid; 
  border-radius: 20px;

  margin-right:5px;

  button{
    background:transparent;
    border:none;
  }

  input{
    display:none;
    position:absolute;
    top:3px;
    width:90%;
    height: 30px;
    background:inherit;
    border:none;
    border-bottom:solid 1px #000;
  }

  input.active{
    display:block;
  }

  }

   a.icon{
    border-left:solid 2px #000;
    padding-left:5px;

    display:flex;
    justify-content:center;
  
  }
`;
export const TableContainer =styled.div`
  margin-top:20px;
  width: 100%;
  border:solid 1px #373737;
  position: relative;
  table {
    border-collapse:collapse;
    width:100%;
    text-align:left;
  }

  tr{
    border:solid 1px #373737;
  }

  th,td {
    width:calc(100%);
    width:226px;
    height: 60px;
    padding-left:11px;
  }
  th{
    font-weight:700;
    font-size:18px;
  }


  thead{
    background-color:#C0B283;
  }
  thead>tr {
    position: relative;
    display: block;
    border:solid 1px #373737;
  }

  tbody {
    display: block;
    height: 300px;
    overflow: auto;
    background:#f4f4f4;
  }
  tbody tr:nth-child(even){
    background:#838383;
    
  }
  button{
    background:none;
    border:none;
    margin-left:25px;
  }

`;
