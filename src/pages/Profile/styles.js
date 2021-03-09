import styled from 'styled-components';


export const Header =styled.header`
  width: 100%;
  height: 100px;

  background: #C4C4C4;
  margin-bottom:30px;
`;

export const Container =styled.div`
    max-width: 1150px;
    height: 75vh;
    margin:0 auto;
    width: 1000px;

    background: #C4C4C4;
    border-radius:5px;

    padding:60px;
`;


export const ProfileInfos =styled.div`
  display:flex;
  justify-content:space-between;

  img{
    width:180px;
    height: 180px;
    background-size:cover;
    
    border-radius:50%;
    margin-right:40px
  }
`;

export const Infos =styled.div`
  width: 100%;
  height: 180px;
  max-width:500px;

  background: #C4C4C4;
  margin-bottom:30px;

  display:flex;
  flex-direction:column;
  justify-content:space-between;


  div{
    width:100%;
    display:flex;
    justify-content:space-between;

    button{
      width: 134px;
      height: 55px;
      background: #747474;
      padding:10px;
    }
  }
 

  div.Text{
    display:flex;
    justify-content: space-between;

    span{
      h1{
        font-style: normal;
        font-weight: bold;
        font-size: 26px;
        line-height: 30px;
        color: #000000;

        margin-bottom:15px;
      }
      p{
        width: 97px;
        height: 21px;

        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;

        color: #000000;
      }
      }
    }

    span+span{
      
  }


`;


export const Filters = styled.div`
  display:flex;
  justify-content:flex-end;

  margin-top:60px;
  div{
  position:relative;
  display:flex;
  justify-content:space-between;
  align-items:center;
  box-sizing:border-box;
  padding:0 30px;

  width: 410px;
  height: 38px;

  background: #C4C4C4;
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
  table {
    border-collapse:collapse;
    width: 100%;
    text-align:left;
  }

  th,td {
    max-width:calc(1150px/5);
    width:calc(100vw/5);
    height: 60px;
    padding-left:11px;
  }

  thead{
    background-color:#747474;
  }
  thead>tr {
    position: relative;
    display: block;
  }

  tbody {
    display: block;
    height: 300px;
    overflow: auto;
    background:#C4C4C4;
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

export const ModalContent =styled.div`
  max-width:100%;
  width:100%;
  height: 100%;
  text-align:left;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  div.image{
    position:relative;
    display:flex;
    flex-direction:columns;
    justify-content:center;
    margin:0 auto;
    width:250px;
    img{
    border-radius:50%;
    max-width:250px;
    max-height:250px;
    }
    button{
      position:absolute;
      bottom:2%;
      right:5%; 

      width:60px;
      height: 60px;

      border-radius:50%;
      border:solid 1px #000;
      background: #747474;
    }
  }

  form{
    display:flex;
    flex-direction:column;
    margin:0 auto;
    width:280px;

    label{
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;

      color: #000000;
      margin-top:15px;
    }

    label:first-child{
      margin-top:0px;
    }


    input{
        height: 30px;
        background: #747474;
        padding:5px 10px;
        color:#fff;
        margin-top:3px;
    }

    button{
      width: 200.36px;
      height: 45px;

      margin:30px auto 0;
      background: #747474;
    }
  }


`;
