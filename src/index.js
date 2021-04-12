import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';



//Por aqui envio para a tela, necessario obedecer a ordem de cima para baixo.
ReactDOM.render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

