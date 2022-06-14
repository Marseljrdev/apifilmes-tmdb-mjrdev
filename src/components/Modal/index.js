import React from 'react';
import { FiX } from 'react-icons/fi';
import './modal.css';

export default function Modal({ conteudo, close }) {
 return (
   <div className="modal" >
        <div className="container-modal" >
            <button className="close" onClick={close} >
                <FiX size={25} color="#FFF" />
                VOLTAR
            </button>

            <div>
                <h2>Compra finalizada com sucesso</h2>
                    <div className="row" >
                        <span>
                            Detalhes da compra...
                        </span>
                    </div>
                    <div className="row" >
                        <span>
                            Nome: <a> {conteudo.title} </a>
                        </span>
                    </div>
                    <div className="row" >
                        <span>
                            Data de lançamento: <a> {conteudo.release_date} </a>
                        </span>
                    </div>
            </div>

        </div>  
   </div>
 );
}