import axios from "axios";
import React, { useEffect, useState } from "react";
import { ItemsContainer, StyledHeader } from "../../styled";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const URL = "http://localhost:5000/home";
let itens = [];

export default function Home({cartEmail}) {
  const [itemsArray, setItemsArray] = useState([]);
  const [selectedItemsArray, setSelectedItemsArray] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(URL)
      .then((data) => {
        setItemsArray(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function selecionaItem(item) {
    if (!selectedItemsArray.includes(item)) {
      itens = [...selectedItemsArray, item];
      setSelectedItemsArray(itens);
      criaCarrinho(itens);
    } else {
      const newItens = selectedItemsArray.filter((newItem) => newItem !== item);
      setSelectedItemsArray(newItens);
      criaCarrinho(newItens);
    }
  }

  function criaCarrinho(cart) {
    const email = cartEmail;
    axios
    .post(URL, {
      email, cart
    })
    .then(data => console.log(data))
    .catch(err => {
      console.log(err);
    })
  }

  console.log(selectedItemsArray);

  return (
    <>
      <StyledHeader>
        <img src={logo} alt="logo" />
        <ion-icon
          name="cart-outline"
          onClick={() => navigate("/cart")}
        ></ion-icon>
      </StyledHeader>
      <ItemsContainer>
        {itemsArray.length > 0
          ? itemsArray.map((item, index) => {
              return (
                <ItemContainer
                  bordercolor={
                    selectedItemsArray.includes(item) ? true : false
                  }
                  onClick={() => selecionaItem(item)}
                  key={index}
                >
                  <img src={item.image} alt={item.name} />
                  <h1>
                    {item.name} R${parseFloat(item.price).toFixed(2)}
                  </h1>
                </ItemContainer>
              );
            })
          : ""}
      </ItemsContainer>
    </>
  );
}

const ItemContainer = styled.div`
  background-color: #a35a00;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 3px solid ${(props) => (props.bordercolor === true ?  "#00FF00" : "#A35A00")};
  h1 {
    color: white;
    font-size: 20px;
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
