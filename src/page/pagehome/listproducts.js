import axios from "axios";
import React,{ useContext, useEffect, useState } from "react";
import MyContext from "../../context/MyContext";
import { ContainerCarregamento, ContainerList, Li} from "../../styled";

export default function ListProducts(){

    const { config } = useContext(MyContext);
    const [products, setProducts] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/products',config)
        .then(listSucess)
        .catch(listErr)

        function listSucess(resposta){
            setProducts(resposta.data);
            console.log("Deu certo!", resposta.data);
        }
    
        function listErr(err){
            console.log("Deu ruim!", err);
        }
        
    },[]);

    if(products === undefined){
        return(<ContainerCarregamento><img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"/></ContainerCarregamento>)
    }

    return (
        <ContainerList>
            {products.map((t,index) => 
                <Li positive={t.direction} key={index}>
                    <h1>{t.date}</h1>
                    <h2>{t.description}</h2>
                    <h3>R${t.value}</h3>
                </Li>
            )}
        </ContainerList>
    )
}