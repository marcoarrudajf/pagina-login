import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Config from './pages/config';


//Para exportar a rota podemos usar dois caminhos:
//esse abaixo:
//export default() => {} ou
//export default function(){}
//Fica mais limpo.

const rotas = () => {
    return (
        //Aqui vai ser feito todo código da rota.
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/config">
                <Config />
            </Route>
        </Switch>
    );
}

export default rotas;
//O <Router> vamos usar um comando path="/" onde este vai sempre que tiver este simbolo vai chamar o conteudo
// Usamos o comando (Exact) para ele chamar exatamente o conteudo