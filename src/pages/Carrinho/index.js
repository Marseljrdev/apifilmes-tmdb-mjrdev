import React, { useState, useEffect } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import './meu-carrinho.css';
import { Link } from 'react-router-dom';

export default function Carrinho() {

    const [filmes, setFilmes] = useState([]);
    const [preco, setPreco] = useState('9,99');

    useEffect(() => {

        const minhaLista = localStorage.getItem("@filmes");
        setFilmes(JSON.parse(minhaLista) || []);

    }, []);

    function deleteItem(id){
        let filtroFilmes = filmes.filter((item) => {
            return(item.id !== id);
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@filmes", JSON.stringify(filtroFilmes));
    }


 return (
   <div className="meu-carrinho" >
        <h1>Meu carrinho</h1>

        <ul>
            {filmes.map((item) => {
                return(
                    <li key={item.id} >
                        <label> Nome: <strong> {item.title} </strong> </label>
                        
                        <label> Valor: <strong>R$ {preco} </strong> </label>

                        <div>
                            <Link to={`/filmes/${item.id}`} >Ver detalhes</Link>
                            <button type="button" onClick={() => deleteItem(item.id)} >
                                <BsFillTrashFill size={16} />
                            </button>
                        </div>
                        
                    </li>
                );
            })}
        </ul>
         <Link to="/checkout">
         <button>
            Finalizar compra
        </button>
         </Link>   
   </div>
 );
}