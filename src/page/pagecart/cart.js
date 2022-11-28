import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  StyledContainer,
  StyledCartContainer,
  StyledHeader,
  StyledItemCart,
  StyledButton,
} from "../../styled";
import logo from "../../assets/logo.png";
import emptyCart from "../../assets/empty-cart.png";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/cart";

export default function Cart({ cartEmail, selectedItemsArray, setSelectedItemsArray }) {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  console.log(selectedItemsArray);

  useEffect(() => {
    axios
      .get(`${URL}/${cartEmail}`)
      .then((data) => {
        console.log(data.data[0]);
        setItems(data.data[0].items);
      })
      .catch(() => {});
  }, []);

  console.log(items);

  function navigation(param) {
    if (param > 0) {
      navigate("/checkout");
    } else {
      navigate("/home");
    }
  }

  function removeItemFromCart(item) {
    const newItens = items.filter((newItem) => newItem !== item);
    setItems(newItens);
    setSelectedItemsArray(newItens);
    criaCarrinho(newItens);
  }

  function criaCarrinho(cart) {
    axios
      .post(URL, {
        cartEmail,
        cart,
      })
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <StyledHeader>
        <img src={logo} alt="logo" />
      </StyledHeader>
      <StyledContainer>
        <StyledCartContainer>
          {items.length > 0 ? (
            items.map((item) => {
              return (
                <StyledItemCart>
                  <img src={item.image} alt={item.name} />
                  <h1>{item.name.toUpperCase()}</h1>
                  <h1>R${parseFloat(item.price).toFixed(2)}</h1>
                  <ion-icon
                    name="trash-outline"
                    onClick={() => removeItemFromCart(item)}
                  ></ion-icon>
                </StyledItemCart>
              );
            })
          ) : (
            <>
              <img src={emptyCart} alt="empty cart" />
              <h3>Nenhum produto adicionado ao carrinho</h3>
            </>
          )}
        </StyledCartContainer>
        <StyledButton onClick={() => navigation(items.length)}>
          {items.length > 0 ? (
            <h1>Continuar para o pagamento</h1>
          ) : (
            <h1>Comece a comprar</h1>
          )}
        </StyledButton>
      </StyledContainer>
    </>
  );
}
