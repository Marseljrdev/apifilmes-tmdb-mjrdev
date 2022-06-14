import React, { useEffect, useState } from 'react';
import './checkout.css';
import Modal from '../../components/Modal';

export default function Checkout() {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    const [filmes, setFilmes] = useState([]);

    const [showPostModal, setShowPostModal] = useState(false);
    const [detail, setDetail] = useState();

    useEffect(() => {
        const minhaLista = localStorage.getItem("@filmes");
        setFilmes(JSON.parse(minhaLista));
    }, []);

    function tagglePostModal(item){
        setShowPostModal(!showPostModal);
        setDetail(item);
        setNome('');
        setCpf('');
        setCelular('');
        setEmail('');
        setCep('');
        setEndereco('');
        setCidade('');
        setEstado('');

        //console.log(item);
    }

 return (
   <div>
        <div className="checkout" >
            <form>
                <h1>Finalizar compra</h1>
                <input type="text" name="nome" placeholder="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)} />

                <input type="text" name="cpf" placeholder="CPF" pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" value={cpf} onChange={(e) => setCpf(e.target.value)} /> 

                <input type="tel" name="celular" placeholder="Celular" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={celular} onChange={(e) => setCelular(e.target.value)} />

                <input type="email" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />

                <input type="text" name="cep" pattern="[0-9]{2}.[0-9]{3}-[0-9]{3}" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)} />

                <input type="text" name="endereco" placeholder="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} />

                <input type="text" name="cidade" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />

                <input type="text" name="estado" placeholder="Estado" value={estado} onChange={(e) => setEstado(e.target.value)} />

            </form>    
            <ul>
            <h1>Filmes</h1>
                {filmes.map((item) => {
                    return(
                        <li key={item.id} >
                        <label>Nome:</label>
                        <strong> {item.title} </strong>
                        <label>Avaliação:</label>
                        <strong> {item.vote_average} / 10 </strong>
                        

                        <button type="button" onClick={() => tagglePostModal(item)} >Finalizar</button>
                        </li>
                    );
                })}
            </ul>
        </div>

        
        {showPostModal && (
            <Modal
                conteudo={detail}
                close={tagglePostModal}
            />
        )}

   </div>
 );
}

