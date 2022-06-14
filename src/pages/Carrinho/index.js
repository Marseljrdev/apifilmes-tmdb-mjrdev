import React, { useState, useEffect } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import './meu-carrinho.css';
import { Link } from 'react-router-dom';

export default function Carrinho() {

    const [filmes, setFilmes] = useState([]);

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
                        <strong> {item.title} </strong>

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