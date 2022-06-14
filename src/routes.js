import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Filmes from './pages/Filmes';
import Favoritos from './pages/Favoritos';
import Carrinho from './pages/Carrinho';
import Checkout from './pages/Checkout';
import Erro from './pages/Erro';
import Header from './components/Header';


export default function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route  path="/" element={ <Home/> } />
            <Route  path="/filmes/:id" element={ <Filmes/> } />
            <Route  path="/favoritos" element={ <Favoritos/> } />
            <Route  path="/carrinho" element={ <Carrinho/> } />
            <Route  path="/checkout" element={ <Checkout/> } />

            <Route  path="*" element={ <Erro/> } />
        </Routes>    
        </BrowserRouter>    
          

    );
}