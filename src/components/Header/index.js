import React from 'react';//  Assim como no App, faço aqui importa as propriedades do React para minha tela App.

// este link trabalho para substituir o href.
import { Link } from 'react-router-dom';

//Devo importar o styled para cá.
import { AreaHeader } from './styled';



// Crio a Função que me retornará meu conteudo.
function Header(props) {
    return (
        //Vamos criar o corpo do nosso topo.
        <AreaHeader>
            <div className="ar-container">
                <div className="ar-logo">
                    <img src="../../../logooficial.jpg" alt=""></img>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/config">Configurações</Link></li>
                        <li><Link to="/logout">sair</Link></li>
                    </ul>
                    <div className='avatar'>
                        <img src={props.user.avatar} />
                        <label>{props.user.name}</label>
                    </div>
                </nav>
            </div>
        </AreaHeader> //importando da variavel do css. styled
    );
}
//Preciso exportar o componente: para isso criamos o comando:
export default Header;
