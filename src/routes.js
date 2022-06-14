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
            <Route exact path="/" element={ <Home/> } />
            <Route exact path="/filmes/:id" element={ <Filmes/> } />
            <Route exact path="/favoritos" element={ <Favoritos/> } />
            <Route exact path="/carrinho" element={ <Carrinho/> } />
            <Route exact path="/checkout" element={ <Checkout/> } />

            <Route exact path="*" element={ <Erro/> } />
        </Routes>    
        </BrowserRouter>    
          

    );
}