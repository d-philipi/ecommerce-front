import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { useState } from "react";

import { GlobalStyle } from "./styled";
import MyContext from "./context/MyContext";
import SignIn from "./page/pageuser/signin";
import SignUp from "./page/pageuser/signup";
import Home from "./page/pagehome/home";
import Cart from "./page/pagecart/cart";

export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [checkSenha, setCheckSenha] = useState("");
  const [nome, setNome] = useState("");
  const [image, setImage] = useState("");

  const [token, setToken] = useState("");
  const [usuario, setUsuario] = useState("");
  const [cartEmail, setCartEmail] = useState("");
  const [selectedItemsArray, setSelectedItemsArray] = useState([]);
  const [carrinho, setCarrinho] = useState("");

  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  
  return (
    <BrowserRouter>
    	<GlobalStyle/>
      <MyContext.Provider value={{token, setToken, usuario, setUsuario, config, carrinho, setCarrinho}}>
      <Routes>
        <Route path="/" 
        element={<SignIn
        email={email}
        setEmail={setEmail}
        senha={senha}
        setSenha={setSenha}
        setCartEmail={setCartEmail}
        />} />
        <Route path="/sign-up" 
        element={<SignUp
        email={email}
        setEmail={setEmail}
        senha={senha}
        setSenha={setSenha}
        nome={nome}
        setNome={setNome}
        checkSenha={checkSenha}
        setCheckSenha={setCheckSenha}
        image={image}
        setImage={setImage}
        />}/>
        <Route path="/home"
        element={<Home
        cartEmail={cartEmail}
        selectedItemsArray={selectedItemsArray}
        setSelectedItemsArray={setSelectedItemsArray}
        />}/>
        <Route path="/cart"
        element={<Cart
        cartEmail={cartEmail}
        selectedItemsArray={selectedItemsArray}
        setSelectedItemsArray={setSelectedItemsArray}
        />}/>
      </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}
