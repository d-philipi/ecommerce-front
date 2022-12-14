import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ContainerCadastro, FormUp } from '../../styled';


export default function SignUp({email, setEmail, senha, setSenha, nome, setNome, checkSenha, setCheckSenha, image, setImage}) {

  const navigate = useNavigate();

  function cadastrar(e){
    e.preventDefault();
    
    if (senha !== checkSenha){
      alert("Senhas não correspondem!")
    }else{
      axios.post('http://localhost:5000/sign-up', {
              name: nome,
              email: email,
              password: senha,
              image: image
          }).then(CadastroSucesso).catch(cadastroFalha);
    }
  }

  function CadastroSucesso(resposta){
    setEmail("");
    setSenha("");
    setNome("");
    setCheckSenha("");
    navigate('/');
  }

  function cadastroFalha(erro){
      console.log(erro.response);
  }

    return (
      <ContainerCadastro>
        <h1>
          My E-commerce
        </h1>
        <FormUp onSubmit={cadastrar}>
          <input type="text" required placeholder="Digite o seu apelido..." value={nome} onChange={e => setNome(e.target.value)}/>
          <input type="email" required placeholder="Digite o seu email..." value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="password" required placeholder="Digite a sua senha..." value={senha} onChange={e => setSenha(e.target.value)}/>
          <input type="password" required placeholder="Confirme sua senha..." value={checkSenha} onChange={e => setCheckSenha(e.target.value)}/>
          <input type="text" required placeholder="Copie o link da sua foto..." value={image} onChange={e => setImage(e.target.value)}/>
          <button type='submit'>Cadastrar</button>
        </FormUp>
        <Link to={"/"}>
          <p>Já tem uma conta? Entre agora!</p>
        </Link>
      </ContainerCadastro>
    );
}