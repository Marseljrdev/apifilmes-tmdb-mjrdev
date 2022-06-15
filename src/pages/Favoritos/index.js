import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillTrashFill, BsCart3 } from 'react-icons/bs';
import { toast } from 'react-toastify';
import './favoritos.css';

export default function Favoritos() {

    const [filmes, setFilmes] = useState([]);
    const navigate = useNavigate();

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
        toast.info('Filme deletado com sucesso');
    }

    function redirect(){
        navigate("/carrinho", { replace: true });
        return;
    } 


    return (
    <div className="meus-filmes" >
        <h1>Meus filmes</h1>

        {filmes.length === 0 && <span>Ops, você não tem nenhum filme salvo! :( </span>}

        <ul>
            {filmes.map((item) => {
                return(
                    <li key={item.id}>
                        <strong> Nome:<span> {item.title} </span> </strong>

                        <div>
                            <Link to={`/filmes/${item.id}`} >Ver detalhes</Link>
                            <button type="button" onClick={ () => deleteItem(item.id)} > 
                                <BsFillTrashFill size={16} />
                            </button>
                            
                            <button type="button" onClick={redirect} >
                                <BsCart3 size={16} />
                            </button> 



                        </div>


                    </li>
                );
            })}
        </ul>
        
        
    </div>
    );
}
