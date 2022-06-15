import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import './home.css';


//URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=47583f4cc57b944035e5b124767cbb98&language=pt-BR
//URL_KEY: api_key=47583f4cc57b944035e5b124767cbb98

export default function Home(){

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [preco, setPreco] = useState('9,99');


    useEffect(() => {

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "47583f4cc57b944035e5b124767cbb98",
                    language: "pt-BR",
                    page: 1,
                }
            })

            //console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results.slice(0, 15));
            setLoading(false);

        }

        loadFilmes();

    }, []);


    if(loading){
        return(
            <div className="loading" >
                <h1>Carregando filmes...</h1>
            </div>
        );
    }


    return(
        <div>
            <div className="box" >
                {filmes.map(item => {
                    return(
                        <li key={item.id} >
                            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.id} />
                            <strong> {item.title} </strong>
                            <span> Avaliação: {item.vote_average} / 10 </span>
                            <span> R$ {preco} </span>
                            <p>Lançado em: {item.release_date}</p>
                            <Link to={`/filmes/${item.id}`} >
                                Pesquisar <FiSearch size={15} />
                            </Link>

                        </li>

                    );
                })}

            </div>
        </div>
    );
}