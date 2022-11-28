import axios from "axios";
import React,{ useContext, useEffect, useState } from "react";
import MyContext from "../../context/MyContext";
import { ContainerCarregamento, ContainerList, Li, Saldo} from "../../styled";

export default function ListProducts(){

    const { config } = useContext(MyContext);
    const [products, setProducts] = useState();
    const [saldo, setSaldo] = useState("");

    useEffect(() => {
        axios.get('http://localhost:5000/cart',config)
        .then(listSucess)
        .catch(listErr)

        function listSucess(resposta){
            setProducts(resposta.data);
            console.log("Deu certo!", resposta.data);
            saldoAtual(resposta.data)
        }
    
        function listErr(err){
            console.log("Deu ruim!", err);
        }
        
    },[]);

    function saldoAtual (list){

        let novoSaldo = 0;

        for(let i = 0; i < list.length; i++){
                novoSaldo = novoSaldo + parseInt(list[i].value);
        }
        
        setSaldo(novoSaldo);
    }

    if(products === undefined){
        return(<ContainerCarregamento><img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"/></ContainerCarregamento>)
    }

    return (
        <ContainerList>
            {products.map((t,index) => 
                <Li key={index}>
                    <img src={t.date} alt="Imagem do produto"/>
                    <h2>{t.description}</h2>
                    <h3>R${t.value}</h3>
                </Li>
            )}
            <Saldo>
                <p>Saldo</p>
                <h1>R${saldo}</h1>
            </Saldo>
        </ContainerList>
    )
}