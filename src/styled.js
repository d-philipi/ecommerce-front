import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: darkorange;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const ContainerCadastro = styled.div`
  width: 100%;
  height: 667px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Saira Stencil One", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #ffffff;
  }
  p {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
`;

export const FormUp = styled.form`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 326px;
    height: 58px;
    background: #ffffff;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;

    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    border: 1px solid #ffffff;
  }
  button {
    width: 326px;
    height: 46px;
    background: darkolivegreen;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;

    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
    border: 1px solid darkorange;
  }
`;

export const ContainerLogin = styled.div`
  width: 100%;
  height: 667px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Saira Stencil One", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #ffffff;
  }
  p {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
`;

export const FormIn = styled.form`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 326px;
    height: 58px;
    background: #ffffff;
    border-radius: 5px;
    margin: 5px;
    padding: 5px;

    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    border: 1px solid #ffffff;
  }
  button {
    width: 326px;
    height: 46px;
    background: darkolivegreen;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;

    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
    border: 1px solid darkorange;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

export const StyledHeader = styled.div`
  width: 100%;
  height: 100px;
  background-color: #a35a00;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
  img {
    width: 200px;
    height: 67px;
  }
  ion-icon {
    font-size: 30px;
    position: absolute;
    right: 0;
    margin-right: 10px;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled.button`
  background-color: darkolivegreen;
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  h1 {
    color: white;
    font-size: 15px;
    font-weight: 400;
  }
`;

export const ContainerProducts = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 25px;
`;

export const TituloProducts = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
h1{
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    margin-left: 10px;
    color: #FFFFFF;
}
`;

export const TopBar = styled.div`
width: 100%;
height: 40px;
display: flex;
align-items: center;
justify-content: flex-end;
ion-icon{
    width: 35px;
    height: 35px;
    margin: 10px;
    color: #FFFFFF;
    cursor:pointer;
}
img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor:pointer;
}
`;

export const ContainerCarregamento = styled.div`
    width: 100%;
    height: 667px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 200px;
    }
`;

export const ContainerList = styled.ul`
width: 326px;
height: 400px;
background: #FFFFFF;
border-radius: 5px;
padding: 10px;
position: relative;
`;

export const Li = styled.li`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
img{
  width: 30px;
  height: 30px;
}
h2{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
}
h3{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #03ac00;
}
`;

export const Saldo = styled.li`
width: 90%;
position: absolute;
bottom: 0;
left: 10;
display: flex;
justify-content: space-between;
align-items: center;
p{
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #000000;
}
h1{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #03AC00;
}
`

export const ConcluirCompra = styled.button`
width: 326px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
background: #03ac00;
border-radius: 5px;
border: 1px solid #03ac00;
cursor: pointer;

p{
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #FFFFFF;
}
`