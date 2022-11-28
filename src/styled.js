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

export const StyledCartContainer = styled.div`
  background-color: white;
  width: 50%;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 650px) {
    width: 80%;
  }
`;

export const StyledItemCart = styled.div`
  background-color: #a35a00;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 5px;
  margin: 5px 0;
  border-radius: 5px;
  img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    border-radius: 5px;
  }
  h1 {
    color: white;
    font-size: 25px;
    font-weight: 400;
    margin-right: 10px;
  }
  ion-icon {
    color: white;
    font-size: 20px;
    margin-right: 5px;
  }
  @media (max-width: 650px) {
    img {
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }
    h1 {
      font-size: 12px;
      font-weight: 200;
    }
  }
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
