import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';
import './filme-info.css';


export default function Filmes() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);
  const [preco, setPreco] = useState(9,99);

  useEffect(() => {

    async function loadFilmes(){

      await api.get(`/movie/${id}`, {
        params:{
          api_key: "47583f4cc57b944035e5b124767cbb98",
          language: "pt-BR",
        }
      })
      .then((response) => {

        setFilme(response.data);
        setLoading(false);

        //console.log(response.data);
      })
      .catch(() => {
        console.log('Filme não encontrado');
        navigate("/", { replace: true });
        return;
      })

    }

    loadFilmes();

    
    return () => {
      console.log("Componente desmontado");
    }

  }, [id, navigate]);


  if(loading){
    return(
      <div className="filme-info" >
        <h1>Carregando detalhes do filme...</h1>
      </div>
    );
  }


   function salvarFilme(){
    //e.preventDefault();
    const minhaLista = localStorage.getItem("@filmes");

    let filmesSalvo = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvo.some((filmesSalvo) => filmesSalvo.id === filme.id);

    if(hasFilme){
      toast.warning('Esse filme já está salvo na sua lista');
      return;
    }

    filmesSalvo.push(filme);
    localStorage.setItem("@filmes", JSON.stringify(filmesSalvo));
    toast.success('Filme salvo com sucesso');

  }
 

 return (
   <div className="filme-info" >
        <h1> {filme.title} </h1>
        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
        <h3>Sinopse:</h3>
        <span> {filme.overview} </span>
        <strong> Avaliação: {filme.vote_average} /10 </strong>
        <strong>Data de lançamento: {filme.release_date} </strong>

        <div className="area-buttons" >
          <button onClick={salvarFilme} >Salvar</button>
          <button>
            <a target="blank" href={`https://www.youtube.com/results?search_query=${filme.title} Trailer `} >Trailer</a>
          </button>

        </div>

   </div>
 );
}

