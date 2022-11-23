import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import { useState } from "react";
import MyContext from "./context/MyContext";

export default function App() {
  const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [checkSenha, setCheckSenha] = useState("");
	const [nome, setNome] = useState("");
	const [token, setToken] = useState("");
	const config = {
		headers: {
			authorization: `Bearer ${token}`
		}
	}
  
  return (
    <BrowserRouter>
    	<GlobalStyle/>
      <MyContext.Provider.Provider value={{token, setToken, config}}>
      <Routes>
        <Route path="/" 
        element={<SignIn
        email={email}
        setEmail={setEmail}
        senha={senha}
        setSenha={setSenha}
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
        />}/>
        <Route path="/home"
        element={<Home
        />}/>
      </Routes>
      </MyContext.Provider.Provider>
	</BrowserRouter>
  );
}

