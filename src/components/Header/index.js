//import { FiSearch } from 'react-icons/fi';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';


export default function Header() {


    const [filmes, setFilmes] = useState('');
    //const [input, setInput] = useState('');

    useEffect(() => {
        
        const minhaLista = localStorage.getItem("@filmes");
        setFilmes(JSON.parse(minhaLista));

    }, []);


 return (
    <header className='container' >
        <Link to="/" className="logo" >Project Flix</Link>
        

        <Link to="/favoritos" className="favoritos" >
            <div>
                <strong>Meus filmes</strong>
                <span> {filmes.length} filmes </span>
            </div>
        </Link>

    </header>
 );
}


/*         <div className='container-input' >
            <input 
                type="text" 
                placeholder="Pesquisar filme" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button type='button' className="buttonsearch" onClick={handleSubmit} >
                <FiSearch size={25} />
            </button>

        </div> */