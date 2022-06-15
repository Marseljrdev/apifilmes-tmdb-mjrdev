import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';


export default function Header() {


    const [filmes, setFilmes] = useState('');
    

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

