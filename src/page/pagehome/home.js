import axios from "axios";
import React, { useEffect, useState } from "react";
import { ItemContainer, ItemsContainer } from "../../styled";

const URL = "http://localhost:5000/home";
let itens = [];

export default function Home() {
  const [itemsArray, setItemsArray] = useState([]);
  const [selectedItemsArray, setSelectedItemsArray] = useState([]);

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

  function selecionaItem(param) {
    if (!selectedItemsArray.includes(param)) {
      itens = [...selectedItemsArray, param];
      setSelectedItemsArray(itens);
    } else {
      const newItens = itens.filter((item) => item != param);
      setSelectedItemsArray(newItens);
    }
  }

  console.log(selectedItemsArray);

  return (
    <ItemsContainer>
      {itemsArray.length > 0
        ? itemsArray.map((item, index) => {
            return (
              <ItemContainer
                onClick={() => selecionaItem(item._id)}
                key={index}
              >
                <img src={item.image} />
                <h1>
                  {item.name} R${parseFloat(item.price).toFixed(2)}
                </h1>
              </ItemContainer>
            );
          })
        : ""}
    </ItemsContainer>
  );
}
