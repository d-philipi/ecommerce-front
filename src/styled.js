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

export const ItemContainer = styled.div`
  background-color: gray;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  h1 {
    font-size: 15px;
    font-weight: bold;
  }
  img {
    border-radius: 10px;
    width: 250px;
    height: 250px;
  }
  @media (max-width: 768px) {
    width: 130px;
    img {
      width: 150px;
      height: 150px;
    }
  }
`;
